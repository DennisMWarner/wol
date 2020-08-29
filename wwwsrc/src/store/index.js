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
    activeMuscleGroup: {},
    activeMuscleGroups: [],
    activeExercise: {},
    activeExercises: [],
    allExercisesByMuscleGroup: [],
    muscleGroups: [{ name: "Chest" }, { name: "Triceps" }, { name: "Biceps" }, { name: "Back" }, { name: "Shoulders" }],
    chestExercises: [{ name: "Bench Press" }, { name: "Dual Handle Incline" }, { name: "Dual Handle Decline" }],
    bicepsExercises: [{ name: "Free-Weight Curl Bar" }, { name: "Dual Handle, Single Cable Curl" }, { name: "Free-Weight Seated Dumbbell Curl" }, { name: "Rope Hammer Curl" }, { name: "Dual Handle, Dual Cable Curl" }],
    tricepsExercises: [{ name: "Dual Handle, Reverse-Grip Pulldown" }, { name: "Rope Pulldown" }, { name: "Single Bar Cable Pushdown" }],
    backExercises: [{ name: "Dual Handle, Dual Cable Pull (from TOP notch position)" }, { name: "Dual Handle, Dual Cable Pull (from BOTTOM notch position)" }, { name: " Overhead Single Bar Pulldown" }],
    shouldersExercises: [{ name: "Arnold Press" }, { name: "Dual Handle Lateral Crossover" }, { name: "Barbell Overhead Press" }],
  },
  mutations: {
    setActiveMuscleGroup(state, activeMuscleGroup) {
      state.activeMuscleGroup = activeMuscleGroup;
    },
    setActiveExercise(state, activeExercise) {
      state.activeExercise = activeExercise;
    },
    setActiveExercises(state, activeExercise) {
      state.activeExercises.push(activeExercise);
    },

    setAllExercisesByMuscleGroup(state, activeMuscleGroup) {
      let exercises = activeMuscleGroup.name.toLowerCase() + "Exercises"
      console.log("exercises by MG: ", exercises)
      console.log("found in state: ", state[exercises])
      state.allExercisesByMuscleGroup = state[exercises]
    },
    setActiveSet(state, activeSet) {
      state.activeSets.push(activeSet)
    },
    addNewExercise(state, newExercise) {
      let exercises = newExercise.muscleGroupName.toLowerCase() + "Exercises"
      state[exercises].push({ name: newExercise.name })
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
    setActiveExercise({ dispatch, commit }, activeExercise) {
      dispatch("setActiveExercises", activeExercise)
      commit("setActiveExercise", activeExercise)
    },
    setActiveExercises({ commit }, activeExercise) {

      commit("setActiveExercises", activeExercise)
    },
    setAllExercisesByMuscleGroup({ commit }, activeMuscleGroup) {
      commit("setAllExercisesByMuscleGroup", activeMuscleGroup)
    },
    saveSetData({ commit }, activeSet) {
      commit("setActiveSet", activeSet)
    },
    addNewExercise({ dispatch, commit }, newExercise) {
      commit("addNewExercise", newExercise);
      dispatch("setActiveExercise", newExercise)

    }
  }
});
