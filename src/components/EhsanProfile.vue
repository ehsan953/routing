<template>
  <router-view></router-view>
  <h1 class="profile-h1"> Muhammad Ehsan</h1>
  <div>
    <img class="profile-img" src="../assets/awais.jpg" alt="" />
    <h3>Web Developer</h3>
  </div>
</template>

<script>
// import useRoute for dynamic routing
// import { useRoute } from "vue-router";
export default {
  name: "EhsanProfile",
  // data() {
  //   return {
  //     profile: "",
  //   };
  // },
  // mounted() {
  //   const route = useRoute();
  //   console.log("route", route.params.name);
  //   this.profile = route.params.name;
  // },
};
</script>

<style>
.profile-h1 {
  color: orange;
}
.profile-img {
  width: 20rem;
  height: 20rem;
  border-radius: 10%;
}
h3{
margin:0;
}
</style>
