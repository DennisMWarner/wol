<template>
  <div class="add-set-button">
    <div class="row my-2">
      <div
        class="col-12"
        v-if="
          this.$store.state.activeSets.filter(
            (as) => as.exercise == this.$store.state.activeExercise.name
          ).length > 0
        "
      >
        <button
          class="btn-outline-light btn-sm btn bg-success text-white mt-2"
          data-target="#addSetDataModal"
          data-toggle="modal"
        >
          Add Another Set
        </button>
      </div>
      <div class="col-12" v-else>
        <button
          class="btn-outline-light btn-sm btn bg-success text-white mt-2"
          data-target="#addSetDataModal"
          data-toggle="modal"
        >
          Add a Set
        </button>
      </div>
    </div>
    <!---------------------enter set data modal ----------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addSetDataModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content w-75 mx-auto text-center bg-transparent">
          <div class="modal-body border border-white rounded bg-secondary">
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
                  v-model.number="activeSet.plannedWeight"
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
                  v-model.number="activeSet.plannedRepCount"
                  required
                />
              </div>
            </form>

            <div
              v-if="this.$store.state.activeIntensityLevel.intensityLevel"
              class="py-1 mb-3 mt-5"
            >
              <button
                class="btn btn-warning w-100 border border-white text-white rounded"
                type="button"
                data-toggle="modal"
                data-target="#add-intensity-level-modal"
              >
                <h5 class="pt-1">
                  Intensity Level:
                  {{ this.$store.state.activeIntensityLevel.intensityLevel }}
                </h5>
              </button>
            </div>

            <div v-else class="py-1 mb-3">
              <button
                class="btn btn-warning w-100 border border-white text-white rounded"
                type="button"
                data-toggle="modal"
                data-target="#add-intensity-level-modal"
              >
                <h5 class="pt-1">Set Intensity Level</h5>
              </button>
            </div>

            <div v-if="this.$store.state.activeContext.name" class="py-1 mb-5">
              <button
                class="btn btn-warning w-100 border border-white text-white rounded"
                type="button"
                data-toggle="modal"
                data-target="#add-context-modal"
              >
                <h5 class="pt-1">
                  Context: {{ this.$store.state.activeContext.name }}
                </h5>
              </button>
            </div>

            <div v-else class="py-1 mb-5">
              <button
                class="btn btn-warning w-100 border border-white text-white rounded"
                type="button"
                data-toggle="modal"
                data-target="#add-context-modal"
                @click="getUserContexts()"
              >
                <h5 class="pt-1">Set Context</h5>
              </button>
            </div>
            <div>
              <button
                class="btn btn-success btn-block border border-white text-white rounded"
                type="button"
                @click="saveSetData()"
                data-dismiss="modal"
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
          </div>
        </div>
      </div>
    </div>
    <!-----------------addContextModal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="add-context-modal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div
            class="modal-body w-75 mx-auto bg-success py-5 border rounded no-gutters"
          >
            <context-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-----------------add-intensity-level-modal------------------------------------->
    <div
      class="modal"
      tabindex="-1"
      role="dialog"
      id="add-intensity-level-modal"
    >
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body w-75 mx-auto bg-primary py-5 border rounded">
            <div class="row">
              <div class="col-12">
                <div
                  class="w-100 bg-success border border-white text-white rounded mb-4"
                >
                  <h5 class="pt-1 text-center pt-2">Intensity Level:</h5>
                </div>
              </div>
            </div>
            <intensity-level-button-group />
          </div>
        </div>
      </div>
    </div>

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
                type="button"
                @click="setCycle()"
                data-dismiss="modal"
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
import intensityLevelButtonGroup from "../components/IntensityLevelButtonGroup";
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
    getUserContexts() {
      this.$store.dispatch("getUserContexts", this.$auth.user.sub);
    },
    saveSetData() {
      this.activeSet.setDate =
        this.$store.state.activeDate.pastDate ||
        this.$store.state.activeDate.setDate;
      this.activeSet.context = this.$store.state.activeContext.name;
      this.activeSet.cycle = this.$store.state.activeCycle.name;
      this.activeSet.intensityLevel = this.$store.state.activeIntensityLevel.intensityLevel;
      if (this.$store.state.activeSetsByExercise.length < 1) {
        this.activeSet.name = "Set 1";
      } else {
        this.activeSet.name =
          "Set " +
          (this.$store.state.activeSetsByExercise.length + 1).toString();
      }
      this.activeSet.exerciseName = this.$store.state.activeExercise.name;
      if (this.activeSet.plannedWeight && this.activeSet.plannedRepCount) {
        this.$store.dispatch("saveSetData", this.activeSet);
        $("#addSetDataModal").modal("hide");

        this.activeSet.musclegroup = this.$store.state.activeMuscleGroup.name;
        this.activeSet = {};
      }
    },
    setCycle() {
      this.$store.commit("setActiveCycle", this.activeCycle);
    },
  },
  components: { ContextMenuOptions, intensityLevelButtonGroup },
};
</script>


<style scoped>
</style>