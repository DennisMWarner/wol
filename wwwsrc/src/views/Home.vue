<template>
  <div class="row text-center">
    <div class="home bg-warning text-success col-12">
      <button
        class="btn btn-primary text-info border rounded shadow my-3"
        data-toggle="modal"
        data-target="#new-programs-modal"
      >New program</button>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="new-programs-modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-white">New Program</h5>
          </div>
          <div class="modal-body">
            <new-program />
          </div>
          <div class="modal-footer bg-primary">
            <button
              type="button"
              class="btn-light border border-warning btn rounded shadow text-dark"
              data-dismiss="modal"
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProgram from "../components/NewProgram";

export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  components: { NewProgram }
};
</script>
