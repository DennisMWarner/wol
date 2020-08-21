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
    plannedSets: [{ id: 1, name: "Set 1", weight: 200, reps: 15 }, { id: 3, name: "Set 2", weight: 205, reps: 15 }, { id: 2, name: "Set 3", weight: 150, reps: 20 }, { id: 2, name: "Set 3", weight: 150, reps: 20 }, { id: 2, name: "Set 3", weight: 150, reps: 20 }],
    plannedBodyPartTargets: [],
    allExercises: [],
    plannedExercises: []
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
