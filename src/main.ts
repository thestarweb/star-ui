import { createApp } from "vue";
import App from "./App.vue";
import StarUi from "@/../ui/src/main";
import i18n from "@/lang/index";
import router from "@/router"


createApp(App).use(i18n).use(StarUi).use(router).mount('#app');