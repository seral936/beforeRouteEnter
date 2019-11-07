<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Profil</router-link>| -->
      <!-- <router-link to="/login">Login</router-link>| -->
      <p v-if="profil" @click="disconnectIt">
        LogOut
      </p>



    </div>
    <router-view />

  
  </div>
</template>
<script>
import Router from "./router";

export default {
  data() {
    return {
      profil: null
    };
  },
  methods: {
    disconnectIt() {
      localStorage.removeItem("profil");
      Router.push({ name: "login" });
      window.location.reload()
    }
  },
  created() {
    this.profil = (localStorage.getItem("profil"))?true:false

    
    // window.location.reload()
  
  },
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
span {
  color: red;
  cursor: pointer;
}
</style>
