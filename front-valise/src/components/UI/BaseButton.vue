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

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";


button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: $main-color;
  color: white;
  cursor: pointer;
  border: none;
} 

button div {
  height: 3px;
  width: 0%;
  background-color: $main-color;
  transition: all 280ms ease-in-out;
}

button:hover,
button:active {
  background-color: $dark-color;
}


.flat {
  background-color: transparent;
  color: $dark-color;
}

.flat:hover div {
  width: 100%;
}

.flat:hover,
.flat:active {
  background-color: transparent;
}

.taken {
  background-color: transparent;
  color: rgb(122, 122, 122);
}

.taken:hover {
  background-color: rgb(214, 214, 214);

}



</style>