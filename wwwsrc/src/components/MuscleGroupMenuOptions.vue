<template>
  <div class="muscle-group-menu-options">
    <muscle-group-menu-option-button
      v-for="muscleGroupMenuOptionButton in muscleGroupMenuOptionButtons"
      :muscleGroupMenuOptionButtonData="muscleGroupMenuOptionButton"
      :key="muscleGroupMenuOptionButton.name"
    />
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