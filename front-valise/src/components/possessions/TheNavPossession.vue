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
        {
          name: "été",
          selected: true,
        },
        {
          name: "hiver",
          selected: true,
        },
        {
          name: "camping",
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
      handlePossessionsTaken: this.handlePossessionsTaken,
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
        taken: false,
      };
      this.$store.commit({
        type: 'addPossession',
        possession: newPossession
      });
      this.filterListPossession();
      this.selectedTab = "list-possessions";
    },
    removePossession(possessionId) {
      const possessionIndex = this.$store.state.possessionsToBeTaken.findIndex(
        (poss) => poss.id === possessionId
      );
      if (possessionIndex !== -1) {
          this.$store.commit({
            type: 'deletePossession',
            index: possessionIndex
          });
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

      const possessionsFiltered = this.$store.state.possessionsToBeTaken.filter((pos) =>
        pos.tags.some((r) => listTagSelected.indexOf(r) >= 0)
      );

      possessionsFiltered.sort((a, b) => (a.room < b.room ? -1 : 1));

      this.filteredPossessions = possessionsFiltered;
    },
    handlePossessionsTaken(id) {
      const posIndex = this.$store.state.possessionsToBeTaken.findIndex(
        (pos) => pos.id === id
      );
      if (posIndex !== -1) {
        this.$store.commit({
          type: 'changeTakenValue',
          index: posIndex
        })
      }
      //todo refilter?
    },
  },
  beforeMount() {
    this.filteredPossessions = [...this.$store.state.possessionsToBeTaken];
    this.filterListPossession();
  },
};
</script>