//布局
import SuHLayout from "./components/layout-h.vue";
import SuVLayout from "./components/layout-v.vue";
import SuMain from "./components/layout-main.vue";
import SuTable from "./components/table.vue";
import SuHLine from "./components/line-h.vue";
import SuVLine from "./components/line-v.vue";
import SuCard from "./components/card.vue";
//表单
import SuInput from "./components/input.vue";
import SuSelect from "./components/select.vue";
import SuButton from "./components/button.vue";

import ViewControl from "./components/view-control.vue";

import { App } from 'vue'

declare interface IObj {
	// eslint-disable-next-line
	[key: string]: any,
}
export const components={SuHLayout,SuVLayout,SuMain,SuHLine,SuVLine,SuCard,SuTable,SuButton,SuInput,SuSelect,ViewControl} as IObj;
//export components;
const registComponents=function(app:App):void{
	for(const key in components){
		app.component(components[key].__o.name,components[key]);
	}
}
export default {
	...components,
	components,
	install(app:App):void{
		registComponents(app)
	}
}