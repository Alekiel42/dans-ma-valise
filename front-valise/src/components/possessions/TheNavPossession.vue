<template>
  <base-card>
    <base-button
      @click="setSelectedTab('list-possessions')"
      :mode="listPosButtonMode"
      >Affaire à prendre</base-button
    >
    <base-button
      @click="setSelectedTab('add-possession')"
      :mode="addPosButtonMode"
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
          hidden: false,
        },
        {
          id: "jkhhhh",
          name: "sifflet",
          room: "placard couloir",
          tags: ["rando"],
          hidden: false,
        },
        {
          id: "ll",
          name: "gourde",
          room: "salon",
          tags: ["1 semaine", "2-3 jours", "1 jour"],
          hidden: false,
        },
      ],
      listTags: [
        {
          name: "1 semaine+",
          selected: true,
        },
        {
          name: "1-2 jours",
          selected: true,
        },
        {
          name: "1 jour",
          selected: true,
        },
      ],
    };
  },
  provide() {
    return {
      changeSelectedTag: this.changeSelectedTag,
      possessions: this.possessionsToBeTaken,
      addPossession: this.addPossession,
      deletePossession: this.removePossession,
      tags: this.listTags,
    };
  },
  computed: {
    listPosButtonMode() {
      return this.selectedTab === "list-possessions" ? null : "flat";
    },
    addPosButtonMode() {
      return this.selectedTab === "add-possession" ? null : "flat";
    },
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
        hidden: false,
      };
      this.possessionsToBeTaken.unshift(newPossession);
      this.selectedTab = "list-possessions";
    },
    removePossession(possessionId) {
      const possessionIndex = this.possessionsToBeTaken.findIndex(
        (poss) => poss.id === possessionId
      );
      if (possessionIndex !== -1) {
        this.possessionsToBeTaken.splice(possessionIndex, 1);
      }
    },
    changeSelectedTag(name) {
      // ensuite il faudra réaffiher liste en fct des tag selected
      const tagIndex = this.listTags.findIndex((tag) => tag.name === name);
      if (tagIndex !== -1) {
        this.listTags[tagIndex].selected = !this.listTags[tagIndex].selected;
      }
    },
  },
};
</script>