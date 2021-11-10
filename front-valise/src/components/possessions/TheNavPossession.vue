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
// pas sur pour reactive
import * as Vue from "vue";
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
          tags: ["1 semaine+", "1-2 jours"],
        },
        {
          id: "jkhhhh",
          name: "sifflet",
          room: "placard couloir",
          tags: ["rando"],
        },
        {
          id: "ll",
          name: "gourde",
          room: "salon",
          tags: ["1 semaine+", "1-2 jours", "1 jour"],
        },
      ],
      filteredPossessions: [],
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
      possessions: Vue.computed(() => this.filteredPossessions),
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
      this.filterListPossession();
      this.selectedTab = "list-possessions";
    },
    removePossession(possessionId) {
      const possessionIndex = this.possessionsToBeTaken.findIndex(
        (poss) => poss.id === possessionId
      );
      if (possessionIndex !== -1) {
        this.possessionsToBeTaken.splice(possessionIndex, 1);
        this.filterListPossession();
      }
    },
    changeSelectedTag(name) {
      const tagIndex = this.listTags.findIndex((tag) => tag.name === name);
      if (tagIndex !== -1) {
        this.listTags[tagIndex].selected = !this.listTags[tagIndex].selected;
      }
      this.filterListPossession();
    },
    filterListPossession() {
      // changer la structure pour n'avoir qu'un array de tags au lieux d'un array d'objet
      const listTagSelected = [];
      this.listTags.forEach((tag) => {
        if (tag.selected) {
          listTagSelected.push(tag.name);
        }
      });

      const possessionsFiltered = this.possessionsToBeTaken.filter((pos) =>
        pos.tags.some((r) => listTagSelected.indexOf(r) >= 0)
      );

      this.filteredPossessions = possessionsFiltered;
    },
  },
  beforeMount() {
    this.filteredPossessions = [...this.possessionsToBeTaken];
  },
};
</script>