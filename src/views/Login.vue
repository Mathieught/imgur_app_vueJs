<template>
  <div class="login">
    <a
      class="logBtn"
      href="https://api.imgur.com/oauth2/authorize?client_id=d84f9c1ff31077d&response_type=token"
      >Connexion</a
    >
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  beforeMount() {
    // récupération des données pour la connexion
    let uri = window.location.href.split("#");
    if (uri.length == 2) {
      let vars = uri[1].split("&");
      let getVars = {};
      let tmp = "";
      vars.forEach(function(v) {
        tmp = v.split("=");
        if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
      });
      const tkn = getVars.access_token;
      const username = getVars.account_username;
      if (tkn) {
        localStorage.setItem("token", tkn);
        localStorage.setItem("username", username);
        window.location.href = "/";
      }
    }
  },
  methods: {},
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.logBtn {
  padding: 10px;
  background-color: #64baaa;
  border-radius: 25px;
  color: #fff;
  width: 150px;
  text-align: center;
  text-decoration: none;
  border: 2px solid transparent;
  transition: 0.5s;
}
.logBtn:hover {
  background-color: #fff;
  border: 2px solid #64baaa;
  color: #64baaa;
}
</style>
