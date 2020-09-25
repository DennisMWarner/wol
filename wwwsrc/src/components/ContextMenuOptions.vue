<template>
  <div class="context-menu-options text-center bg-secondary border rounded border-white py-5">
    <context-menu-option-button
      v-for="contextMenuOptionButton in contextMenuOptionButtons"
      :contextMenuOptionButtonData="contextMenuOptionButton"
      :key="contextMenuOptionButton.id"
    />
    <button
      class="btn btn-white bg-white border rounded text-warning border-success w-75 mb-3"
      data-toggle="modal"
      data-target="#addNewContextModal"
    >Add New...</button>
    <button
      class="btn btn-white bg-dark border rounded text-white border-white w-75 mt-3"
      data-dismiss="modal"
    >Cancel</button>
    <!-----------------Add New context Modal----------------------------------->
    <div class="modal" tabindex="-1" role="dialog" id="addNewContextModal">
      <div class="modal-dialog-centered" role="document">
        <div class="modal-content p-2 pt-4 bg-dark mx-3 border border-white rounded shadow">
          <form data-toggle="validator" role="form">
            <div class="form-group">
              <label
                for="contextName"
                class="w-75 border border-white rounded bg-success p-2 text-white"
              >Name of context:</label>
              <input
                id="contextName"
                type="text"
                class="form-control w-75 mx-auto"
                placeholder="New context name"
                v-model="newContext.name"
                required
              />
              <label
                for="maxReps"
                class="w-75 mt-4 border border-white rounded bg-success p-2 text-white"
              >Target Rep Range:</label>
              <div class="row w-75 mx-auto">
                <div class="col-5 px-0 mx-auto">
                  <input
                    type="number"
                    id="maxReps"
                    class="form-control"
                    placeholder="min"
                    v-model.number="newContext.repMax"
                    required
                  />
                </div>
                <div class="col-5 px-0 mx-auto">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="max"
                    v-model.number="newContext.repMin"
                    required
                  />
                </div>
              </div>

              <div class="btn-group dropup" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  class="btn btn-success border rounded border-white text-white dropdown-toggle mt-4"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Number of Cycles:</button>
                <div
                  class="dropdown-menu w-100 px-3 bg-secondary border border-white"
                  aria-labelledby="btnGroupDrop1"
                >
                  <button
                    class="dropdown-item mt-2 btn bg-success rounded text-white text-center border border-white"
                  >Static / 1</button>
                  <button
                    class="dropdown-item mt-2 btn bg-success rounded text-white text-center border border-white"
                  >2</button>
                  <button
                    class="dropdown-item mt-2 btn bg-success rounded text-white text-center border border-white"
                  >3</button>
                  <button
                    class="dropdown-item mt-2 btn bg-success rounded text-white text-center border border-white"
                  >4</button>
                  <input
                    type="number"
                    class="form-control mt-2 text-center"
                    placeholder="enter number"
                    v-model.number="newContext.numOfCycles"
                    required
                  />
                </div>
              </div>

              <button
                class="btn btn-outline-light bg-secondary text-white w-75 mt-3"
                type="submit"
                @click="addNewContext()"
              >Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-------------------------------------------------------------------------->
  </div>
</template>


<script>
import ContextMenuOptionButton from "../components/ContextMenuOptionButton";
export default {
  name: "context-menu-options",
  data() {
    return {
      newContext: {},
    };
  },
  computed: {
    contextMenuOptionButtons() {
      return this.$store.state.activeContexts;
    },
  },
  methods: {},
  components: { ContextMenuOptionButton },
};
</script>


<style scoped>
</style>