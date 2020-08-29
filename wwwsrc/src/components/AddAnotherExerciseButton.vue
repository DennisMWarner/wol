<template>
  <div class="add-another-exercise-button">
    <div class="row text-center">
      <div class="col-12">
        <button
          class="btn-outline-light btn-sm btn bg-secondary text-white text-center mx-3 mb-1 w-75"
          data-target="#addAnotherExerciseModal"
          data-toggle="modal"
        >Add Another Exercise</button>
      </div>
    </div>
    <!-----------------Add Another Exercise Modal------------------------------>
    <div class="modal" tabindex="-1" role="dialog" id="addAnotherExerciseModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters">
            <exercise-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
import ExerciseMenuOptions from "../components/ExerciseMenuOptions";
export default {
  name: "add-another-exercise-button",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { ExerciseMenuOptions },
};
</script>


<style scoped>
</style>