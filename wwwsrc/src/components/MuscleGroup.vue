<template>
  <div class="exercise row w-100 mx-auto">
    <div
      class="col-12 mt-2 text-white border shadow border-white bg-warning rounded px-2 pt-1 mb-2 text-center"
    >
      <h4>{{this.$store.state.activeMuscleGroup.name}}</h4>
    </div>
  </div>
</template>


<script>
export default {
  name: "muscle-group",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  props: [],
};
</script>


<style scoped>
</style>