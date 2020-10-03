<template>
  <div class="intensity-level-button-group">
    <div class="row justify-content-around">
      <intensity-level-button
        v-for="intensityLevelButton in intensityLevelButtons"
        :intensityLevelButtonData="intensityLevelButton"
        :key="intensityLevelButton.id"
      />
    </div>
  </div>
</template>


<script>
import IntensityLevelButton from "../components/IntensityLevelButton";
export default {
  name: "intensity-level-button-group",
  data() {
    return {};
  },
  computed: {
    intensityLevelButtons() {
      return this.$store.state.activeIntensityLevels;
    },
  },
  methods: {},
  components: { IntensityLevelButton },
};
</script>


<style scoped>
</style>