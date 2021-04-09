import { createApp } from 'vue'
import App from './App.vue'
import StarUi from "@/../ui/src/main";
import i18n from "@/lang/index";

const app=createApp(App)
//reg(app);
app.use(i18n).use(StarUi);
app.mount('#app');
