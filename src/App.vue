<template>
  <div id="app">
    <div id="nav" class="navbar">
      <div class="pages">
        <router-link class="space" to="/">Home</router-link>
        <router-link class="space" to="/fav">Favoris</router-link>
      </div>
      <div class="register">
        <router-link class="space" to="/login" v-if="!isLog">
          Connexion
        </router-link>
        <a class="space" @click="logout" v-else>Déconnexion</a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.location.href = "/";
    },
  },
  computed: {
    isLog: function() {
      return this.$checkStore;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.navbar {
  position: sticky;
  top: 0;
  height: 10vh;
  width: 100%;
  display: grid;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  grid-template-columns: 1fr 1fr;
  padding: 0 25px;
  z-index: 5;
}
.pages {
  display: flex;
  align-items: center;
}
.register {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.space {
  margin: 20px;
  color: #000;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 20px;
  color: #64baaa;
  transition: color 0.5s;
  cursor: pointer;
}
.space:hover {
  color: #c4fcf0;
}
.container {
  margin: 0 auto;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
}
.card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  max-height: 400px;
  min-height: 300px;
  position: relative;
}
.card img,
.card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  width: 100%;
  background-color: #0000007a;
  padding: 15px;
  text-align: center;
}
.overlayFav {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000007a;
  transition: opacity 0.5s;
  opacity: 0;
  z-index: 1;
}
.overlayFavHover {
  opacity: 1;
}
.white {
  color: #fff;
  font-size: 60px;
}
.t {
  grid-column: span 3;
  text-align: center;
}
@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
