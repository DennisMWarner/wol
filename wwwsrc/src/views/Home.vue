<template>
  <div class="home bg-white text-success">
    <new-program />
  </div>
</template>

<script>
import NewProgram from "../components/NewProgram";

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
  components: { NewProgram }
};
</script>
