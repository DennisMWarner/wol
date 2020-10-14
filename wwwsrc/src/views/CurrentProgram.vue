<template>
  <div class="current-program">
    <div
      v-if="this.$store.state.activeMuscleGroups.length > 0"
      class="border border-warning shadow rounded px-1 mb-2 bg-info"
    >
      <muscle-groups />
    </div>
    <div v-else class="border border-warning shadow rounded px-1 mb-2 bg-info">
      <muscle-group />
    </div>
    <add-muscle-group-button v-if="this.$store.state.activeMuscleGroup.name" />
    <add-another-exercise-button
      v-if="this.$store.state.activeExercisesByMuscleGroup.length > 0"
    />
  </div>
</template>


<script>
import MuscleGroup from "../components/MuscleGroup";
import MuscleGroups from "../components/MuscleGroups";
import AddAnotherExerciseButton from "../components/AddAnotherExerciseButton";
import AddMuscleGroupButton from "../components/AddMuscleGroupButton";
export default {
  name: "current-program",
  data() {
    return {};
  },
  computed: {},
  methods: {},

  components: {
    MuscleGroup,
    MuscleGroups,
    AddAnotherExerciseButton,
    AddMuscleGroupButton,
  },
};
</script>


<style scoped>
</style>