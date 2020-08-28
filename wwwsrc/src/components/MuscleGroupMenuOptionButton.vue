<template>
  <div class="muscle-group-menu-option-button text-center">
    <button
      class="btn btn-warning border rounded border-white w-75 mb-3"
      data-dismiss="modal"
      @click="setActiveMuscleGroup()"
    >{{muscleGroupMenuOptionButtonData.name}}</button>
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
      console.log("sending: ", this.muscleGroupMenuOptionButtonData);
      this.$store.dispatch(
        "setActiveMuscleGroup",
        this.muscleGroupMenuOptionButtonData
      );
      this.$store.state.activeMuscleGroups.push(
        this.muscleGroupMenuOptionButtonData
      );
      console.log("activeMuscleGroup: ", this.$store.state.activeMuscleGroup);
      console.log("activeMuscleGroups: ", this.$store.state.activeMuscleGroups);
    },
  },
  components: {},
  props: ["muscleGroupMenuOptionButtonData"],
};
</script>


<style scoped>
</style>