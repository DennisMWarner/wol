<template class="bg-dark home">
  <div>
    <div class="border border-warning shadow rounded px-1 mb-2 bg-info">
      <muscle-group />
      <exercise v-if="this.$store.state.activeMuscleGroup.name" />
      <set-group v-if="this.$store.state.activeExercise.name" />
    </div>
    <add-muscle-group-button v-if="this.$store.state.activeMuscleGroup.name" />
    <add-exercise-button v-if="this.$store.state.activeExercise.name" />
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
