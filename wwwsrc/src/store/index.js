import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    activeSets: [],
    activeSetsByExercise: [],
    activeMuscleGroup: {},
    activeMuscleGroups: [],
    activeExercise: {},
    activeExercises: [],
    allExercisesByMuscleGroup: [],
    activeExercisesByMuscleGroup: [],
    activeDate: { date: "09-06-2020" },
    muscleGroups: [{ name: "Chest" }, { name: "Triceps" }, { name: "Biceps" }, { name: "Back" }, { name: "Shoulders" }],
    chestExercises: [{ muscleGroup: "Chest", name: "Bench Press" }, { muscleGroup: "Chest", name: "Dual Handle Incline" }, { muscleGroup: "Chest", name: "Dual Handle Decline" }],
    bicepsExercises: [{ muscleGroup: "Biceps", name: "Free-Weight Curl Bar" }, { muscleGroup: "Biceps", name: "Dual Handle, Single Cable Curl" }, { muscleGroup: "Biceps", name: "Free-Weight Seated Dumbbell Curl" }, { muscleGroup: "Biceps", name: "Rope Hammer Curl" }, { muscleGroup: "Biceps", name: "Dual Handle, Dual Cable Curl" }],
    tricepsExercises: [{ muscleGroup: "Triceps", name: "Dual Handle, Reverse-Grip Pulldown" }, { muscleGroup: "Triceps", name: "Rope Pulldown" }, { muscleGroup: "Triceps", name: "Single Bar Cable Pushdown" }],
    backExercises: [{ muscleGroup: "Back", name: "Dual Handle, Dual Cable Pull (from TOP notch position)" }, { muscleGroup: "Back", name: "Dual Handle, Dual Cable Pull (from BOTTOM notch position)" }, { muscleGroup: "Back", name: " Overhead Single Bar Pulldown" }],
    shouldersExercises: [{ muscleGroup: "Shoulders", name: "Arnold Press" }, { muscleGroup: "Shoulders", name: "Dual Handle Lateral Crossover" }, { muscleGroup: "Shoulders", name: "Barbell Overhead Press" }],
  },
  mutations: {
    setActiveMuscleGroup(state, activeMuscleGroup) {
      state.activeMuscleGroup = activeMuscleGroup;
    },
    setActiveExercise(state, activeExercise) {
      state.activeExercise = activeExercise;
    },
    setActiveExercises(state, activeExercise) {
      if (
        state.activeExercises.findIndex(
          (ae) => ae.name == activeExercise.name
        ) < 0
      ) {
        state.activeExercises.push(
          activeExercise
        );
      };
    },
    setActiveMuscleGroups(state, payload) {
      console.log("setActiveMuscleGroups called in mutations... received: ", payload)
      payload.forEach(element => {
        let activeMuscleGroup = {}
        console.log("payload element: ", element)
        if (
          state.activeMuscleGroups.findIndex(
            (amg) => amg.name == element.muscleGroup
          ) < 0
        ) {
          activeMuscleGroup.name = element.muscleGroup
          state.activeMuscleGroups.push(
            activeMuscleGroup
          );
        };
      }
      )
    },

    setAllExercisesByMuscleGroup(state, activeMuscleGroup) {
      let exercises = activeMuscleGroup.name.toLowerCase() + "Exercises"
      // console.log("exercises by MG: ", exercises)
      // console.log("found in state: ", state[exercises])
      state.allExercisesByMuscleGroup = state[exercises]
    },
    setActiveExercisesByMuscleGroup(state, activeMuscleGroup) {
      state.activeExercisesByMuscleGroup = state.activeExercises.filter(
        (ae) => ae.muscleGroup == state.activeMuscleGroup.name
      )
    },

    setActiveSet(state, activeSet) {
      state.activeSets.push(activeSet)
    },
    setActiveSets(state, activeSets) {
      state.activeSets = activeSets
      state.activeSets.forEach(activeSet => {
        let activeMuscleGroup = {}
        let activeExercise = {}
        if (
          state.activeMuscleGroups.findIndex(
            (amg) => amg.name == activeSet.muscleGroup
          ) < 0
        ) {
          activeMuscleGroup.name = activeSet.muscleGroup
          state.activeMuscleGroups.push(
            activeMuscleGroup
          );
          if (
            state.activeExercises.findIndex(
              (ae) => ae.name == activeSet.exerciseName
            ) < 0
          ) {
            console.log("activeSet.exerciseName: ", activeSet.exerciseName, activeExercise)
            activeExercise.name = activeSet.exerciseName
            activeExercise.muscleGroup = activeSet.muscleGroup
            state.activeExercises.push(
              activeExercise
            );
          };
        };

      }
      )
    },
    setActiveSetsByExercise(state, activeExercise) {
      state.activeSetsByExercise = state.activeSets.filter(ae => ae.exerciseName == activeExercise.name)

    },

  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async setActiveMuscleGroup({ dispatch, commit }, activeMuscleGroup) {
      await commit("setActiveMuscleGroup", activeMuscleGroup)
      dispatch("setAllExercisesByMuscleGroup", activeMuscleGroup)
    },
    async setActiveMuscleGroups({ dispatch, commit }, payload) {
      await commit("setActiveMuscleGroups", payload)
      dispatch("setAllExercisesByMuscleGroup", payload)



    },

    async setActiveExercise({ dispatch, commit }, activeExercise) {
      await commit("setActiveExercise", activeExercise)
      dispatch("setActiveExercises", activeExercise)
    },
    setActiveExercises({ dispatch, commit }, activeExercise) {
      dispatch("setActiveExercisesByMuscleGroup", activeExercise)
      commit("setActiveExercises", activeExercise)
    },
    async setAllExercisesByMuscleGroup({ dispatch, commit }, activeMuscleGroup) {
      await commit("setAllExercisesByMuscleGroup", activeMuscleGroup)
      dispatch("setActiveExercisesByMuscleGroup", activeMuscleGroup)
    },
    setActiveExercisesByMuscleGroup({ commit }, activeMuscleGroup) {
      commit("setActiveExercisesByMuscleGroup", activeMuscleGroup)
    },
    async saveSetData({ dispatch, commit }, newSet) {
      // await commit("setActiveSet", activeSet);
      // dispatch("setActiveSetsByExercise", this.state.activeExercise)

      try {
        let res = await api.post("sets", newSet)
        console.log("post response: ", res.data)
        commit("setActiveSet", res.data)
        dispatch("setActiveSetsByExercise", this.state.activeExercise)
      } catch (error) {
        console.error(error)

      }
    },
    addNewExercise({ dispatch, commit }, newExercise) {
      commit("addNewExercise", newExercise);
      dispatch("setActiveExercise", newExercise)

    },
    setActiveSetsByExercise({ dispatch, commit }, activeExercise) {
      dispatch("setActiveExercise", activeExercise)
      commit("setActiveSetsByExercise", activeExercise)
    },
    async getSetsByUserId({ dispatch, commit }, userId) {
      try {
        let res = await api.get("sets", userId)
        commit("setActiveSets", res.data)
        // dispatch("setActiveMuscleGroups", res.data)
      } catch (error) {
        console.error(error)

      }

    }
  }
});
