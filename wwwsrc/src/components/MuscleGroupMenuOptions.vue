<template>
  <div class="muscle-group-menu-options text-center">
    <muscle-group-menu-option-button
      v-for="muscleGroupMenuOptionButton in muscleGroupMenuOptionButtons"
      :muscleGroupMenuOptionButtonData="muscleGroupMenuOptionButton"
      :key="muscleGroupMenuOptionButton.name"
    />
    <button
      class="btn btn-white bg-white border rounded text-dark border-white w-75 mb-3"
      data-toggle="modal"
      data-target="#add-new-muscle-group-modal"
    >
      Add New...
    </button>
    <button
      class="btn btn-white bg-dark border rounded text-white border-white w-75 mt-3"
      data-dismiss="modal"
    >
      Cancel
    </button>
    <!---------------------------add muscle group modal------------------------------>
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      id="add-new-muscle-group-modal"
    >
      <div class="modal-dialog-centered" role="document">
        <div
          class="modal-content p-2 pt-4 bg-dark mx-3 border border-white rounded shadow"
        >
          <form data-toggle="validator" role="form">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="New muscle group name"
                v-model="newMuscleGroup.name"
                required
              />

              <button
                class="btn btn-outline-light bg-secondary text-white w-75 mt-3"
                type="submit"
                @click="addNewMuscleGroup()"
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------------->
  </div>
</template>


<script>
import MuscleGroupMenuOptionButton from "../components/MuscleGroupMenuOptionButton";
export default {
  name: "muscle-group-menu-options",
  data() {
    return {
      newMuscleGroup: {},
    };
  },
  computed: {
    muscleGroupMenuOptionButtons() {
      return this.$store.state.muscleGroups;
    },
  },
  methods: {
    addNewMuscleGroup() {
      this.$store.dispatch("addMuscleGroup", this.newMuscleGroup);
    },
  },
  components: { MuscleGroupMenuOptionButton },
};
</script>


<style scoped>
</style>