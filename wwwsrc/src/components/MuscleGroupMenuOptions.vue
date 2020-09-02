<template>
  <div class="muscle-group-menu-options text-center">
    <muscle-group-menu-option-button
      v-for="muscleGroupMenuOptionButton in muscleGroupMenuOptionButtons"
      :muscleGroupMenuOptionButtonData="muscleGroupMenuOptionButton"
      :key="muscleGroupMenuOptionButton.name"
    />
    <button
      class="btn btn-white bg-dark border rounded text-white border-white w-75 mt-3"
      data-dismiss="modal"
    >Cancel</button>
  </div>
</template>


<script>
import MuscleGroupMenuOptionButton from "../components/MuscleGroupMenuOptionButton";
export default {
  name: "muscle-group-menu-options",
  data() {
    return {};
  },
  computed: {
    muscleGroupMenuOptionButtons() {
      return this.$store.state.muscleGroups;
    },
  },
  methods: {},
  components: { MuscleGroupMenuOptionButton },
};
</script>


<style scoped>
</style>