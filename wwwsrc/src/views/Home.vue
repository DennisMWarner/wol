<template class="bg-dark home">
  <div>
    <div class="border border-warning shadow rounded px-1 mb-2 bg-info">
      <muscle-group />
      <exercise v-for="exercise in exercises" :exerciseData="exercise" :key="exercise.name" />
      <set-group v-for="activeSet in activeSets" :activeSetData="activeSet" :key="activeSet.id" />
    </div>
    <add-muscle-group-button />
    <add-exercise-button />
  </div>
</template>

<script>
import MuscleGroup from "../components/MuscleGroup";
import AddMuscleGroupButton from "../components/AddMuscleGroupButton";
import AddExerciseButton from "../components/AddExerciseButton";

import SetGroup from "../components/SetGroup";
import Exercise from "../components/Exercise";

export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    },
    exercises() {
      return this.$store.state.activeExercises;
    },
    activeSets() {
      return this.$store.state.plannedSets;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {
    MuscleGroup,
    SetGroup,
    Exercise,
    AddMuscleGroupButton,
    AddExerciseButton,
  },
};
</script>
