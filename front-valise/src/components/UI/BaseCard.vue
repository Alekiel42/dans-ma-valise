<template>
  <div :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.taken {
  background-color: #a6e1f0;
}
div {
  border-radius: 0.5rem;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
