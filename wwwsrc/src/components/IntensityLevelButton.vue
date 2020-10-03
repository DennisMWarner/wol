<template>
  <div
    class="intensity-level-button col-3 m-2 bg-success border-white text-center border rounded"
  >
    <button
      type="button"
      class="btn text-white px-2 text-center"
      data-dismiss="modal"
      @click="setIntensityLevel()"
    >
      {{ this.intensityLevelButtonData.intensityLevel }}
    </button>
  </div>
</template>


<script>
export default {
  name: "intensity-level-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async setIntensityLevel(intensityLevel) {
      await this.$store.dispatch(
        "setActiveIntensityLevel",
        this.intensityLevelButtonData
      );
    },
  },
  components: {},
  props: ["intensityLevelButtonData"],
};
</script>


<style scoped>
</style>