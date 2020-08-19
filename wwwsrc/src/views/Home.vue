<template class="bg-dark">
  <div>
    <target-body-part />
    <exercise />
    <set />
    <set />
    <set />
  </div>
</template>

<script>
import TargetBodyPart from "../components/TargetBodyPart";
import Set from "../components/Set";
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
    Set,
    Exercise,
  },
};
</script>
