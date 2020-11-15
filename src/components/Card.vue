<template>
  <div
    class="card"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <div
      @click="fav"
      :class="{ overlayFavHover: isHovering, overlayFav: notHovering }"
    >
      <i class="fas fa-heart white"></i>
    </div>
    <video v-if="condition" :src="img_src" autoplay muted loop></video>
    <img :src="img_src" />
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  name: "Card",
  props: {
    condition: Boolean,
    title: String,
    img_src: String,
    id: String,
  },
  data: function() {
    return {
      isHovering: false,
      notHovering: true,
    };
  },
  methods: {
    // call api pour les favoris
    fav() {
      var config = {
        method: "post",
        url: `https://api.imgur.com/3/album/${this.id}/favorite`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios(config)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
