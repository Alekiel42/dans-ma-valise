<template>
  <ul>
    <Possession
      v-for="possession in possessionsToBeTaken"
      :key="possession.name"
      :name="possession.name"
      :room="possession.room"
      :tags="possession.tags"
    ></Possession>
  </ul>
</template>

<script>
import Possession from "./components/possessions/Possession.vue";
export default {
  components: {
    Possession,
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