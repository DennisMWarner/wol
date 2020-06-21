<template>
  <div class="home bg-warning text-success full-background">
    Home Page
    <active-exercise-header />
  </div>
</template>

<script>
import ActiveExerciseHeader from "../components/ActiveExerciseHeader";

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
  components: { ActiveExerciseHeader }
};
</script>
