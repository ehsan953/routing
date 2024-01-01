<template>
  <div class="sidebar">
    <div class="sidebar-title">Simple Sidebar</div>
    <div class="menu">
      <router-link to="/" active-class="active">
        <div class="link-container">Signup</div>
      </router-link>
      <router-link to="/" active-class="active">
        <div class="link-container">Login</div>
      </router-link>
      <router-link to="/" active-class="active">
        <div class="link-container">Logout</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style>
.sidebar{
  padding: 1rem;
}
.sidebar-title {
  background-color: white;
  color: teal;
  padding: 0.2rem;
  padding: 0.5rem;
}
.menu{
  margin: 2rem 0rem;
}
.link-container {
  padding: 0.5rem;
  margin:1rem 0;
  color:white;
}
.link-container:active  {
  background-color: white;
  color: teal;
  
}
.link-container:hover  {
  background-color: white;
  color: teal;
  
}
</style>
