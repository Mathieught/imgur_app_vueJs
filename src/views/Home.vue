<template>
  <div class="home">
    <div class="container">
      <h1 class="t" v-if="!isLog">
        veuillez vous connectez pour voir le contenu
      </h1>
      <card
        v-else
        v-for="(item, index) in data"
        :key="index"
        :id="item.id"
        :title="item.title"
        :img_src="item.image.link"
        :condition="item.image.type === 'video/mp4'"
      ></card>
    </div>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
import axios from "axios";
export default {
  name: "Home",
  components: { card },
  data() {
    return {
      data: [],
    };
  },

  methods: {
    call() {
      var config = {
        method: "get",
        url:
          "https://api.imgur.com/3/gallery/hot/viral/?showViral=true&mature=false",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios(config)
        .then((response) => {
          response.data.data.forEach((item) => {
            //for each de chaque item pour trier si il y une image ou non
            if (item.images) {
              item.image = item.images[0];
            } else {
              item.image = { link: item.link, type: item.type };
            }
            this.data.push(item);
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
      this.call();
    }
  },
};
</script>
