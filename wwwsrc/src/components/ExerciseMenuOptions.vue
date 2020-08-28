<template>
  <div class="exercise-menu-options">
    <exercise-menu-option-button
      v-for="exerciseMenuOptionButton in exerciseMenuOptionButtons"
      :exerciseMenuOptionButtonData="exerciseMenuOptionButton"
      :key="exerciseMenuOptionButton.id"
    />
  </div>
</template>


<script>
import ExerciseMenuOptionButton from "../components/ExerciseMenuOptionButton";
export default {
  name: "exercise-menu-options",
  data() {
    return {};
  },
  computed: {
    exerciseMenuOptionButtons() {
      return this.$store.state.allExercisesByMuscleGroup;
    },
  },
  methods: {},
  components: { ExerciseMenuOptionButton },
};
</script>


<style scoped>
</style>