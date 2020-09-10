<template>
  <div class="add-set-button">
    <div class="row my-2">
      <div
        class="col-12"
        v-if="this.$store.state.activeSets.filter(as=>as.exercise==this.$store.state.activeExercise.name).length>0"
      >
        <button
          class="btn-outline-light btn-sm btn bg-success text-white mt-2"
          data-target="#addSetDataModal"
          data-toggle="modal"
        >Add Another Set</button>
      </div>
      <div class="col-12" v-else>
        <button
          class="btn-outline-light btn-sm btn bg-success text-white mt-2"
          data-target="#addSetDataModal"
          data-toggle="modal"
        >Add a Set</button>
      </div>
    </div>
    <!---------------------enter set data modal ----------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addSetDataModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content w-75 mx-auto text-center bg-transparent">
          <div class="modal-body border border-white rounded bg-secondary no-gutters">
            <form>
              <div class="form-group">
                <label
                  for="formGroupExampleInput"
                  class="w-75 bg-success border border-white text-white rounded"
                >
                  <h5 class="pt-1 text-left pl-2">Weight:</h5>
                </label>
                <input
                  type="number"
                  class="form-control w-75 mx-auto text-center border border-success"
                  id="setWeight"
                  placeholder="Enter weight here..."
                  v-model.number="activeSet.weight"
                  required
                />
              </div>
              <div class="form-group">
                <label
                  for="formGroupExampleInput"
                  class="w-75 bg-success border border-white text-white rounded"
                >
                  <h5 class="pt-1 text-left pl-2">Reps:</h5>
                </label>
                <input
                  type="number"
                  class="form-control w-75 mx-auto text-center"
                  id="setReps"
                  placeholder="Enter reps here..."
                  v-model.number="activeSet.repCount"
                  required
                />
              </div>
              <div v-if="this.$store.state.activeContext.name" class="py-1">
                <button
                  class="btn btn-warning border w-100 border-white text-white rounded"
                  type="button"
                  data-toggle="modal"
                  data-target="#add-cycle-modal"
                >
                  <h5 class="pt-1">Cycle: {{this.$store.state.activeCycle.name}}</h5>
                </button>
              </div>
              <div v-else class="py-1">
                <button
                  class="btn btn-warning w-100 border border-white text-white rounded"
                  type="button"
                  data-toggle="modal"
                  data-target="#add-cycle-modal"
                >
                  <h5 class="pt-1">Set Cycle</h5>
                </button>
              </div>

              <div v-if="this.$store.state.activeContext.name" class="py-1 mb-5">
                <button
                  class="btn btn-warning w-100 border border-white text-white rounded"
                  type="button"
                  data-toggle="modal"
                  data-target="#add-context-modal"
                >
                  <h5 class="pt-1">Context: {{this.$store.state.activeContext.name}}</h5>
                </button>
              </div>
              <div v-else class="py-1 mb-5">
                <button
                  class="btn btn-warning w-100 border border-white text-white rounded"
                  type="button"
                  data-toggle="modal"
                  data-target="#add-context-modal"
                >
                  <h5 class="pt-1">Set Context</h5>
                </button>
              </div>
              <div>
                <button
                  class="btn btn-success btn-block border border-white text-white rounded"
                  type="submit"
                  @click="saveSetData()"
                >
                  <h5 class="pt-1">Save This Set</h5>
                </button>
              </div>
              <div>
                <button
                  class="btn btn-dark btn-block border border-white text-white rounded mt-3"
                  type="submit"
                  data-dismiss="modal"
                >
                  <h6 class="pt-1">Cancel</h6>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-----------------addContextModal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="add-context-modal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body w-75 mx-auto bg-success py-5 border rounded no-gutters">
            <context-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
    <!-----------------add cycle Modal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="add-cycle-modal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body mx-auto bg-dark border rounded no-gutters">
            <div class="form-group text-center">
              <label
                for="formGroupExampleInput"
                class="w-75 bg-success text-left border border-white text-white rounded"
              >
                <h5 class="pt-1 pl-2">Cycle:</h5>
              </label>
              <input
                type="number"
                class="form-control w-75 mx-auto text-center"
                placeholder="Enter cycle number here...."
                v-model.number="activeCycle.name"
                required
              />
            </div>
            <div>
              <button
                class="btn btn-success btn-block border border-white text-white rounded"
                type="submit"
                @click="setCycle()"
              >
                <h5 class="pt-1">Save Cycle</h5>
              </button>
            </div>
            <div>
              <button
                class="btn btn-dark btn-block border border-white text-white rounded mt-3"
                type="submit"
                data-dismiss="modal"
              >
                <h6 class="pt-1">Cancel</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
import ContextMenuOptions from "../components/ContextMenuOptions";
export default {
  name: "add-set-button",
  data() {
    return {
      activeSet: {},
      activeCycle: {},
    };
  },
  computed: {},
  methods: {
    saveSetData() {
      this.activeSet.date =
        this.$store.state.activeDate.pastDate ||
        this.$store.state.activeDate.date;
      this.activeSet.context = this.$store.state.activeContext.name;
      this.activeSet.cycle = this.$store.state.activeCycle.name;
      if (this.$store.state.activeSetsByExercise.length < 1) {
        this.activeSet.name = "Set 1";
      } else {
        this.activeSet.name =
          "Set " +
          (this.$store.state.activeSetsByExercise.length + 1).toString();
      }
      this.activeSet.exerciseName = this.$store.state.activeExercise.name;
      if (this.activeSet.weight && this.activeSet.repCount) {
        this.$store.dispatch("saveSetData", this.activeSet);
        $("#addSetDataModal").modal("hide");
        console.log("activeSet sent: ", this.activeSet);
        this.activeSet.musclegroup = this.$store.state.activeMuscleGroup.name;
        this.activeSet = {};
      }

      console.log("activeSet sent: ", this.activeSet);
    },
    setCycle() {
      this.$store.commit("setActiveCycle", this.activeCycle);
    },
  },
  components: { ContextMenuOptions },
};
</script>


<style scoped>
</style>