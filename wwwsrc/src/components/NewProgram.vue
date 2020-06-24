<template>
  <div class="row text-center rounded mx-2 bg-warning justify-content-center">
    <div class="col-8 bg-light m-5 rounded">
      <div class="new-program text-center">
        <button
          class="btn btn-primary border border-white rounded shadow text-white btn-block mt-2"
        >Cardio Program</button>
        <button
          class="btn btn-secondary border border-white rounded shadow text-white btn-block"
          data-target="#new-resistance-modal"
          data-toggle="modal"
        >Resistance Program</button>
        <button
          class="btn btn-info border border-white rounded shadow text-primary btn-block"
        >Stretch Program</button>
        <button
          class="btn btn-warning border border-white rounded shadow text-white btn-block mb-3"
        >Nutrition Program</button>
      </div>
      <div class="modal" tabindex="-1" role="dialog" id="new-resistance-modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h5 class="modal-title text-white">New Resistance Set</h5>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Weight:</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Weight"
                    step="2.5"
                  />
                  <small id="emailHelp" class="form-text text-muted">Enter set weight</small>
                </div>
              </form>
            </div>
            <div class="modal-footer bg-primary">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Save Set</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "new-program",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>