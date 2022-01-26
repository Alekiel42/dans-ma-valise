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

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";


  div {
    border-radius: 0.5rem;
    box-shadow: 0 8px 8px $shadow-color;
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
  }

.totake {
  box-shadow: none;
  position: relative;
  box-sizing: border-box;

  $border: 3px;
  background: white;
  background-clip: padding-box; 
  border: solid $border transparent; 
  border-radius: 1em;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -$border; 
    border-radius: inherit; 
    background: linear-gradient(to right, $light-color, $dark-color);
  }
}

.taken {
  color: $unselected-color-dark;
  border: 3px solid $unselected-color-light;
  box-shadow: none;
}


</style>
