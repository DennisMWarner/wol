<template>
  <div id="app" class="container-fluid full-background bg-white">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    this.$store.dispatch("setBearer", this.$auth.bearer);
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";
@import "./assets/_overrides.scss";
@import "bootstrap";
// @import "./assets/style.scss";
</style>
<style lang="css">
.full-background {
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
}
</style>