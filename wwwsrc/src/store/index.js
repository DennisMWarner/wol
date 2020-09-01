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
    setActiveSetsByExercise(state, activeExercise) {
      state.activeSetsByExercise = state.activeExercises.filter(ae => ae.exercise = activeExercise.name)

    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    setActiveMuscleGroup({ dispatch, commit }, activeMuscleGroup) {
      dispatch("setAllExercisesByMuscleGroup", activeMuscleGroup)
      commit("setActiveMuscleGroup", activeMuscleGroup)
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
    saveSetData({ commit }, activeSet) {
      commit("setActiveSet", activeSet)
    },
    addNewExercise({ dispatch, commit }, newExercise) {
      commit("addNewExercise", newExercise);
      dispatch("setActiveExercise", newExercise)

    },
    setActiveSetsByExercise({ dispatch, commit }, activeExercise) {
      commit("setActiveSetsByExercise", activeExercise)
    }
  }
});
