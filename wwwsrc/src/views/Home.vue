<template class="bg-dark home">
  <div>
    <!-- <div class="row text-center text-white">
      <div class="col-6">
        active Date: {{ this.$store.state.activeDate.month }}-{{
          this.$store.state.activeDate.day
        }}-{{ this.$store.state.activeDate.year }}
      </div>
      <div class="col-6">
        active Cycle: {{ this.$store.state.activeCycle.name }}
      </div>
    </div> -->

    <div v-if="this.$auth.userInfo.sub">
      <div class="border border-warning rounded px-2">
        <div v-if="this.$store.state.activeSets.length > 0" class="px-1">
          <continue-program-button />
        </div>
        <add-new-program />
        <add-past-workout />
      </div>

      <!-------------------clear DB button and modal------------------------>
      <div
        v-if="this.$store.state.activeMuscleGroups.length > 0"
        class="row text-center mt-4"
      >
        <div class="col-12">
          <button
            class="btn-outline-light btn-sm btn bg-danger text-white text-center mx-3 mb-1 w-75"
            data-target="#clearDBModal"
            data-toggle="modal"
          >
            Clear Database
          </button>
        </div>
      </div>
      <!-----------------Clear DB Modal------------------------------>
      <div class="modal" tabindex="-1" role="dialog" id="clearDBModal">
        <div class="modal-dialog-centered" role="document">
          <div class="modal-content bg-transparent">
            <div
              class="modal-body w-75 mx-auto no-gutters text-white text-center border rounded bg-danger"
            >
              <h1>This will clear the database!</h1>
              <button
                class="btn m-3 btn-primary border rounded border-white w-50"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                class="btn btn-danger border shadow rounded border-white w-50"
                @click="clearDB()"
                data-dismiss="modal"
              >
                CLEAR DB
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-------------------------------------------------------------------->
    </div>
    <div div v-else>
      <div class="row no-gutters text-center m-4 mt-5 pt-5">
        <div class="col-12 text-center text-white pt-4 mt-5">
          <button
            class="btn btn-warning pt-3 border rounded border-white"
            @click="login()"
          >
            <h5>Please login to continue</h5>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContinueProgramButton from "../components/ContinueProgramButton";
import AddNewProgram from "../components/AddNewProgram";
import AddPastWorkout from "../components/AddPastWorkout";

export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    },
    exercises() {
      return this.$store.state.activeExercises;
    },
    activeSets() {
      return this.$store.state.plannedSets;
    },
  },
  data() {
    return {
      activeDate: {},
    };
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getNextSetsByUserId", this.$auth.user.sub);
      this.$store.dispatch("getCurrentDateString");
    },

    logout() {
      this.$store.dispatch("logout");
    },
    clearDB() {
      this.$store.dispatch("clearDB", this.$auth.user.sub);
    },
  },
  components: {
    ContinueProgramButton,
    AddNewProgram,
    AddPastWorkout,
  },
};
</script>
