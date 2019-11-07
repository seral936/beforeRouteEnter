<template>
  <div>
    <h1>Page user</h1>
    <h2>{{profil}}</h2>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: "home",

  data() {
    return {
      user: "",
      display: false,
      profil: "",
      getLocalStorage: localStorage.getItem("profil")
      // getLocalS : JSON.parse(localStorage.getItem("profil"))
    };
  },
  methods: {
    getProfil() {
      console.log("test: ", JSON.parse(this.getLocalStorage));

      this.profil = localStorage.getItem("profil")
        ? "Bienvenue " + JSON.parse(this.getLocalStorage).email
        : "";
    }
  },
  created() {
    this.getProfil();
  },

  beforeRouteEnter: (to, from, next) => {
    let getLocalS = JSON.parse(localStorage.getItem("profil"));
    if (!localStorage.getItem("profil")){
    next("/login");
    } else if (getLocalS.role === 0 || getLocalS.role === null) {
      next();
    }else{
      return
    }
  }
};
</script>
