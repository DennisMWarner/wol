<template class="bg-dark home">
  <div>
    <div class="row text-center text-white">
      <div class="col-sm-4">
        active Date: {{ this.$store.state.activeDate.month }}-{{
          this.$store.state.activeDate.day
        }}-{{ this.$store.state.activeDate.year }}
      </div>
      <div class="col-sm-4">
        active Cycle: {{ this.$store.state.activeCycle.name }}
      </div>
    </div>
    <!-- <div class="row text-center text-white">
      <div class="col-12">{{this.$store.state.activeDate.pastDate}}</div>
    </div>-->
    <div v-if="this.$auth.userInfo.sub">
      <div
        v-if="this.$store.state.activeMuscleGroups.length > 0"
        class="border border-warning shadow rounded px-1 mb-2 bg-info"
      >
        <muscle-groups />
        <!-- <exercise v-if="this.$store.state.activeMuscleGroup.name" /> -->
      </div>
      <div
        v-else
        class="border border-warning shadow rounded px-1 mb-2 bg-info"
      >
        <muscle-group />
        <!-- <exercise v-if="this.$store.state.activeMuscleGroup.name" /> -->
      </div>
      <add-muscle-group-button
        v-if="this.$store.state.activeMuscleGroup.name"
      />
      <add-another-exercise-button
        v-if="this.$store.state.activeExercisesByMuscleGroup.length > 0"
      />
      <!-- <div class="col-12 text-center text-white pt-4 mt-2">
        <button
          class="btn btn-success text-white pt-3 border rounded border-white"
          @click="addAllToDB()"
        >
          <h5>Add exercises and musclegroups to DB</h5>
        </button>
      </div>-->
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
      <!-----------------Add Another Exercise Modal------------------------------>
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
import MuscleGroup from "../components/MuscleGroup";
import MuscleGroups from "../components/MuscleGroups";
import AddMuscleGroupButton from "../components/AddMuscleGroupButton";
import AddAnotherExerciseButton from "../components/AddAnotherExerciseButton";
import SetGroup from "../components/SetGroup";
import Exercise from "../components/Exercise";

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
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      // console.log("this.$auth.user: ");
      // console.log(this.$auth.user);
      // this.$store.dispatch("getSetsByUserId", this.$auth.user.sub);
      this.$store.dispatch("getSetsByUserId", this.$auth.user.sub);
      this.$store.dispatch("getCurrentDateString");
    },

    logout() {
      this.$store.dispatch("logout");
    },
    clearDB() {
      this.$store.dispatch("clearDB", this.$auth.user.sub);
    },
    addAllToDB() {
      this.$store.dispatch("addAllToDB", this.$auth.user.sub);
    },
  },
  components: {
    MuscleGroup,
    MuscleGroups,
    SetGroup,
    Exercise,
    AddMuscleGroupButton,
    AddAnotherExerciseButton,
  },
};
</script>
