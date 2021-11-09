<template>
  <the-header title="Dans ma valise"></the-header>
  <list-possessions :possessions="possessionsToBeTaken"></list-possessions>
</template>

<script>
import ListPossessions from "./components/possessions/ListPossessions.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    ListPossessions,
    TheHeader,
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
</style>