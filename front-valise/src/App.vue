<template>
  <the-header title="Dans ma valise"></the-header>
  <the-nav-possession></the-nav-possession>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheNavPossession from "./components/possessions/TheNavPossession.vue";

export default {
  components: {
    TheHeader,
    TheNavPossession,
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");


* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>