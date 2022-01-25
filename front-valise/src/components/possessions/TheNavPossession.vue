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
  <!--
  <keep-alive>
    <component :is="selectedTab" @filter-possession="filterListPossession"></component>
  </keep-alive>
  -->
  <list-possessions @filter-possession="filterListPossession"></list-possessions>
</template>


<script>
import * as Vue from "vue";
import ListPossessions from "./ListPossessions.vue";
// import AddPossession from "./AddPossession.vue";

export default {
  components: {
    ListPossessions,
    // AddPossession,
  },
  data() {
    return {
      selectedTab: "list-possessions",
      //todo filterdpossession dans store
      //todo listTag dans store
    };
  },
  provide() {
    return {
      changeSelectedTag: this.changeSelectedTag,
      possessions: Vue.computed(() => this.filteredPossessions),
      tags: this.$store.state.listTags,
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
    changeSelectedTag(name) {
      const tagIndex = this.$store.state.listTags.findIndex((tag) => tag.name === name);
      if (tagIndex !== -1) {
        this.$store.state.listTags[tagIndex].selected = !this.$store.state.listTags[tagIndex].selected;
      }
      this.$store.getters.filterListPossession;
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
    this.$store.getters.filterListPossession;
  },
};
</script>