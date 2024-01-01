<template>
  <nav class="navbar">
    <router-link to="/" class="nav-item">Home</router-link><br />
    <router-link to="/Login" class="nav-item">Login</router-link><br />
    <router-link to="/Profile" class="nav-item">Profile</router-link><br />
    <!-- <router-link to="/Profile/Ehsan" class="nav-item">Ehsan's Profile</router-link><br />
    <router-link to="/Profile/Awais" class="nav-item">Awais's Profile</router-link><br />
    <router-link to="/Profile/Ahmad" class="nav-item">Ahmad's Profile</router-link><br /> -->
  </nav>
  
  
  
  <router-view></router-view><br />
  <!-- <img alt="Vue logo" src="./assets/ehsan8.jpeg" /> -->
</template>

<script>
import SidebarComponent from "./components/SidebarComponent.vue";
export default {
  
  name: "App",
  component: {
    SidebarComponent,
  },
};
</script>

<style>
.navbar{
  background-color: aqua;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
/* img {
  height: 20rem;
  width: 20rem;
  border-radius: 10%;
} */

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


</style>
