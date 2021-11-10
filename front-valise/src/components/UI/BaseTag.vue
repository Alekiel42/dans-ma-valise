<template>
  <div :class="changeClassTag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: true,
    },
  },
  //todo change style si sleected ou pas
  //todo computed si styke change, class a mettre
  computed: {
    changeClassTag() {
      console.log("this selected", this.selected);
      return this.selected ? null : "unselected";
    },
  },
};
</script>

<style scoped>
div {
  font-size: 0.8rem;
  color: white;
  background-color: #338ca2;
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 0.3rem;
}

.unselected {
  color: #338ca2;
  background-color: white;
}
</style>