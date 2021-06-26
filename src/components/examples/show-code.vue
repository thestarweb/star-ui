<template>
	<div>
		<pre>{{displayData}}</pre>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { example,template } from "./type.d";


@Options({
	components:{
	},
	props: {
		example:{
			type:Object,
			default:{}
		},
	}
})
export default class ShowCode extends Vue {
	private example!:example;
	private getTemplateStr(templ:template, indent:number):string{
		let outStr = "\t".repeat(indent);
		if(templ.isText){
			return outStr + (templ.text || "") + "\n";
		}
		outStr += "<" + templ.component;
		if(templ.props){
			for(let key in templ.props){
				outStr += " " + key + "=\"" + templ.props[key] + "\"";
			}
		}
		outStr += ">\n";
		if(templ.slot){
			for(var i = 0; i <templ.slot.length; i++){
				const slot = templ.slot[i];
				for(var j = 0; j < slot.data.length; j++){
					outStr += this.getTemplateStr(slot.data[j], indent+1);
				}
			}
		}
		outStr += "\t".repeat(indent) + "</" + templ.component + ">\n";
		return outStr;
	}
	get displayData():string{
		let outStr = "<template>\n";
		outStr += this.getTemplateStr(this.example.template, 1)
		outStr += "</template>\n";

		if(this.example.data){
			outStr += `\n<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({})
export default class Example extends Vue {\n`;
			for(var i in this.example.data){
				outStr += "\t" + i + "=" + JSON.stringify(this.example.data[i]) + ";\n";
			}
			//outStr
			outStr += "}\n";
			outStr += "<" + "/script>\n";//绝了 连着写不仅我的提取引擎会有问题（但是可以改，并且不会覆盖到这里），vue的引擎也会在这里截断脚本 只能分开写了
		}
		return outStr;
	}
}
</script>
<style scoped>
div{
	padding: 10px;
	background: rgba(0,0,0,0.1);
}
pre{
	margin: 0;
	padding: 0;
}
</style>