<template>
  <div class="exercise-menu-option">
    <button
      class="btn btn-primary border rounded m-1 ml-2"
      @click="setExercise()"
    >{{this.exerciseMenuOptionData}}</button>
  </div>
</template>


<script>
export default {
  name: "exercise-menu-option",
  props: ["exerciseMenuOptionData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    setExercise() {},
  },
  components: {},
};
</script>


<style scoped>
</style>