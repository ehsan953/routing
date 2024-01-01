<template>
  <router-view></router-view>
  <div class="main">
    <div class="column1">
      <sidebarComponent />
    </div>
    <div class="column2">
      <div class="content">
        <h1 class="login-h1">Login</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde
          placeat aut ad at voluptatum, asperiores consequatur architecto
          debitis accusamus magnam adipisci, blanditiis sit soluta ullam
          voluptatem perspiciatis? Officia, accusamus!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "LoginLogin",
  component: {
    SidebarComponent,
  },
};
</script>

<style>
.login-h1 {
  color: red;
}
</style>
