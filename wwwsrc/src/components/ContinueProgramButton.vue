<template>
  <div class="continue-program-button">
    <button
      class="btn w-100 mt-2 text-white border shadow border-white bg-success rounded py-1 mb-2 text-center"
      @click="continueProgram()"
    >
      <h5 class="mt-2">CONTINUE WITH NEXT WORKOUT</h5>
    </button>
  </div>
</template>


<script>
export default {
  name: "continue-program-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    continueProgram() {
      this.$router.push("/current-program");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>