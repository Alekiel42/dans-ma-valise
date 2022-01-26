import { createApp } from 'vue'
import { createStore } from 'vuex';

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseTag from './components/UI/BaseTag.vue';

const store = createStore({
    state() {
        return {
            possessionsToBeTaken: [
                {
                  id: "1",
                  name: "Moustiquaire",
                  room: "entrée",
                  tags: ["camping"],
                  taken: false,
                },
                {
                  id: "2",
                  name: "sifflet",
                  room: "entrée",
                  tags: ["camping"],
                  taken: false,
                },
                {
                  id: "3",
                  name: "gourde",
                  room: "salon",
                  tags: ["1 semaine+", "1-2 jours", "1 jour", "camping"],
                  taken: false,
                },
                {
                  id: "4",
                  name: "maillot",
                  room: "chambre",
                  tags: ["1 semaine+", "1-2 jours", "1 jour", "été"],
                  taken: false,
                },
                {
                  id: "5",
                  name: "parfum",
                  room: "salle-de-bain",
                  tags: ["1 semaine+", "1-2 jours"],
                  taken: false,
                },
                {
                  id: "6",
                  name: "brosse à dent",
                  room: "salle-de-bain",
                  tags: ["1 semaine+", "1-2 jours"],
                  taken: false,
                },
                {
                  id: "7",
                  name: "doudoune",
                  room: "entrée",
                  tags: ["hiver"],
                  taken: false,
                },
              ],
              listTags: [
                {
                  name: "1 semaine+",
                  selected: true,
                },
                {
                  name: "1-2 jours",
                  selected: true,
                },
                {
                  name: "1 jour",
                  selected: true,
                },
                {
                  name: "été",
                  selected: true,
                },
                {
                  name: "hiver",
                  selected: true,
                },
                {
                  name: "camping",
                  selected: true,
                },
              ],
              rooms: ["chambre", "salle-de-bain", "salon", "cuisine", "entrée"],
        };
    },
    mutations: {
        deletePossession(state, payload) {
            state.possessionsToBeTaken.splice(payload.index, 1);
        },
        addPossession(state, payload) {
            state.possessionsToBeTaken.unshift(payload.possession);
        },
        changeTakenValue(state, payload) {
            state.possessionsToBeTaken[payload.index].taken = !state.possessionsToBeTaken[payload.index].taken
        },
    },
    getters: {
        filterListPossession(state) {
          const listTagSelected = [];
          state.listTags.forEach((tag) => {
            if (tag.selected) {
              listTagSelected.push(tag.name);
            }
          });
    
          const possessionsFiltered = state.possessionsToBeTaken.filter((pos) =>
            pos.tags.some((r) => listTagSelected.indexOf(r) >= 0)
          );
    
          possessionsFiltered.sort((a, b) => (a.room < b.room ? -1 : 1));

          return possessionsFiltered;
        },
        possessionsNotTakenYet(_, getters) {
          return getters.filterListPossession.filter((pos) => !pos.taken);
        },
        possessionsTaken(_, getters) {
          return getters.filterListPossession.filter((pos) => pos.taken);
        }
    }

});

const app = createApp(App);

app.use(store);

app.config.unwrapInjectedRef = true;

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-tag', BaseTag);

app.mount('#app')
