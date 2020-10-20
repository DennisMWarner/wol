<template>
  <div class="add-past-workout">
    <button
      class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
      data-toggle="modal"
      data-target="#change-date-modal"
    >
      <h6 class="mt-2">ENTER A PAST WORKOUT</h6>
    </button>
    <!-----------------change date modal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="change-date-modal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content mx-3 bg-transparent">
          <div
            class="form-group border border-white rounded text-center py-3 bg-secondary"
          >
            <label
              for="formGroupExampleInput"
              class="w-75 bg-success border border-white text-white rounded"
            >
              <h5 class="pt-1 text-left pl-2">Date of workout:</h5>
            </label>
            <input
              type="text"
              class="form-control w-75 mx-auto text-center"
              placeholder="(mm-dd-yyyy)"
              v-model="activeDate.pastDate"
              required
            />
          </div>
          <div>
            <button
              class="btn btn-success btn-block border border-white text-white rounded"
              type="button"
              data-toggle="modal"
              data-target="#add-past-workout-modal"
              @click="setPastDate()"
            >
              <h5 class="pt-1">Save</h5>
            </button>
          </div>
          <!-----------------add past workout modal------------------------------------->
          <div
            class="modal"
            tabindex="-1"
            role="dialog"
            id="add-past-workout-modal"
          >
            <div class="modal-dialog-centered" role="document">
              <div class="modal-content bg-transparent">
                <div class="modal-body no-gutters">
                  <muscle-group-menu-options />
                </div>
              </div>
            </div>
          </div>
          <!-------------------------------------------------------------------------->
          <div>
            <button
              class="btn btn-dark btn-block border border-white text-white rounded mt-3"
              type="button"
              data-dismiss="modal"
            >
              <h6 class="pt-1">Cancel</h6>
            </button>
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
  name: "add-past-workout",
  data() {
    return {
      activeDate: {},
    };
  },
  computed: {},
  methods: {
    async setPastDate() {
      this.$store.dispatch("setPastDate", this.activeDate.pastDate);
      this.activeDate = {};
      await this.$store.dispatch("clearActiveSets");
      this.$router.push("/past-program");
      $("#change-date-modal").modal("hide");
    },
  },
  components: { MuscleGroupMenuOptions },
};
</script>


<style scoped>
</style>