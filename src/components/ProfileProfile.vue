<template>
  <router-view></router-view>
  <div class="main">
    <div class="column1">
      <sidebarComponent />
    </div>
    <div class="column2">
      <div class="content">
        <h1 class="profile-h1">Profile Page</h1>
        <router-link to="/Profile/Ehsan" class="nav-item"
          >Ehsan's Profile</router-link
        ><br />
        <router-link to="/Profile/Awais" class="nav-item"
          >Awais's Profile</router-link
        ><br />
        <router-link to="/Profile/Ahmad" class="nav-item"
          >Ahmad's Profile</router-link
        ><br />
      </div>
    </div>
  </div>
</template>

<script>
// import useRoute for dynamic routing
// import {useRoute} from 'vue-router';
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "ProfileProfile",
  component: {
    SidebarComponent,
  },
  // data(){
  //   return{
  //     profile: ""
  //   }
  // },
  // mounted() {
  //   const route= useRoute();
  //   console.log("route", route.params.name);
  //   this.profile=route.params.name;
  // }
};
</script>

<style>
.profile-h1 {
  color: orange;
}
</style>
