<template>
  <div class="home">
    <div class="container">
      <h1 class="t" v-if="!isLog">
        veuillez vous connectez pour voir le contenu
      </h1>
      <h1 class="t" v-else>Favoris de : {{ username }}</h1>
      <cardFav
        v-for="(item, index) in favoris"
        :key="index"
        :id="item.id"
        :title="item.title"
        :img_fav="item.cover"
        :img_type="item.type"
        :img_src="item.image.link"
      ></cardFav>
    </div>
  </div>
</template>

<script>
import cardFav from "@/components/CardFav.vue";
import axios from "axios";
export default {
  name: "Fav",
  components: { cardFav },
  data() {
    return {
      favoris: [],
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    call() {
      var config = {
        method: "get",
        url: `https://api.imgur.com/3/account/${localStorage.getItem(
          "username"
        )}/favorites/`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios(config)
        .then((response) => {
          this.favoris = response.data.data;
          //for each de chaque item pour trier si il y une image ou non
          this.favoris.forEach((item) => {
            if (item.images) {
              item.image = item.images[0];
            } else {
              item.image = { link: item.link, type: item.type };
            }
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  computed: {
    isLog: function() {
      // check si l'utilisateur est connecté a l'aide d'un prototype vue
      return this.$checkStore;
    },
  },
  mounted() {
    if (this.$checkStore) {
      // execution de la requete axios
      this.call();
    }
  },
};
</script>
