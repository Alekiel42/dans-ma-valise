<template>
  <the-filter></the-filter>
  <ul>
    <possession-item
      v-for="possession in possessions"
      :key="possession.id"
      :id="possession.id"
      :name="possession.name"
      :room="possession.room"
      :tags="possession.tags"
    ></possession-item>
  </ul>
</template>

<script>
import PossessionItem from "./PossessionItem.vue";
import TheFilter from "./../layouts/TheFilter.vue";

export default {
  inject: ["possessions"],
  components: {
    PossessionItem,
    TheFilter,
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
