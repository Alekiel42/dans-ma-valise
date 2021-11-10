<template>
  <li>
    <base-card>
      <header>
        <h3>{{ name }}</h3>
        <base-button>Pris !</base-button>
      </header>
      <p>{{ room }}</p>
      <ul class="tag">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <base-button mode="flat" @click="deletePossession(id)"
        >Supprimer cette carte</base-button
      >
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ["deletePossession"],
  props: ["name", "room", "tags", "id"],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

.tag {
  display: flex;
  justify-content: left;
}

.tag li {
  font-size: 0.8rem;
  background-color: aquamarine;
  border-radius: 2rem;
  padding: 0.5rem;
}
</style>