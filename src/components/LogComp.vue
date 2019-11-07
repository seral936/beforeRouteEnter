<template>
  <div>
    <div class="bold-line"></div>
    <div class="container">
      <div v-if="display" class="window">
        <div class="overlay"></div>
        <div class="content">
          <div class="welcome">LOG IN</div>
          <form class="input-fields" action="/login" method="post" v-on:submit.prevent="connectIt">
            <input
              type="email"
              name="email"
              placeholder="email"
              v-model="email"
              class="input-line full-width"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              v-model="password"
              class="input-line full-width"
            />
            <button class="ghost-round full-width" type="submit">Se connecter</button>
          </form>
          <div @click="signIn" class="spacing">Créer un Compte</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Router from "../router";
import { eventBus } from "../main";

export default {
  name: "LogComp",
  data() {
    return {
      email: null,
      password: null,
      showLogIn: true,
      showLogOut: false,
      user: "",
      display: true,
      displayMyBro: true
    };
  },
  methods: {
    connectIt() {
      axios
        .post("http://localhost:5000/login/log", {
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          res.data.forEach(item => {
            if (
              this.email === item.mail_user &&
              this.password === item.password_user
            ) {
              localStorage.setItem(
                "profil",
                JSON.stringify({ email: item.mail_user, role: item.admin })
              );
              let getLocalS = JSON.parse(localStorage.getItem("profil"));
              getLocalS.role === null || getLocalS.role === 0
                ? Router.push({ name: "Profil" })
                : Router.push({ name: "profilAdmin" });
              window.location.reload();
            } else {
              alert("Identifiant ou Mot de passe incorrect");
              Router.push({ name: "login" });
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    signIn() {
      Router.push({ name: "SignIn" });
    }
  }
};
</script>
 <style scoped>
body,
html {
  margin: 0;
  height: 100%;
}
input {
  border: none;
}
button:focus {
  outline: none;
}
::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.65);
}
::-webkit-input-placeholder .input-line:focus + ::input-placeholder {
  color: #fff;
}
.highlight {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  cursor: pointer;
  transition: color 0.2s ease;
}
.highlight:hover {
  color: #fff;
  transition: color 0.2s ease;
}
.spacing {
  cursor: pointer;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 120px;
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.65);
}
.input-line:focus {
  outline: none;
  border-color: #fff;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.ghost-round {
  cursor: pointer;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.65);
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  font-size: 19px;
  font-size: 1.2rem;
  font-family: roboto;
  font-weight: 300;
  line-height: 2.5em;
  margin-top: auto;
  margin-bottom: 25px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.ghost-round:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.input-line {
  background: none;
  border-radius: 25px;
  margin-bottom: 10px;
  line-height: 2.4em;
  color: #fff;
  font-family: roboto;
  font-weight: 300;
  letter-spacing: 0.2rem;
  font-size: 19px;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.65);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  text-align: center;
}
.full-width {
  width: 100%;
}
.input-fields {
  margin-top: 25px;
}
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
}
.content {
  padding-left: 25px;
  padding-right: 25px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  z-index: 5;
}
.welcome {
  font-weight: 200;
  margin-top: 75px;
  text-align: center;
  font-size: 40px;
  font-size: 2.5rem;
  letter-spacing: 0px;
  letter-spacing: 0.05rem;
}
.subtitle {
  text-align: center;
  line-height: 1em;
  font-weight: 100;
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
}
.menu {
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 50px;
}
.window {
  margin-top: 25px;
  z-index: 100;
  color: #fff;
  font-family: roboto;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: 450px;
  width: 360px;
  background: #fff;
}
.overlay {
  background: -webkit-linear-gradient(#8ca6db, #b993d6);
  background: linear-gradient(#8ca6db, #b993d6);
  opacity: 0.85;
  filter: alpha(opacity=85);
  height: 450px;
  position: absolute;
  width: 360px;
  z-index: 1;
}
.bold-line {
  background: #ffffff;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 100%;
  height: 360px;
  z-index: 1;
  opacity: 0.1;

  background-size: cover;
}
@media (max-width: 500px) {
  .window {
    width: 100%;
    height: 100%;
  }
  .overlay {
    width: 100%;
    height: 100%;
  }
}
</style>


