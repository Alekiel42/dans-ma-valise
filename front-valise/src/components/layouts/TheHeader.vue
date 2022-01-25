<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style  lang="scss" scoped>
@import "./../../scss/_variables.scss";

header {
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(to right, $light-color, $dark-color); 
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: white;
  font-family: "Mochiy Pop One", sans-serif;
}
</style>
