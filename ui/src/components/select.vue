<template>
	<div :class="['star-ui','star-ui-select',{'is-focus':isFocused}]">
		<select :name="name" style="display: none"></select>
		<input v-if="false" type="text" :value="1" class="star-ui star-ui-select--inner">
		<div class="star-ui star-ui-container">{{this.showValue}}</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

declare interface IObj {
	// eslint-disable-next-line
    [key: string]: any,
}

@Options({
	name:"su-select",
	props: {
		value:{
			type:[String,Number,Array],
			default:""
		},
		name:{
			type:String,
			default:""
		},
		size:{
			type:String,
			default:"min"
		},
		options:{
			type:Array,
			default:function(){return [];}
		},
		labelName:{
			type:String,
			default:"label"
		},
		valueName:{
			type:String,
			default:"value"
		},


	}
})
export default class SuSelect extends Vue {
	value!:string;
	$refs!:{
		// input:HTMLInputElement
	};
	size!:string;
	isFocused=false;
	options!:IObj[];
	valueName!:string;
	labelName!:string;
	get valueMap():Map<string|number,string>{
		const map=new Map();
		this.options.map((item)=>{
			if(this.valueName in item){
				const value=item[this.valueName];
				const label=(this.labelName in item)?item[this.labelName]:value
				map.set(value,label);
			}
		});
		return map;
	}
	get showValue():string{
		if(this.valueMap.has(this.value)){
			return this.valueMap.get(this.value) as string;
		}
		return this.value;
	}
}
</script>

<style>
.star-ui-select{
	display: inline-block;
	border: solid 1px var(--star-ui-input-border-color);
	border-radius: var(--star-ui-border-radius);
}
.star-ui-select:hover,.star-ui-select.is-focus{
	border: solid 1px var(--star-ui-base-color);
}
.star-ui-select--inner,.star-ui-select--inner:hover,.star-ui-select--inner:active,.star-ui-select--inner:focus{
	border-width: 0px;
	outline: none;
	margin: 0;
	padding: 0;
}
</style>
