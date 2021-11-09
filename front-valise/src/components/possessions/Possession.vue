<template>
  <li>
    <div>
      <header>
        <h3>{{ name }}</h3>
        <button>Pris !</button>
      </header>
      <p>{{ room }}</p>
      <ul>
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <button>Supprimer</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["name", "room", "tags"],
};
</script>