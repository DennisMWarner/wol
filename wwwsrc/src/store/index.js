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
    activeSet: {},
    activeSets: [],
    activeCycle: {},
    activeIntensityLevel: {},
    activeIntensityLevels: [{ intensityLevel: 5 }, { intensityLevel: 6 }, { intensityLevel: 7 }, { intensityLevel: 8 }, { intensityLevel: 9 }, { intensityLevel: 10 },],
    activeContexts: [],
    activeContext: {},
    activeSetsByExercise: [],
    activeMuscleGroup: {},
    activeMuscleGroups: [],
    activeExercise: {},
    activeExercises: [],
    allExercisesByMuscleGroup: [],
    activeExercisesByMuscleGroup: [],
    activeDate: { date: "2020-09-06" },
    muscleGroups: [
      { name: "Chest" }, { name: "Triceps" }, { name: "Biceps" }, { name: "Back" }, { name: "Shoulders" }, { name: "Quadriceps" }, { name: "Hamstrings" }, { name: "Calves" }, { name: "Abdomianls" }
    ],
    exercises: [
      { muscleGroup: "Chest", name: "Bench Press" }, { muscleGroup: "Chest", name: "Dual Handle Incline" }, { muscleGroup: "Chest", name: "Dual Handle Decline" },
      { muscleGroup: "Biceps", name: "Free-Weight Curl Bar" }, { muscleGroup: "Biceps", name: "Dual Handle, Single Cable Curl" }, { muscleGroup: "Biceps", name: "Free-Weight Seated Dumbbell Curl" }, { muscleGroup: "Biceps", name: "Rope Hammer Curl" }, { muscleGroup: "Biceps", name: "Dual Handle, Dual Cable Curl" },
      { muscleGroup: "Triceps", name: "Dual Handle, Reverse-Grip Pulldown" }, { muscleGroup: "Triceps", name: "Rope Pulldown" }, { muscleGroup: "Triceps", name: "Single Bar Cable Pushdown" },
      { muscleGroup: "Back", name: "Dual Handle, Dual Cable Pull (from TOP notch position)" }, { muscleGroup: "Back", name: "Dual Handle, Dual Cable Pull (from BOTTOM notch position)" }, { muscleGroup: "Back", name: " Overhead Single Bar Pulldown" },
      { muscleGroup: "Shoulders", name: "Arnold Press" }, { muscleGroup: "Shoulders", name: "Dual Handle Lateral Crossover" }, { muscleGroup: "Shoulders", name: "Barbell Overhead Press" }
    ],
  },
  mutations: {
    setActiveDate(state, activeDate) {

      state.activeDate = activeDate
    },
    setActiveContext(state, activeContext) {

      state.activeContext = activeContext
    },
    setMuscleGroups(state, muscleGroups) {
      state.muscleGroups = muscleGroups
    },
    setActiveIntensityLevel(state, activeIntensityLevel) {

      state.activeIntensityLevel = activeIntensityLevel
    },
    setExercises(state, exercises) {
      state.exercises = exercises
    },
    setActiveContexts(state, activeContexts) {
      state.activeContexts = activeContexts
    },
    setActiveCycle(state, activeCycle) {
      state.activeCycle = activeCycle
    },
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

      payload.forEach(element => {
        let activeMuscleGroup = {}

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

      state.allExercisesByMuscleGroup = state.exercises.filter(e => e.muscleGroup == activeMuscleGroup.name)
    },
    setActiveExercisesByMuscleGroup(state, activeMuscleGroup) {
      state.activeExercisesByMuscleGroup = state.activeExercises.filter(
        (ae) => ae.muscleGroup == state.activeMuscleGroup.name
      )
    },

    setActiveSet(state, activeSet) {
      let setIndex = state.activeSets.findIndex(as => as.id == activeSet.id)
      if (setIndex < 0) { state.activeSets.push(activeSet) }
      else state.activeSets.splice(setIndex, 1, activeSet)
      state.activeSet = activeSet;
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
          )
        };
        if (
          state.activeExercises.findIndex(
            (ae) => ae.name == activeSet.exerciseName
          ) < 0
        ) {

          activeExercise.name = activeSet.exerciseName
          activeExercise.muscleGroup = activeSet.muscleGroup
          state.activeExercises.push(
            activeExercise
          );
        };
        ;

      }
      )
    },
    clearActiveSets(state) {
      state.activeSets = [];
      state.activeExercises = [];
      state.activeContexts = [];
      state.activeExercisesByMuscleGroup = [];
      state.activeMuscleGroups = [];
    },
    setActiveSetsByExercise(state, activeExercise) {
      state.activeSetsByExercise = state.activeSets.filter(ae => ae.exerciseName == activeExercise.name)

    },

  },
  actions: {
    getCurrentDateString({ commit }) {
      let currentDateString = {}
      let d = new Date();
      currentDateString.setDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
      currentDateString.day = d.getDate();
      currentDateString.month = d.getMonth() + 1;
      currentDateString.year = d.getFullYear();
      commit("setActiveDate", currentDateString)
    },
    setPastDate({ commit }, pastDate) {

      let activeDate = {};
      let dateString = pastDate.split("-");

      activeDate.pastDate = dateString[2] + "-" + dateString[0] + "-" + dateString[1]
      activeDate.day = dateString[1]
      activeDate.month = dateString[0]
      activeDate.year = dateString[2]

      commit("setActiveDate", activeDate)
    },

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

        commit("setActiveSet", res.data)
        dispatch("setActiveSetsByExercise", this.state.activeExercise)
      } catch (error) {
        console.error(error)

      }
    },
    async enterActualSetData({ dispatch, commit }, editedSet) {
      // await commit("setActiveSet", activeSet);
      // dispatch("setActiveSetsByExercise", this.state.activeExercise)

      try {
        let res = await api.put("sets/" + editedSet.id, editedSet)

        commit("setActiveSet", res.data)
        console.log("response of set PUT: ", res.data)
        dispatch("setActiveSetsByExercise", this.state.activeExercise)
      } catch (error) {
        console.error(error)

      }
    },

    addNewExercise({ dispatch, commit }, newExercise) {
      commit("setActiveExercises", newExercise);
      dispatch("setActiveExercise", newExercise)

    },
    setActiveSetsByExercise({ dispatch, commit }, activeExercise) {
      dispatch("setActiveExercise", activeExercise)
      commit("setActiveSetsByExercise", activeExercise)
    },
    async getNextSetsByUserId({ dispatch, commit }, userId) {
      try {
        let res = await api.get("sets/next", userId)
        commit("setActiveSets", res.data)

        dispatch("setActiveDateFromDB", res.data[0].setDate)

      } catch (error) {
        console.error(error)

      }

    },
    setActiveDateFromDB({ commit }, activeDateFromDB) {
      let activeDate = {};
      let dateString = activeDateFromDB.split(" ")[0].split("/");

      activeDate.pastDate = dateString[2] + "-" + dateString[0] + "-" + dateString[1]
      activeDate.day = dateString[1]
      activeDate.month = dateString[0]
      activeDate.year = dateString[2]

      commit("setActiveDate", activeDate)
    },
    async clearDB({ dispatch }, userId) {
      await api.delete("sets/" + userId);
      dispatch("getSetsByUserId", userId)
    },
    getSetContexts({ dispatch, commit }) { },
    async getUserContexts({ dispatch, commit }, userId) {
      let res = await api.get("contexts/" + userId);
      commit("setActiveContexts", res.data)
    },
    addSetContext({ dispatch, commit }, newContext) { },
    editContext({ dispatch, commit }, contextToEdit) { },
    deleteContext({ dispatch, commit }, contextId) { },
    async getMuscleGroups({ dispatch, commit }) {
      try {
        let res = await api.get("musclegroups")
        commit("setMuscleGroups", res.data)
      } catch (error) {
        console.error(error)

      }
    },

    async addMuscleGroup({ dispatch, commit }, newMuscleGroup) {
      try {
        let res = await api.post("musclegroups", newMuscleGroup)
        dispatch("getMuscleGroups")
        dispatch("setActiveMuscleGroups")

      } catch (error) {
        console.error(error)

      }
    },
    editMuscleGroup({ dispatch, commit }, MuscleGroupToEdit) { },
    deleteMuscleGroup({ dispatch, commit }, MuscleGroupId) { },
    async getExercises({ dispatch, commit }) {
      try {
        let res = await api.get("exercises")
        commit("setExercises", res.data)
      } catch (error) {
        console.error(error)

      }
    },
    editExercise({ dispatch, commit }, ExerciseToEdit) { },

    async deleteExerciseById({ dispatch, commit }, exerciseId) {
      await api.delete("exercises/" + exerciseId);
      dispatch("getExercises")
    },
    async planNextSet({ dispatch, commit }, lastSet) {


      let plannedSet = { ...lastSet };
      plannedSet.plannedWeight = lastSet.actualWeight * 1.1;
      plannedSet.actualWeight = 0;
      plannedSet.actualRepCount = 0;
      console.log("planned set before send: ", plannedSet)


      if (lastSet.nextSetId < 1) {
        plannedSet.setDate = this.state.activeDate.year + "-" + this.state.activeDate.month + "-" + (parseInt(this.state.activeDate.day) + 1).toString();
        delete plannedSet.id;
        let res = await api.post("sets", plannedSet)
        console.log("planned set sent: ", plannedSet)
        console.log("planned set created: ", res.data)
        lastSet.nextSetId = res.data.id

      }
      else {
        plannedSet.id = lastSet.nextSetId;
        plannedSet.nextSetId = 0;
        let res = await api.put("sets/" + plannedSet.id, plannedSet)
        console.log("planned set edited, response: ", res.data)
      }

      dispatch("enterActualSetData", lastSet)


    },
    // addAllToDB({ dispatch, commit }, userId) {
    //   this.state.muscleGroups.forEach(e => api.post("muscleGroups", e))

    // }

    async addNewContext({ dispatch, commit }, newContext) {
      try {
        let res = await api.post("contexts", newContext)

        // dispatch("getContextsByUserId")
        // dispatch("setContextsByUserId")

      } catch (error) {
        console.error(error)

      }
    },
    setActiveIntensityLevel({ commit }, intensityLevel) {
      commit("setActiveIntensityLevel", intensityLevel)
    },
    setActiveSet({ commit }, activeSet) {
      commit("setActiveSet", activeSet)
    },
    clearActiveSets({ commit }) {
      commit("clearActiveSets")
    }
  }
});
