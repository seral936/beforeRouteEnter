<template>
  <div>
    <h1>Page Admin</h1>
    <h1>{{getLocalS.email}}</h1>

    <!-- -----------CLAIRE DEBUT--------  -->
    <select @change="onChange($event)" >
      <option value>Selectionnez votre statut</option>
      <option value="nounou">nounou</option>
      <option value="maitre">maitre</option>
    </select>



    <div v-if="nounou">
      <nounou></nounou>
    </div>

  
    <div v-if="maitre">
      <maitre></maitre>
    </div>



    <!-- -----------CLAIRE FIN --------  -->




  </div>
</template>
<script>
import nounou from "../components/nounou";
import maitre from "../components/maitre";
export default {
  components: {
    nounou,
    maitre
  },

  data() {
    return {
      nounou: false,
      maitre: false,

      getLocalS: JSON.parse(localStorage.getItem("profil"))
    };
  },

  methods: {
    onChange(event) {
      if (event.target.value == "nounou") {
        this.nounou = true;
        this.maitre = false;
      } else if (event.target.value == "maitre") {
        this.maitre = true;
        this.nounou = false;
      } else if (event.target.value == "") {
        this.maitre = false;
        this.nounou = false;
      } else {
        return;
      }
    }
  },

  beforeRouteEnter: (to, from, next) => {


    let getLocalS = JSON.parse(localStorage.getItem("profil"));
    if (!localStorage.getItem("profil")) {
      next("/login");
    } else if (localStorage.getItem("profil") && getLocalS.role === 1) {
      next();
    } else if (
      (localStorage.getItem("profil") && getLocalS.role === null) ||
      getLocalS.role === 0
    ) {
      next("/");
    } else {
      next("/login");
    }
  }
};
</script>
<style scoped>
</style>
