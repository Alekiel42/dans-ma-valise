import { createApp } from 'vue'

import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseTag from './components/UI/BaseTag.vue';

import store from './store/index';


const app = createApp(App);

app.use(store);

app.config.unwrapInjectedRef = true;

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-tag', BaseTag);

app.mount('#app')
