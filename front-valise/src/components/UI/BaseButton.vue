<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 2rem;
  border: none;
}

button:hover,
button:active {
  background-color: #520b81;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>