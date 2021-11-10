<template>
  <base-card>
    <form>
      <div class="form-control">
        <label for="possession">Objet</label>
        <input id="possession" name="possession" type="text" />
      </div>

      <fieldset>
        <legend>Où est rangé cet objet ?</legend>
        <div v-for="room in rooms" :key="room" class="answer">
          <input type="radio" name="room" :id="room" :value="room" />
          <label :for="room">{{ room }}</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Quand faut-il prendre cet objet ?</legend>
        <div v-for="tag in tags" :key="tag" class="answer">
          <input type="checkbox" :id="tag" :name="tag" checked />
          <label :for="tag">{{ tag }}</label>
        </div>
      </fieldset>
      <div>
        <base-button type="submit">Ajouter l'objet</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      tags: [
        "1 semaine+",
        "2-3 jours",
        "1 jours",
        "rando",
        "Sport",
        "Hiver",
        "Eté",
        "Camping",
      ],
      rooms: ["chambre", "salle-de-bain", "salon", "cuisine", "entrée"],
    };
  },
};
</script>

<style scoped>
.answer {
  display: inline-flex;
  margin-right: 0.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  font: inherit;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #636363;
  background-color: #dbdbdb;
}

fieldset {
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
}
.form-control {
  margin: 1rem 0;
}
</style>