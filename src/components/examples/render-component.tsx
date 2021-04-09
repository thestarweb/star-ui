import { Options, Vue } from 'vue-class-component';
import { VNode, h } from "vue"


import { template, example } from "./type.d";

@Options({
	props: {
		example:{
			type:Object,
			required:true
		}
	}
})
export default class RenderComponent extends Vue {
	private example!:example;

	//虚拟组件方法
	public get componentMethods():IObj{
		return {}
	}
	//虚拟组件数据
	public componentData:IObj={};
	//虚拟组件this指向
	public componentThis=new Proxy({},{
		get:(obj, prop)=>{
			if(prop in this.componentMethods){
				return this.componentMethods[prop as string];
			}
			return this.componentData[prop as string];
		},
		set:(obj, prop, value)=>{
			this.componentData[prop as string]=value;
			return true;
		}
	}) as IObj;

	//解析表达式（仅限简单表达式）
	private analysis(expression:string){
		let data=this.componentThis;
		expression.split(".").forEach((itemKey)=>{
			data=data[itemKey];
		})
		return data;
	}
	private renderComponent(item:template):VNode{
		const props:IObj={};
		if(item.props){
			for(let key in item.props){
				let value=item.props[key];
				if(key.startsWith(":")||key.startsWith("v-bind:")){
					key=key.substr(key.indexOf(":")+1);
					if(typeof value == "string"){
						value=this.analysis(value);
					}
				}else if(key.startsWith("@")||key.startsWith("v-on:")){
					//
				}else if(key=="v-model"){
					key="value";
					// eslint-disable-next-line
					props["onInput"]=(function(this:RenderComponent,value:string,inputValue:any){
											let data=this.componentData;
											const path=value.split(".");
											const last=path.pop();
											path.forEach((itemKey)=>{
												data=data[itemKey];
											});
											data[last as string]=inputValue;
										}).bind(this,value);
					value=this.analysis(value);
				}
				props[key]=value;
			}
		}
		const solt:IObj={};
		if(item.slot){
			item.slot.forEach((s)=>{
				solt[s.name]=s.data.map((template)=>{
					if(template.isText){
						return template.data;
					}
					return this.renderComponent(template);
				})
			});
		}
		return h(item.component,props,solt)
	}
	public render():VNode{
		return this.renderComponent(this.example.template);
	}
}