<template>
  <list-possessions :possessions="possessionsToBeTaken"></list-possessions>
</template>

<script>
import ListPossessions from "./components/possessions/ListPossessions.vue";
export default {
  components: {
    ListPossessions,
  },
  data() {
    return {
      possessionsToBeTaken: [
        {
          name: "ordinateur",
          room: "chambre",
          tags: ["1 semaine", "2-3 jours"],
        },
        { name: "sifflet", room: "placard couloir", tags: ["rando"] },
        {
          name: "huile",
          room: "salle-de-bain",
          tags: ["1 semaine", "2-3 jours"],
        },
        {
          name: "gourde",
          room: "salon",
          tags: ["1 semaine", "2-3 jours", "1 jour"],
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

h1 {
  font-family: "Mochiy Pop One", sans-serif;
}
</style>