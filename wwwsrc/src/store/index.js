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
    plannedSets: [{ id: 1, name: "Set 1", weight: 200, reps: 15 }, { id: 3, name: "Set 2", weight: 205, reps: 15 }, { id: 2, name: "Set 3", weight: 150, reps: 20 }, { id: 4, name: "Set 3", weight: 150, reps: 20 }, { id: 5, name: "Set 3", weight: 150, reps: 20 }],
    plannedBodyPartTargets: [],
    allExercises: [],
    activeBodyPartExercises: [],
    plannedExercises: [],
    chestExercises: ["Bench Press", "Dual Handle Incline", "Dual Handle Decline"],
    bicepExercises: ["Free-Weight Curl Bar", "Dual Handle, Single Cable Curl", "Free=Weight Seated Dumbbell Curl", "Rope Hammer Curl", "Dual Handle, Dual Cable Curl"],
    tricepExercises: ["Dual Handle, Reverse-Grip Pulldown", "Rope Pulldown", "Single Bar Cable Pushdown"],
    backExercises: ["Dual Handle, Dual Cable Pull (from TOP notch position)", "Dual Handle, Dual Cable Pull (from BOTTOM notch position)", " Overhead Single Bar Pulldown"],
    shoulderExercises: ["Arnold Press", "Dual Handle Lateral Crossover", "Barbell Overhead Press"],
  },
  mutations: {},
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    }
  }
});
