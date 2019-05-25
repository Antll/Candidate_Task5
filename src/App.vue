<template>
  <div id="app">
    <ul class="nav">
      <li><router-link to="/">To Home</router-link></li>
      <li><router-link to="register">Sign Up</router-link></li>
      <li><router-link to="login">Log In</router-link></li>
      <li><router-link to="usertable">User Table</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {

    };
  },
};
</script>

<style>

body {
  background-color: #333333;
}

.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333333;
}

.nav li {
  float: left;
}

.nav li a {
  color: #FFFFFF;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
}

.nav li a:hover {
  background-color: #111111;
}
</style>
