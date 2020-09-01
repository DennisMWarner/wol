<template>
  <div class="add-set-button">
    <div class="row">
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
          <div class="modal-body no-gutters">
            <form>
              <div class="form-group border border-white rounded py-3 bg-secondary">
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
                  v-model="activeSet.weight"
                  required
                />
              </div>
              <div class="form-group border border-white rounded py-3 bg-secondary">
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
                  v-model="activeSet.reps"
                  required
                />
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
            </form>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------------------------------------------------------->
  </div>
</template>


<script>
export default {
  name: "add-set-button",
  data() {
    return {
      activeSet: {},
    };
  },
  computed: {},
  methods: {
    saveSetData() {
      console.log("activeSets length: ", this.$store.state.activeSets.length);
      if (this.$store.state.activeSets.length < 1) {
        this.activeSet.name = "Set 1";
      } else {
        this.activeSet.name =
          "Set " + (this.$store.state.activeSets.length + 1).toString();
      }
      this.activeSet.exercise = this.$store.state.activeExercise.name;
      if (this.activeSet.weight && this.activeSet.reps) {
        this.$store.dispatch("saveSetData", this.activeSet);
        $("#addSetDataModal").modal("hide");
        this.activeSet = {};
      }
      console.log("activeSets length: ", this.$store.state.activeSets.length);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>