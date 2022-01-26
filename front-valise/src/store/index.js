import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';
import possessionsToBeTaken from './possessionsToBeTaken';

const store = createStore({
    state() {
        return {
            possessionsToBeTaken: possessionsToBeTaken,
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