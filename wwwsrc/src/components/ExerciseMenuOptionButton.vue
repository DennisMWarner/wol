<template>
  <div class="exercise-menu-option-button text-white text-center">
    <button
      class="btn btn-secondary border rounded border-white w-75 mb-3"
      data-dismiss="modal"
      @click="setActiveExercise()"
    >{{this.exerciseMenuOptionButtonData.name}}</button>
  </div>
</template>


<script>
export default {
  name: "exercise-menu-option-button",

  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveExercise() {
      this.$store.dispatch(
        "setActiveExercise",
        this.exerciseMenuOptionButtonData
      );
      if (
        this.$store.state.activeExercises.findIndex(
          (ae) => ae.name == this.exerciseMenuOptionButtonData.name
        ) < 0
      ) {
        this.$store.state.activeExercises.push(
          this.exerciseMenuOptionButtonData
        );
      }
    },
  },
  components: {},
  props: ["exerciseMenuOptionButtonData"],
};
</script>


<style scoped>
</style>