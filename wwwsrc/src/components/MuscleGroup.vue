<template>
  <div class="muscle-group row w-100 mx-auto">
    <div
      class="col-12 mt-2 text-white border shadow border-white bg-warning rounded px-2 pt-1 mb-2 text-center"
      v-if="this.$store.state.activeMuscleGroup.name"
      @click="setActiveMuscleGroup()"
    >
      <h4>{{muscleGroupData.name}}</h4>
    </div>
    <div v-else class="col-12 p-0">
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded p-0 mb-2 text-center"
        data-toggle="modal"
        data-target="#addMuscleGroupModal"
      >
        <h5 class="mt-2">Add a muscle group...</h5>
      </button>
    </div>
    <!-----------------addMuscleGroupModal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addMuscleGroupModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters">
            <muscle-group-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
    <div v-if="this.$store.state.activeMuscleGroups.length>0">
      <exercises-by-muscle-group />
    </div>
  </div>
</template>


<script>
// import Exercise from "../components/Exercise";
import ExercisesByMuscleGroup from "../components/ExercisesByMuscleGroup";
import MuscleGroupMenuOptions from "../components/MuscleGroupMenuOptions";
export default {
  name: "muscle-group",
  data() {
    return {};
  },
  computed: {
    excercisesByMuscleGroup() {
      return this.$store.state.activeExercises.filter(
        (ae) => ae.exercise == this.$store.state.activeMuscleGroups.name
      );
    },
  },
  methods: {
    setActiveMuscleGroup() {
      this.$store.state.activeExercise = {};
      console.log("sending: ", this.muscleGroupData.name);
      this.$store.dispatch("setActiveMuscleGroup", this.muscleGroupData);
    },
  },
  components: { MuscleGroupMenuOptions, ExercisesByMuscleGroup },
  props: ["muscleGroupData"],
};
</script>


<style scoped>
</style>