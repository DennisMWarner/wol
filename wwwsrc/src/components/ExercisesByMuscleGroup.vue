<template>
  <div class="exercises-by-muscle-group">
    <div
      v-if="this.$store.state.activeExercises.filter(
        (ae) => ae.muscleGroup == this.$store.state.activeMuscleGroup.name).length>0"
    >
      <exercise
        v-for="excerciseByMuscleGroup in excercisesByMuscleGroup"
        :exerciseData="excerciseByMuscleGroup"
        :key="excerciseByMuscleGroup.id"
      />
    </div>
    <div v-else class="w-100">
      <button
        class="btn btn-block mt-2 text-white border shadow border-white bg-secondary rounded p-0 mb-2 text-center"
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
import Exercise from "../components/Exercise";
export default {
  name: "exercises-by-muscle-group",
  data() {
    return {};
  },
  computed: {
    excercisesByMuscleGroup() {
      return this.$store.state.activeExercisesByMuscleGroup;
    },
  },
  methods: {},
  components: { Exercise, ExerciseMenuOptions },
};
</script>


<style scoped>
</style>