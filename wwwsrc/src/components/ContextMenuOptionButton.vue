<template>
  <div class="context-menu-option-button text-white text-center">
    <button
      class="btn btn-success text-white border rounded border-white g w-75 mb-3"
      data-dismiss="modal"
      @click="setSetContext()"
    >{{this.contextMenuOptionButtonData.name}}</button>
  </div>
</template>


<script>
export default {
  name: "context-menu-option-button",
  data() {
    return {
      activeContext: {},
    };
  },
  computed: {},
  methods: {
    setSetContext() {
      this.activeContext.name = this.contextMenuOptionButtonData.name;
      this.$store.commit("setActiveContext", this.activeContext);
    },
  },
  components: {},
  props: ["contextMenuOptionButtonData"],
};
</script>


<style scoped>
</style>