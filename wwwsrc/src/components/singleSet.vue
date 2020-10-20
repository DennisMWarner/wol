<template>
  <div class="single-set col-12 border-0">
    <div
      class="row"
      data-toggle="modal"
      data-target="#edit-set-modal"
      @click="setActiveSet()"
    >
      <div class="mt-2 col-12 no-gutters">
        <div class="row">
          <div class="col-12 bg-white rounded-top">
            <div class="row">
              <div class="col-3">
                <p class="text-warning">{{ activeSetData.name }}</p>
              </div>

              <div class="col-5">
                <p class="text-dark text-right">
                  Plan: {{ activeSetData.plannedWeight }} X
                  {{ activeSetData.plannedRepCount }}
                </p>
              </div>
              <div class="col-4">
                <p class="text-warning">
                  Intensity: {{ activeSetData.intensityLevel }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-white text-centered">
            1RM: {{ activeSetData.oneRepMax }}
          </div>
          <div
            class="col-12 bg-success text-right text-white rounded-bottom border border-white"
          >
            <div class="row">
              <div class="col-4 text-left text-white">
                <p class="text-white">{{ activeSetData.context }}</p>
              </div>
              <div
                v-if="
                  activeSetData.actualWeight && activeSetData.actualRepCount
                "
                class="col-8"
              >
                <p class="text-white text-right">
                  <span class="text-left pr-3"
                    >Actual: {{ activeSetData.actualWeight }} X
                    {{ activeSetData.actualRepCount }}</span
                  ><span class="text-center pl-3">{{
                    activeSetData.actualIntensityLevel
                  }}</span>
                </p>
              </div>
              <div v-else class="col-8">
                <p class="text-white text-center">Actual: Click to enter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------edit-set-modal----------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="edit-set-modal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content w-75 mx-auto text-center bg-transparent">
          <div
            class="modal-body border border-white rounded bg-secondary no-gutters"
          >
            <form>
              <div class="form-group">
                <label
                  for="formGroupExampleInput"
                  class="w-75 bg-success border border-white text-white rounded"
                >
                  <h5 class="pt-1 text-left pl-2">Actual Weight:</h5>
                </label>
                <input
                  type="number"
                  class="form-control w-75 mx-auto text-center border border-success"
                  v-model.number="activeSet.actualWeight"
                />
              </div>
              <div class="form-group">
                <label
                  for="formGroupExampleInput"
                  class="w-75 bg-success border border-white text-white rounded"
                >
                  <h5 class="pt-1 text-left pl-2">Actual Reps:</h5>
                </label>
                <input
                  type="number"
                  class="form-control w-75 mx-auto text-center"
                  placeholder="Enter reps here..."
                  v-model.number="activeSet.actualRepCount"
                />
              </div>
              <div class="form-group">
                <label
                  for="formGroupExampleInput"
                  class="w-75 bg-success border border-white text-white rounded"
                >
                  <h5 class="pt-1 text-left pl-2">Actual Intensity Level:</h5>
                </label>
                <input
                  type="number"
                  class="form-control w-75 mx-auto text-center border border-success"
                  v-model.number="activeSet.actualIntensityLevel"
                />
              </div>

              <div>
                <button
                  class="btn btn-success btn-block border border-white text-white rounded"
                  type="button"
                  @click="enterActualSetData()"
                  data-dismiss="modal"
                >
                  <h5 class="pt-1">Save This Set</h5>
                </button>
              </div>
              <div>
                <button
                  class="btn btn-dark btn-block border border-white text-white rounded mt-3"
                  type="button"
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
    <!------------------------------------------------------------------------------------>
  </div>
</template>


<script>
export default {
  name: "single-set",
  props: ["activeSetData"],
  data() {
    return {
      activeSet: {},
    };
  },
  computed: {},
  methods: {
    setActiveSet() {
      this.$store.dispatch("setActiveSet", this.activeSetData);
    },
    enterActualSetData() {
      let editedSet = { ...this.$store.state.activeSet };
      editedSet.actualRepCount = this.activeSet.actualRepCount;
      editedSet.actualWeight = this.activeSet.actualWeight;
      editedSet.actualIntensityLevel = this.activeSet.actualIntensityLevel;
      console.log("enterActualSetData: ", editedSet);

      this.$store.dispatch("planNextSet", editedSet);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>