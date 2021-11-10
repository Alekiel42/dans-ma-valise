<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #338ca2;
  color: white;
  cursor: pointer;
  border: none;
}

button:hover,
button:active {
  background-color: #166174;
}

.flat {
  background-color: transparent;
  color: #338ca2;
}

.flat:hover,
.flat:active {
  background-color: #a7ecfd;
}
</style>