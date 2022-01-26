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
  computed: {
    changeClassTag() {
      return this.selected ? null : "unselected";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";

div {
  font-size: 0.8rem;
  color: white;
  background-color: $main-color;
  border: 1px solid transparent;
  border-radius: 2rem;
  padding: 0.5rem;
  margin: 0.3rem;
  transition: border 400ms ease-in-out;
}

div:hover {
  border: 1px solid $main-color;
}

.unselected {
  color:  $dark-color;
  background-color: transparent;
}
</style>