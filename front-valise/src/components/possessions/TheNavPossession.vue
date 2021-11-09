<template>
  <base-card>
    <base-button @click="setSelectedTab('list-possessions')"
      >Affaire à prendre</base-button
    >
    <base-button @click="setSelectedTab('add-possession')"
      >Ajouter un élément</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>


<script>
import ListPossessions from "./ListPossessions.vue";
import AddPossession from "./AddPossession.vue";

export default {
  components: {
    ListPossessions,
    AddPossession,
  },
  data() {
    return {
      selectedTab: "possessions-to-take",
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
  provide() {
    return {
      possessions: this.possessionsToBeTaken,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>