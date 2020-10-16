<template>
  <div class="muscle-group mx-auto my-auto">
    <div
      class="mt-2 text-white border shadow border-white bg-warning rounded px-2 pt-1 mb-2 text-center"
      v-if="this.$store.state.activeMuscleGroups.length > 0"
      @click="setActiveMuscleGroup()"
    >
      <h4>{{ muscleGroupData.name }}</h4>
    </div>

    <div v-else>
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
        data-toggle="modal"
        data-target="#addMuscleGroupModal"
      >
        <h5 class="mt-2">Add A Muscle Group</h5>
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

    <div
      v-if="
        this.$store.state.activeMuscleGroups.length > 0 &&
        this.muscleGroupData.name == this.$store.state.activeMuscleGroup.name
      "
    >
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
    return {
      activeDate: {},
    };
  },
  computed: {},

  methods: {
    async setActiveMuscleGroup() {
      this.$store.state.activeExercise = {};
      await this.$store.dispatch("setActiveMuscleGroup", this.muscleGroupData);

      if (this.$store.state.activeExercisesByMuscleGroup.length == 1) {
        this.$store.dispatch(
          "setActiveSetsByExercise",
          this.$store.state.activeExercisesByMuscleGroup[0]
        );
      }
    },
  },

  components: { MuscleGroupMenuOptions, ExercisesByMuscleGroup },
  props: ["muscleGroupData"],
};
</script>


<style scoped>
</style>