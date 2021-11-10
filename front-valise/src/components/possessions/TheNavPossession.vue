<template>
  <base-card>
    <base-button @click="setSelectedTab('list-possessions')"
      >Affaire à prendre</base-button
    >
    <base-button @click="setSelectedTab('add-possession')"
      >Ajouter un élément</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      selectedTab: "list-possessions",
      possessionsToBeTaken: [
        {
          id: "jhkj",
          name: "ordinateur",
          room: "chambre",
          tags: ["1 semaine", "2-3 jours"],
        },
        {
          id: "jkhhhh",
          name: "sifflet",
          room: "placard couloir",
          tags: ["rando"],
        },
        {
          id: "jhg",
          name: "huile",
          room: "salle-de-bain",
          tags: ["1 semaine", "2-3 jours"],
        },
        {
          id: "ll",
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
      addPossession: this.addPossession,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addPossession(name, room, tags) {
      const newPossession = {
        id: new Date().toISOString(),
        name,
        room,
        tags,
      };
      this.possessionsToBeTaken.unshift(newPossession);
      this.selectedTab = "list-possessions";
    },
  },
};
</script>