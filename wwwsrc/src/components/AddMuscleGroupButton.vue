<template>
  <div class="add-muscle-group-button">
    <div class="row text-center mt-3">
      <div class="col-12">
        <button
          class="btn-outline-light btn-sm btn bg-warning text-white text-center mb-1 mx-3 w-75"
          data-toggle="modal"
          data-target="#addMuscleGroupModal"
        >Add Another Muscle Group</button>
      </div>
    </div>
    <!-----------------addMuscleGroupModal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addMuscleGroupModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters">
            <muscle-group-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
import MuscleGroupMenuOptions from "../components/MuscleGroupMenuOptions";
export default {
  name: "add-muscle-group-button",
  data() {
    return {};
  },
  computed: {},
  methods: {
    resetActiveExercise() {
      this.$store.state.activeExercise = {};
    },
  },
  components: { MuscleGroupMenuOptions },
};
</script>


<style scoped>
</style>