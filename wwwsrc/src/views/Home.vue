<template class="bg-dark home">
  <div class="border border-warning shadow rounded px-1 bg-info">
    <target-body-part />
    <exercise />
    <set-group />
  </div>
</template>

<script>
import TargetBodyPart from "../components/TargetBodyPart";
import SetGroup from "../components/SetGroup";
import Exercise from "../components/Exercise";

export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {
    TargetBodyPart,
    SetGroup,
    Exercise,
  },
};
</script>
