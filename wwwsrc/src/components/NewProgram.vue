<template>
  <div class="row text-center rounded mx-2 bg-warning justify-content-center">
    <div class="col-8 bg-light m-5 rounded">
      <div class="new-program text-center">
        <button
          class="btn btn-primary border border-white rounded shadow text-white btn-block mt-2"
        >Cardio Program</button>
        <button
          class="btn btn-secondary border border-white rounded shadow text-white btn-block"
          @click="addNewResistanceProgram()"
          data-dismiss="modal"
        >Resistance Program</button>
        <button
          class="btn btn-info border border-white rounded shadow text-primary btn-block"
        >Stretch Program</button>
        <button
          class="btn btn-warning border border-white rounded shadow text-white btn-block mb-3"
        >Nutrition Program</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "new-program",
  data() {
    return {};
  },
  computed: {},
  methods: {
    addNewResistanceProgram() {
      this.$router.push("new-resistance-program");
    }
  },
  components: {}
};
</script>


<style scoped>
</style>