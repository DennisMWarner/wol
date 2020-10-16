<template>
  <div class="muscle-group-menu-option-button text-center">
    <button
      class="btn btn-warning border rounded border-white w-75 mb-3"
      data-dismiss="modal"
      @click="setActiveMuscleGroup()"
    >
      {{ muscleGroupMenuOptionButtonData.name }}
    </button>
  </div>
</template>


<script>
export default {
  name: "muscle-group-menu-option-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveMuscleGroup() {
      this.$store.dispatch(
        "setActiveMuscleGroup",
        this.muscleGroupMenuOptionButtonData
      );
      if (
        this.$store.state.activeMuscleGroups.findIndex(
          (amg) => amg.name == this.muscleGroupMenuOptionButtonData.name
        ) < 0
      ) {
        this.$store.state.activeMuscleGroups.push(
          this.muscleGroupMenuOptionButtonData
        );
      }
    },
  },
  components: {},
  props: ["muscleGroupMenuOptionButtonData"],
};
</script>


<style scoped>
</style>