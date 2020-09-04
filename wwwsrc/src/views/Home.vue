<template class="bg-dark home">
  <div>
    <div v-if="this.$auth.userInfo.sub">
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
    <div div v-else>
      <div class="row no-gutters text-center m-4 mt-5 pt-5">
        <div class="col-12 text-center bg-warning border rounded text-white border-white pt-2 mt-5">
          <h5>Please login to continue</h5>
        </div>
      </div>
    </div>
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
