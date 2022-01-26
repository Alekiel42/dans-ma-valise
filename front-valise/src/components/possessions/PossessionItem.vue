<template>
  <base-dialog v-if="dialogIsDisplay" title="Suppression">
    <template #default>
      <p>Voulez-vous vraiment supprimer l'objet "{{ this.name }}" ?</p>
    </template>
    <template #actions>
      <base-button @click="deletePossession(id)">Oui</base-button>
      <base-button @click="cancelDelete">Non</base-button>
    </template>
  </base-dialog>
  <li>
    <base-card :mode="addTakenPossessionStyle">
      <header>
        <div>
          <h2>{{ name }}</h2>
          <p class="room">{{ room }}</p>
        </div>
        <base-button @click="handlePossessionsTaken(id)" :mode="addTakenPossessionStyle">
          {{ taken ? "A prendre" : "Pris ! " }}
        </base-button>
      </header>
      <div class="tag" v-if="!taken">
        <base-tag v-for="tag in tags" :key="tag">{{ tag }}</base-tag>
      </div>
      <base-button :mode="this.taken ? 'taken' : 'flat'" @click="confirmDelete()"
        >Supprimer cette carte</base-button
      >
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ["handlePossessionsTaken"],
  props: ["name", "room", "tags", "id", "taken"],
  emits: ["filter-possession"],
  data() {
    return {
      dialogIsDisplay: false,
    }
  },
  methods: {
    confirmDelete() {
      this.dialogIsDisplay = true;

    },
    cancelDelete() {
      this.dialogIsDisplay = false;
    },
    deletePossession(possessionId) {
      const possessionIndex = this.$store.state.possessionsToBeTaken.findIndex(
        (poss) => poss.id === possessionId
      );
      if (possessionIndex !== -1) {
          this.$store.commit({
              type: 'deletePossession',
              index: possessionIndex
            });
            
          this.$store.getters.filterListPossession;
      }
       this.dialogIsDisplay = false;
    }
  },
  computed: {
    addTakenPossessionStyle() {
      return this.taken ? "taken" : "totake";
    },
  },
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

h2 {
  font-size: 1.25rem;
  margin: 0;
}

p {
  margin: 0.5rem 0;
}

.room {
  color: rgb(59, 59, 59);
  font-size: 0.9rem;
  font-style: italic;
  margin: 0.1rem 0;
}

.tag {
  display: flex;
  justify-content: left;
}
</style>