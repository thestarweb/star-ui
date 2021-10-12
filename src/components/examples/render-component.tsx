import { Options, Vue } from 'vue-class-component';
import { VNode, h, resolveComponent } from "vue"


import { template, example } from "./type.d";

const HTMLEL = ["div","span","p"];

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

	created():void{
		if(this.example.data){
			this.componentData=JSON.parse(JSON.stringify(this.example.data));
		}
	}

	//虚拟组件方法
	public get componentMethods():IObj{
		return {}
	}
	//虚拟组件数据
	public componentData:IObj={};

	//解析表达式（仅限简单表达式）
	private analysis(expression:string,locaVar:Record<string, unknown>={}){
		// eslint-disable-next-line
		let data:any={
			...this.example.data,
			...this.componentData,
			...this.componentMethods,
			...locaVar,
		};
		expression.split(".").forEach((itemKey)=>{
			data=data[itemKey];
		})
		return data;
	}
	private renderComponent(item:template,locaVar:Record<string, unknown>={}):VNode{
		const props:IObj={};
		if(item.props){
			for(let key in item.props){
				let value=item.props[key];
				if(key.startsWith(":")||key.startsWith("v-bind:")){
					key=key.substr(key.indexOf(":")+1);
					if(typeof value == "string"){
						value=this.analysis(value, locaVar);
					}
				}else if(key.startsWith("@")){
					props["on-"+key.substr(1)]=value;
				}else if(key.startsWith("v-on:")){
					props["on-"+key.substr(5)]=value;
				}else if(key=="v-model"){
					key="modelValue";
					props["onUpdate:modelValue"]=(function(this:RenderComponent,value:string,inputValue:unknown){
											let data=this.componentData;
											const path=value.split(".");
											const last=path.pop();
											path.forEach((itemKey)=>{
												data=data[itemKey];
											});
											data[last as string]=inputValue;
										}).bind(this,value);
					value=this.analysis(value, locaVar);
				}
				props[key]=value;
			}
		}
		const solt:IObj={};
		if(item.slot){
			item.slot.forEach((s)=>{
				solt[s.name]=(props:unknown)=>{
					return s.data.map((template)=>{
						if(template.isText){
							return (template.text as string).replace(/\{\{(.+?)\}\}/g,(data,v)=>this.analysis(v, {
								...locaVar,
								[s.propName || '_soltProps']:props
							}));
						}
						return this.renderComponent(template,{
							...locaVar,
							props
						});
					});
				};
			});
		}
		let component=item.component;
		if(typeof component=="string" && HTMLEL.indexOf(component)==-1){
			component=resolveComponent(component);
			if(!component) component=item.component
		}
		return h(component,props,solt)
	}
	public render():VNode{
		return this.renderComponent(this.example.template);
	}
}