<template>
  <base-card>
    <h2>Filter les objets en fonction du type de voyage</h2>
    <div class="filter">
      <base-tag
        v-for="tag in this.$store.state.listTags"
        :key="tag.name"
        :selected="tag.selected"
        @click="changeSelectedTag(tag.name)" 
        class="filter_tag"
      >
        {{ tag.name }}
      </base-tag>
    </div>
  </base-card>
</template>

<script>
export default {
  methods: {
    changeSelectedTag(name) {
      this.$store.commit({
        type: 'changeStatusTag',
        name: name
      });
      this.$store.getters.filterListPossession;
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 1rem;
}

.filter {
  display: flex;
}

.filter_tag {
  cursor: pointer;
}
</style>