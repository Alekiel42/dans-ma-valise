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
  margin: 0.3rem;
  font-family: inherit;
  background-color: $main-color;
  color: white;
  cursor: pointer;
  border: none;

  &:hover,
  &:active {
  background-color: $dark-color;
}
} 

button div {
  height: 3px;
  width: 0%;
  background-color: $main-color;
  transition: all 280ms ease-in-out;
}


.flat {
  background-color: transparent;
  color: $dark-color;

  &:hover,
  &:active {
  background-color: transparent;
  }

  &:hover div {
    width: 100%;
  }

}

.taken {
  background-color: transparent;
  color: rgb(122, 122, 122);

  &:hover {
    background-color: rgb(214, 214, 214);
  }
}

</style>