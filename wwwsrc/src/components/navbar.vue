<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark full-width">
    <a class="navbar-brand" href="#">Cognifit</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Settings</a>
          <div class="dropdown-menu text-center bg-dark" aria-labelledby="navbarDropdownMenuLink">
            <button
              class="btn w-75 border border-shadow border-white m-1 btn-info mt-1"
            >Resistance Training</button>
            <button class="btn w-75 border border-shadow border-white m-1 btn-warning mt-1">Cardio</button>
            <button
              class="btn w-75 border border-shadow border-white m-1 btn-secondary mt-1"
            >Nutrition</button>
            <button class="btn w-75 border border-shadow border-white m-1 btn-danger mt-1">Metrics</button>
            <button
              class="btn border w-75 border-shadow text-white border-secondary m-1 btn-transparent mt-1"
            >Metrics</button>
            <button
              class="btn border w-75 border-shadow text-white border-secondary m-1 btn-transparent mt-1"
            >Metrics</button>
          </div>
        </li>
      </ul>

      <span v-if="$auth.isAuthenticated" class="text-white mt-2">
        <h6>{{userInfo.user.name}}</h6>
      </span>
      <span class="navbar-text">
        <button class="btn-sm btn btn-warning" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn-sm btn btn-danger border border-light" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>

  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'home' }">CogniFit</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'dashboard' }"
        >
          <router-link class="nav-link" :to="{ name: 'dashboard' }">My-Dashboard</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>-->
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:5001",
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  },
  computed: {
    userInfo() {
      return this.$auth;
    }
  }
};
</script>

<style></style>
