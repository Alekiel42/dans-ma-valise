<template>
  <base-dialog v-if="inputIsInvalid" title="Les champs ne sont pas complets">
    <template #default>
      <p>Outch un champ ou plus n'a pas été rempli.</p>
      <p>Veuillez relire le formulaire.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="possession">Nom de l'objet</label>
        <input
          id="possession"
          name="possession"
          type="text"
          ref="possessionInput"
        />
      </div>

      <fieldset>
        <legend>Où est rangé cet objet ?</legend>
        <div v-for="room in rooms" :key="room" class="answer">
          <input
            type="radio"
            name="room"
            :id="room"
            :value="room"
            v-model="roomPicked"
          />
          <label :for="room">{{ room }}</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Quand faut-il prendre cet objet ?</legend>
        <div v-for="tag in tags" :key="tag.name" class="answer">
          <input
            type="checkbox"
            :id="tag.name"
            :value="tag.name"
            v-model="tagChecked"
          />
          <label :for="tag.name">{{ tag.name }}</label>
        </div>
      </fieldset>
      <div>
        <base-button type="submit">Ajouter l'objet</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      rooms: ["chambre", "salle-de-bain", "salon", "cuisine", "entrée"],
      tagChecked: [],
      roomPicked: "",
      inputIsInvalid: false,
    };
  },
  inject: ["tags"],
  emits: ['redirect-list-possessions'],
  methods: {
    submitData(event) {
      const enteredPossession = this.$refs.possessionInput.value;
      const enteredRoom = this.roomPicked;
      const enteredTags = this.tagChecked;

      if (
        enteredPossession.trim() === "" ||
        enteredRoom === "" ||
        enteredTags.length === 0
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addPossession(enteredPossession, enteredRoom, enteredTags);

      event.target.reset();
    },
     addPossession(name, room, tags) {
      const newPossession = {
        id: new Date().toISOString(),
        name,
        room,
        tags,
        taken: false,
      };
      this.$store.commit({
        type: 'addPossession',
        possession: newPossession
      });
      this.$store.getters.filterListPossession;

      this.$emit('redirect-list-possessions', 'list-possessions');
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";


.answer {
  display: inline-flex;
  margin-right: 0.5rem;
}

label {
  display: block;
}

input {
  font: inherit;
  border: 1px solid $light-color;
}

input:focus,
textarea:focus {
  outline: none;
  border: 2px solid $light-color;
}

fieldset {
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  border: 2px solid $light-color;
}

.form-control {
  margin: 1rem 0;
}
</style>