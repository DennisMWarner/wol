<template>
  <div class="set-group row justify-content-left mx-3 mb-2 justify-content-center">
    <single-set v-for="singleSet in setGroup" :setGroupData="singleSet" :key="singleSet.id"></single-set>
    <div class="row">
      <div class="col-12">
        <add-set-button />
      </div>
    </div>
  </div>
</template>


<script>
import singleSet from "../components/singleSet";
import AddSetButton from "../components/AddSetButton";
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
  components: { singleSet, AddSetButton },
};
</script>


<style scoped>
</style>