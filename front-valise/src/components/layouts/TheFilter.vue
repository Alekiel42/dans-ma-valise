<template>
  <base-card>
    <h2>Filter les objets en fonction du type de voyage</h2>
    <div class="filter">
      <base-tag
        v-for="tag in tags"
        :key="tag.name"
        :selected="tag.selected"
        @click="changeSelectedTag(tag.name)"
      >
        {{ tag.name }}
      </base-tag>
    </div>
  </base-card>
</template>

<script>
export default {
  inject: ["tags", "changeSelectedTag"],
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