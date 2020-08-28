<template>
  <div class="exercise">
    <div class="row justify-content-around mx-0" v-if="this.$store.state.activeExercise.name">
      <div
        class="col-12 mx-2 text-white border shadow border-white bg-secondary rounded text-left py-1"
      >
        <p>{{this.$store.state.activeExercise.name}}</p>
      </div>
      <set-group v-if="this.$store.state.activeExercise.name" />
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
  methods: {},
  components: { ExerciseMenuOptions, SetGroup },
  props: ["exerciseData"],
};
</script>


<style scoped>
</style>