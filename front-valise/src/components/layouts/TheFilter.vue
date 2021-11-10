<template>
  <base-card>
    <h2>Filter les objets en fonction du type de voyage</h2>
    <div class="filter">
      <base-tag v-for="tag in tags" :key="tag">{{ tag }} </base-tag>
    </div>
  </base-card>
</template>

<script>
export default {
  inject: ["tags"],
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
}
.filter {
  display: flex;
}
</style>