<template>
  <div class="exercise-menu-options text-center">
    <exercise-menu-option-button
      v-for="exerciseMenuOptionButton in exerciseMenuOptionButtons"
      :exerciseMenuOptionButtonData="exerciseMenuOptionButton"
      :key="exerciseMenuOptionButton.id"
    />
    <button
      class="btn btn-white bg-white border rounded text-secondary border-secondary w-75 mb-3"
      data-toggle="modal"
      data-target="#addNewExerciseModal"
    >Add New...</button>
    <!-----------------Add New Exercise Modal----------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addNewExerciseModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content p-2 pt-4 bg-dark mx-3 border border-white rounded shadow">
          <form data-toggle="validator" role="form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="New exercise name"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="newExercise.name"
                required
              />

              <button
                class="btn btn-outline-light bg-secondary text-white w-75 mt-3"
                type="submit"
                id="button-addon2"
                @click="addNewExercise()"
              >Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
import ExerciseMenuOptionButton from "../components/ExerciseMenuOptionButton";
export default {
  name: "exercise-menu-options",
  data() {
    return {
      newExercise: {},
    };
  },
  computed: {
    exerciseMenuOptionButtons() {
      return this.$store.state.allExercisesByMuscleGroup;
    },
  },
  methods: {
    addNewExercise() {
      if (this.newExercise.name) {
        this.newExercise.muscleGroupName = this.$store.state.activeMuscleGroup.name;
        $("#addNewExerciseModal").modal("hide");
        $("#addExerciseModal").modal("hide");

        this.$store.dispatch("addNewExercise", this.newExercise);
      }
    },
  },
  components: { ExerciseMenuOptionButton },
};
</script>


<style scoped>
</style>