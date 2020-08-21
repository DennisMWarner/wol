<template>
  <div class="set-group row justify-content-left mx-3 mb-3">
    <single-set v-for="singleSet in setGroup" :setGroupData="singleSet" :key="singleSet.id"></single-set>
  </div>
</template>


<script>
import singleSet from "../components/singleSet";
export default {
  name: "set-group",
  data() {
    return {};
  },
  computed: {
    setGroup() {
      return this.$store.state.plannedSets;
    },
  },
  methods: {},
  components: { singleSet },
};
</script>


<style scoped>
</style>