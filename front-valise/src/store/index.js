import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';

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
      mutations: rootMutations,
      getters: rootGetters,
  });

  export default store;