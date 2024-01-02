<template>
  <router-view></router-view>
  <div class="main">
    <div class="column1">
      <!-- <SidebarComponent /> -->
      <div class="sidebar">
        <div class="sidebar-title">Sidebar</div>
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
    </div>
    <div class="column2">
      <div class="content">
        <h1 class="h1">Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam
          natus, odit adipisci ab enim veritatis esse consequuntur quidem dolor
          inventore! Eum velit officiis sunt nesciunt provident iste magni
          mollitia!
        </p>
        <ul>
          <li v-for="item in technology" :key="item">{{ item }}</li>
        </ul>
        <ul>
          <li v-for="item in users" :key="item.name">
            {{ item.name }} : {{ item.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- <img class="profile-img" src="../assets/ehsan8.jpeg" alt=""> -->
</template>

<script>
import SidebarComponent from "./SidebarComponent.vue";
export default {
  name: "HomeHome",
  component: {
    SidebarComponent,
  },
  data() {
    return {
      technology: ["java", "PHP", "Node", "HTML", "CSS"],
      users: [
        {
          name: "Ehsan",
          email: "ehsan@gmail.com",
        },
        {
          name: "Awais",
          email: "awais@gmail.com",
        },
        {
          name: "Ahmad",
          email: "ahmad@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
.h1 {
  color: black;
}
/* .profile-img {
  width: 20rem;
  height: 20rem;
  border-radius: 10%;
} */
.main {
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: teal;
}
.column1 {
  height: 100vh;
  /* width: 100vw; */
}
.column2 {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
.content {
  margin: auto;
  width: 50%;
  text-align: center;
}
li {
  text-align: left;
}
</style>
