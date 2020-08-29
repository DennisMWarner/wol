<template>
  <div class="muscle-groups">
    <muscle-group
      v-for="muscleGroup in muscleGroups"
      :muscleGroupData="muscleGroup"
      :key="muscleGroup.name"
    />
  </div>
</template>


<script>
import MuscleGroup from "../components/MuscleGroup";
export default {
  name: "muscle-groups",
  data() {
    return {};
  },
  computed: {
    muscleGroups() {
      return this.$store.state.activeMuscleGroups;
    },
  },
  methods: {},
  components: { MuscleGroup },
};
</script>


<style scoped>
</style>