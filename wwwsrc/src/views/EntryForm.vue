<template>
  <div class="entry-form text-white">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="border rounded border-white bg-warning">ENTER A NEW WORKOUT</h3>
      </div>
      <div class="col-12 text-center">
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span
              class="input-group-text bg-success text-dark"
              id="inputGroup-sizing-sm"
            >Date (yyyy-mm-dd):</span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <!----------------------==================================----FIRST BODY GROUP---------------------->
      <div class="col-3 m-3 border rounded border-white">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle border rounded border-white mt-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >First Body Group</button>
          <div
            class="dropdown-menu bg-info border border-white text-white ml-2 p-3"
            aria-labelledby="dropdownMenuButton"
          >
            <div class="btn-group-vertical">
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setFirstBodyPart('Chest')"
              >Chest</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setFirstBodyPart('Shoulder')"
              >Shoulders</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setFirstBodyPart('Tricep')"
              >Triceps</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setFirstBodyPart('Bicep')"
              >Biceps</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setFirstBodyPart('Back')"
              >Back</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-white mt-2">{{this.firstBodyGroup.name}}</div>
        </div>
        <!----------------------==================================----FIRST Exercise ---------------------->

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle border rounded border-white mt-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >First Exercise</button>
          <div
            class="dropdown-menu bg-info border border-white text-white ml-2 p-3"
            aria-labelledby="dropdownMenuButton"
          >
            <exercise-menu-option
              v-for="firstBodyPartExerciseMenuOption in firstBodyPartExerciseMenuOptions"
              :exerciseMenuOptionData="firstBodyPartExerciseMenuOption"
              :key="firstBodyPartExerciseMenuOption.value"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-white mt-2">{{}}</div>
        </div>
      </div>
      <!--------------------------------------------------------------SECOND BODY GROUP------------------->
      <div class="col-3 m-3 border rounded border-white">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle border rounded border-white mt-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Second Body Group</button>
          <div
            class="dropdown-menu bg-info border border-white text-white ml-2 p-3"
            aria-labelledby="dropdownMenuButton"
          >
            <div class="btn-group-vertical">
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setSecondBodyPart('Chest')"
              >Chest</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setSecondBodyPart('Shoulder')"
              >Shoulders</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setSecondBodyPart('Tricep')"
              >Triceps</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setSecondBodyPart('Bicep')"
              >Biceps</button>
              <button
                class="btn btn-primary border rounded m-1 ml-2"
                @click="setSecondBodyPart('Back')"
              >Back</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 text-white mt-2">{{secondBodyGroup.name}}</div>
        </div>
        <!----------------------==================================----FIRST Exercise ---------------------->

        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle border rounded border-white mt-2 mb-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >First Exercise</button>
          <div
            class="dropdown-menu bg-info border border-white text-white ml-2 p-3"
            aria-labelledby="dropdownMenuButton"
          >
            <exercise-menu-option
              v-for="secondBodyPartExerciseMenuOption in secondBodyPartExerciseMenuOptions"
              :exerciseMenuOptionData="secondBodyPartExerciseMenuOption"
              :key="secondBodyPartExerciseMenuOption.value"
            />
          </div>
        </div>
      </div>
      <!----------------------==================================----THIRD BODY GROUP---------------------->

      <!----------------------------------------------------------------end third body group--------->
    </div>

    <div class="row">
      <div class="col-12">
        <button class="btn btn-danger border btn-block rounded border-white" @click="test()">TEST</button>
      </div>
    </div>
  </div>
</template>


<script>
import ExerciseMenuOption from "../components/ExerciseMenuOption";
export default {
  name: "entry-form",
  data() {
    return {
      firstBodyGroup: {},
      secondBodyGroup: {},
      thirdBodyGroup: {},
    };
  },
  computed: {
    firstBodyPartExerciseMenuOptions() {
      return this.$store.state.firstActiveBodyPartExercises;
    },
    secondBodyPartExerciseMenuOptions() {
      return this.$store.state.secondActiveBodyPartExercises;
    },
  },
  methods: {
    test() {
      console.log(this.firstBodyGroup);
    },
    setFirstBodyPart(bpName) {
      this.firstBodyGroup.name = bpName;
      console.log("first body part: ", this.firstBodyGroup.name);
      let exercises = bpName.toLowerCase() + "Exercises";
      console.log("exercises: ", this.$store.state[exercises]);
      this.$store.state.firstActiveBodyPartExercises = this.$store.state[
        exercises
      ];
      console.log(
        "active ebody part exercises: ",
        this.$store.state.activeBodyPartExercises
      );
    },
    setSecondBodyPart(bpName) {
      this.secondBodyGroup.name = bpName;
      let exercises = bpName.toLowerCase() + "Exercises";
      console.log("exercises: ", this.$store.state[exercises]);
      this.$store.state.secondActiveBodyPartExercises = this.$store.state[
        exercises
      ];
      console.log(
        "active ebody part exercises: ",
        this.$store.state.activeBodyPartExercises
      );
    },
    setThirdBodyPart(bpName) {
      this.firstBodyGroup.name = bpName;
      let exercises = bpName.toLowerCase() + "Exercises";
      console.log("exercises: ", this.$store.state[exercises]);
      this.$store.state.thirdActiveBodyPartExercises = this.$store.state[
        exercises
      ];
      console.log(
        "active ebody part exercises: ",
        this.$store.state.activeBodyPartExercises
      );
    },
  },
  components: { ExerciseMenuOption },
};
</script>