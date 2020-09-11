<template>
  <div class="date-picker">
    <div>
      <button
        class="btn w-100 btn-success text-white border rounded"
        data-toggle="modal"
        data-target="#pick-date-modal"
      >Pick Date</button>
      <!---------------pick date modal--------------------------->
      <div class="modal" tabindex="-1" role="dialog" id="pick-date-modal">
        <div class="modal-dialog-centered" role="document">
          <div class="modal-content bg-transparent">
            <div class="modal-body row p-0 bg-success no-gutters m-1 border rounded">
              <div class="col-12 bg-warning m-0 text-center text-white px-1">Pick a day:</div>
              <div
                class="btn-group border border-white rounded mt-2 mb-2 mx-auto"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" class="btn btn-warning">Mo</button>
                <button type="button" class="btn btn-success">Tu</button>
                <button type="button" class="btn btn-primary">We</button>
                <button type="button" class="btn btn-secondary">Th</button>
                <button type="button" class="btn btn-warning">Fr</button>
                <button type="button" class="btn btn-success">Sa</button>
                <button type="button" class="btn btn-primary">Su</button>
              </div>
              <div class="col-12 bg-warning m-0 text-center text-white px-1">Or every:</div>
            </div>
          </div>
        </div>
      </div>
      <!--------------------------------------------------------->
    </div>
  </div>
</template>


<script>
export default {
  name: "date-picker",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>