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
    <component :is="selectedTab" @redirect-list-possessions="setSelectedTab"></component>
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
    };
  },
  provide() {
    return {
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
    this.$store.getters.filterListPossession;
  },
};
</script>