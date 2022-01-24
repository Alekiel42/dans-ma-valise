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
              ]
        };
    },
    mutations: {
        deletePossession(state, payload) {
            state.possessionsToBeTaken.splice(payload.index, 1);
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
