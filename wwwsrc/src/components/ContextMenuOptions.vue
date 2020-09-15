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
              <input
                type="text"
                class="form-control"
                placeholder="New context name"
                v-model="newContext.name"
                required
              />

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