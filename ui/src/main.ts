import SuButton from "./components/button.vue";
import SuHLayout from "./components/layout-h.vue";
import SuVLayout from "./components/layout-v.vue";
import SuMain from "./components/layout-main.vue";
import SuTable from "./components/table.vue";
import SuHLine from "./components/line-h.vue";
export const HLine=SuHLine;
import SuVLine from "./components/line-v.vue";
export const HVine=SuVLine;
import SuCard from "./components/card.vue";
export const Card=SuCard;
import { App } from 'vue'

declare interface IObj {
	// eslint-disable-next-line
    [key: string]: any,
}
export const components={SuButton,SuHLayout,SuVLayout,SuMain,SuTable,SuHLine,SuVLine,SuCard} as IObj;
//export components;
const registComponents=function(app:App):void{
	for(const key in components){
		app.component(components[key].name,components[key]);
	}
}
export default {
	...components,
	components,
	install(app:App):void{
		registComponents(app)
	}
}