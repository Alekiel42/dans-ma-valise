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
    </form>
  </base-card>
</template>

<script>
export default {
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
</style>