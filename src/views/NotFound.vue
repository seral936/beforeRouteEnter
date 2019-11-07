<template>
  <div>
    <div class="ctn">
      <h1>404 NOT FOUND</h1>
      <p @click="backToHome">Retour</p>
    </div>
  </div>
</template>

<script>
import Router from "../router";
export default {
  methods: {
    backToHome: function() {
      if (localStorage.getItem("profil")) {
        console.log("ok");
        Router.push({ name: "Profil" });
      } else {
        console.log("non");
        Router.push({ name: "login" });
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}

p {
  color: cadetblue;
  cursor: pointer;
}
.ctn {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
