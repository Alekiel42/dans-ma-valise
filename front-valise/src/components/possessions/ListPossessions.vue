<template>
  <the-filter></the-filter>
  <ul>
    <possession-item
      v-for="possession in possessionsNotTakenYet"
      :key="possession.id"
      :id="possession.id"
      :name="possession.name"
      :room="possession.room"
      :tags="possession.tags"
      :taken="false"
    ></possession-item>
  </ul>
  <ul>
    <possession-item
      v-for="possession in possessionsTaken"
      :key="possession.id"
      :id="possession.id"
      :name="possession.name"
      :room="possession.room"
      :tags="possession.tags"
      :taken="true"
    ></possession-item>
  </ul>
</template>

<script>
import PossessionItem from "./PossessionItem.vue";
import TheFilter from "./../layouts/TheFilter.vue";

export default {
  components: {
    PossessionItem,
    TheFilter,
  },
  computed: {
    possessionsNotTakenYet() {
      return this.$store.getters.possessionsNotTakenYet;
    },
    possessionsTaken() {
      return this.$store.getters.possessionsTaken;
    },

  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
