<template>
  <div class="home bg-warning text-success full-background">
    Home Page
    <active-workout />
    <active-exercise />
    <active-set />
  </div>
</template>

<script>
import ActiveExercise from "../components/ActiveExercise";
import ActiveSet from "../components/ActiveSet";
import ActiveWorkout from "../components/ActiveWorkout";

export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: { ActiveExercise, ActiveSet, ActiveWorkout }
};
</script>
