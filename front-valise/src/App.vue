<template>
  <ul></ul>
</template>

<script>
export default {
  data() {
    return {
      itemToBeTaken: [
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