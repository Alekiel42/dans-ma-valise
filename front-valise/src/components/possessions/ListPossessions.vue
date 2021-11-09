<template>
  <ul>
    <Possession
      v-for="possession in possessions"
      :key="possession.name"
      :name="possession.name"
      :room="possession.room"
      :tags="possession.tags"
    ></Possession>
  </ul>
</template>

<script>
import Possession from "./Possession.vue";

export default {
  props: ["possessions"],
  components: {
    Possession,
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
