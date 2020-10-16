<template>
  <div
    class="set-group row justify-content-left mx-3 mb-2 justify-content-center"
  >
    <single-set
      v-for="activeSet in activeSets"
      :activeSetData="activeSet"
      :key="activeSet.id"
    ></single-set>
    <div class="row">
      <div class="col-12">
        <add-set-button />
      </div>
    </div>
  </div>
</template>


<script>
import SingleSet from "../components/SingleSet";
import AddSetButton from "../components/AddSetButton";
export default {
  name: "set-group",
  data() {
    return {};
  },
  computed: {
    activeSets() {
      return this.$store.state.activeSetsByExercise;
    },
  },
  methods: {},
  components: { SingleSet, AddSetButton },
};
</script>


<style scoped>
</style>