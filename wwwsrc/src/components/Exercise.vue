<template>
  <div class="exercise">
    <div class="justify-content-around mx-0" v-if="this.exerciseData.name">
      <div
        class="mx-2 text-white border shadow border-white bg-secondary rounded text-left p-1 mb-2"
        @click="setActiveSetsByExercise()"
      >
        <p>{{this.exerciseData.name}}</p>
      </div>
      <set-group v-if="this.$store.state.activeExercise.name == this.exerciseData.name" />
    </div>

    <div v-else class="col-12 p-0">
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-secondary rounded p-0 mb-2 text-center"
        data-toggle="modal"
        data-target="#addExerciseModal"
      >
        <h5 class="mt-2">Add an exercise...</h5>
      </button>
    </div>

    <!-----------------addExerciseModal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addExerciseModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters">
            <exercise-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
import ExerciseMenuOptions from "../components/ExerciseMenuOptions";
import SetGroup from "../components/SetGroup";
export default {
  name: "exercise",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveSetsByExercise() {
      console.log(
        "matches?: ",
        this.$store.state.activeExercise.name,
        this.exerciseData.name
      );
      if (this.$store.state.activeExercise.name == this.exerciseData.name) {
        this.$store.state.activeSetsByExercise = [];
        this.$store.state.activeExercise = {};
      } else {
        this.$store.dispatch("setActiveSetsByExercise", this.exerciseData);
      }
      console.log(
        "setActiveSetsByExercise called... :",
        this.exerciseData.name,
        this.$store.state.activeExercise.name
      );
    },
  },
  components: { ExerciseMenuOptions, SetGroup },
  props: ["exerciseData"],
};
</script>


<style scoped>
</style>