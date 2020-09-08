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
            <div class="modal-body bg-white no-gutters">Date Picker</div>
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