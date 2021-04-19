import { createApp } from 'vue'
import App from './App.vue'
import StarUi from "@/../ui/src/main";
import i18n from "@/lang/index";

createApp(App).use(i18n).use(StarUi).mount('#app');