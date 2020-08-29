<template>
  <div class="exercises-by-muscle-group">
    <exercise
      v-for="excerciseByMuscleGroup in excercisesByMuscleGroup"
      :exerciseData="excerciseByMuscleGroup"
      :key="excerciseByMuscleGroup.id"
    />
  </div>
</template>


<script>
import Exercise from "../components/Exercise";
export default {
  name: "exercises-by-muscle-group",
  data() {
    return {};
  },
  computed: {
    excercisesByMuscleGroup() {
      this.$store.state.activeExercises.filter(
        (ae) => ae.exercise == this.$store.state.activeMuscleGroups.name
      );
    },
  },
  methods: {},
  components: { Exercises },
};
</script>


<style scoped>
</style>