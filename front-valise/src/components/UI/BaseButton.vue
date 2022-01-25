<template>
  <button :class="mode">
    <slot></slot>
    <div></div>
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

button div {
  height: 3px;
  width: 0%;
  background-color: #338ca2;
  transition: all 280ms ease-in-out;
}

button:hover,
button:active {
  background-color: #166174;
}


.flat {
  background-color: transparent;
  color: #338ca2;
}

.flat:hover div {
  width: 100%;
}

.flat:hover,
.flat:active {
  background-color: transparent;
}


</style>