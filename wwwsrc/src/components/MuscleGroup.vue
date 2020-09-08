<template>
  <div class="muscle-group mx-auto my-auto">
    <div
      class="mt-2 text-white border shadow border-white bg-warning rounded px-2 pt-1 mb-2 text-center"
      v-if="this.$store.state.activeMuscleGroups.length>0 "
      @click="setActiveMuscleGroup()"
    >
      <h4>{{muscleGroupData.name}}</h4>
    </div>
    <div
      v-else-if="this.$store.state.activeSets.length<1 && !this.$store.state.activeDate.pastDate"
      class="px-1"
    >
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
        data-toggle="modal"
        data-target="#addMuscleGroupModal"
      >
        <h5 class="mt-2">START A NEW WORKOUT</h5>
      </button>
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
        data-toggle="modal"
        data-target="#change-date-modal"
      >
        <h5 class="mt-2">ADD AN OLD WORKOUT</h5>
      </button>
    </div>
    <div v-else>
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
        data-toggle="modal"
        data-target="#addMuscleGroupModal"
      >
        <h5 class="mt-2">Add A Muscle Group</h5>
      </button>
    </div>
    <!-- <div v-else>
      <button
        class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
        @click="getSetsByUserId()"
      >
        <h5 class="mt-2">CONTINUE WITH PROGRAM</h5>
      </button>
    </div>-->

    <!-----------------addMuscleGroupModal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addMuscleGroupModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content bg-transparent">
          <div class="modal-body no-gutters">
            <muscle-group-menu-options />
          </div>
        </div>
      </div>
    </div>
    <!-------------------------------------------------------------------------->
    <!-----------------change date modal------------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="change-date-modal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content mx-3 bg-transparent">
          <div class="form-group border border-white rounded text-center py-3 bg-secondary">
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
              @click="setActiveDate()"
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

    <div
      v-if="this.$store.state.activeMuscleGroups.length>0 && this.muscleGroupData.name ==this.$store.state.activeMuscleGroup.name"
    >
      <exercises-by-muscle-group />
    </div>
  </div>
</template>


<script>
// import Exercise from "../components/Exercise";
import ExercisesByMuscleGroup from "../components/ExercisesByMuscleGroup";
import MuscleGroupMenuOptions from "../components/MuscleGroupMenuOptions";
export default {
  name: "muscle-group",
  data() {
    return {
      activeDate: {},
    };
  },
  computed: {},

  methods: {
    async setActiveMuscleGroup() {
      this.$store.state.activeExercise = {};
      await this.$store.dispatch("setActiveMuscleGroup", this.muscleGroupData);
      console.log(
        "muscleGroupData sent with setActiveMuscleGroup: ",
        this.muscleGroupData
      );
      if (this.$store.state.activeExercisesByMuscleGroup.length == 1) {
        this.$store.dispatch(
          "setActiveSetsByExercise",
          this.$store.state.activeExercisesByMuscleGroup[0]
        );
      }
    },
    setActiveDate() {
      this.$store.dispatch("setActiveDate", this.activeDate);
      console.log("this.activeDate sent: ", this.activeDate);
      this.activeDate = {};
    },
  },

  components: { MuscleGroupMenuOptions, ExercisesByMuscleGroup },
  props: ["muscleGroupData"],
};
</script>


<style scoped>
</style>