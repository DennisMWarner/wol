<template>
  <div class="add-old-workout">
    <button
      class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
      data-toggle="modal"
      data-target="#change-date-modal"
    >
      <h6 class="mt-2">ADD AN OLD WORKOUT</h6>
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
              @click="setPastDate()"
              data-dismiss="modal"
            >
              <h5 class="pt-1">Save</h5>
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
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
export default {
  name: "add-old-workout",
  data() {
    return {
      activeDate: {},
    };
  },
  computed: {},
  methods: {
    setPastDate() {
      this.$store.dispatch("setPastDate", this.activeDate.pastDate);
      this.activeDate = {};
    },
  },
  components: {},
};
</script>


<style scoped>
</style>