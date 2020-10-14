<template>
  <div class="add-new-program">
    <button
      class="btn w-100 mt-2 text-white border shadow border-white bg-warning rounded py-1 mb-2 text-center"
      data-toggle="modal"
      data-target="#addMuscleGroupModal"
      @click="addNewProgram()"
    >
      <h6 class="mt-2">START A NEW PROGRAM</h6>
    </button>
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
  </div>
</template>


<script>
import MuscleGroupMenuOptions from "../components/MuscleGroupMenuOptions";
export default {
  name: "add-new-program",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async addNewProgram() {
      await this.$store.dispatch("clearActiveSets");
      this.$router.push("/new-program");
    },
  },
  components: { MuscleGroupMenuOptions },
};
</script>


<style scoped>
</style>