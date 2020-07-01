<template>
  <div class="resistance-program-menu">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Muscle Group</button>
        <div class="dropdown-menu p-2">
          <button class="dropdown-item my-1 border rounded border-dark bg-secondary" href="#">Biceps</button>
          <button
            class="dropdown-item my-1 border rounded border-dark bg-primary text-white"
            href="#"
          >Triceps</button>
          <button
            class="dropdown-item my-1 border rounded border-dark bg-info text-white"
            href="#"
          >Shoulders</button>
          <button class="dropdown-item my-1 border rounded border-dark bg-success" href="#">Chest</button>
          <button
            class="dropdown-item my-1 border rounded border-dark bg-dark text-white"
            href="#"
          >Abs</button>
          <button class="dropdown-item my-1 border rounded border-dark bg-warning" href="#">Quads</button>
          <button
            class="dropdown-item my-1 border rounded border-dark bg-danger text-white"
            href="#"
          >Hamstrings</button>
          <button class="dropdown-item my-1 border rounded border-dark bg-success" href="#">Calves</button>
          <button
            class="dropdown-item my-1 border rounded border-dark bg-info text-white"
            href="#"
          >Back</button>
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with dropdown button" />
    </div>
    <button class="btn btn-primary rounded shadow m-2">Sets</button>
    <button class="btn btn-primary rounded shadow m-2">Reps</button>
    <button class="btn btn-primary rounded shadow m-2">Weight</button>
  </div>
</template>


<script>
export default {
  name: "resistance-program-menu",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>