<template class="bg-dark home">
  <div>
    <div
      v-if="this.$store.state.activeMuscleGroups.length>0"
      class="border border-warning shadow rounded px-1 mb-2 bg-info"
    >
      <muscle-groups />
      <!-- <exercise v-if="this.$store.state.activeMuscleGroup.name" /> -->
    </div>
    <div v-else class="border border-warning shadow rounded px-1 mb-2 bg-info">
      <muscle-group />
      <!-- <exercise v-if="this.$store.state.activeMuscleGroup.name" /> -->
    </div>
    <add-muscle-group-button v-if="this.$store.state.activeMuscleGroup.name" />
    <add-another-exercise-button v-if="this.$store.state.activeExercisesByMuscleGroup.length>0" />
  </div>
</template>

<script>
import MuscleGroup from "../components/MuscleGroup";
import MuscleGroups from "../components/MuscleGroups";
import AddMuscleGroupButton from "../components/AddMuscleGroupButton";
import AddAnotherExerciseButton from "../components/AddAnotherExerciseButton";

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
    MuscleGroups,
    SetGroup,
    Exercise,
    AddMuscleGroupButton,
    AddAnotherExerciseButton,
  },
};
</script>
