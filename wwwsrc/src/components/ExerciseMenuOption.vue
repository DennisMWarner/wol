<template>
  <div class="exercise-menu-option">
    <div class="form-check mb-2">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="Rope Hammer Curl"
      />
      <label class="form-check-label" for="exampleRadios2">{{exerciseMenuOptionData}}</label>
    </div>
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
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>