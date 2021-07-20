<template>
	<div :class="['star-ui', 'star-ui-tree-item']">
		<div :class="'star-ui-size-'+size">
			<div v-for="n in deep" :key="n" class="star-ui-tree-deep-nbsp"></div>
			<span :class="['star-ui-tree-expand','star-ui-icon-font',childrenData.length>0?(isExpand?'star-ui-icon-arrow-down':'star-ui-icon-arrow-right'):'']" @click="isExpand=!isExpand"></span>
			{{labelData}}
		</div>
		<div v-if="isExpand">
			<tree-item v-for="(item, index) in childrenData" :key="index" :deep="deep+1" :item="item" :label="label" :value="value" :children="children"></tree-item>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from "../../reg";
import treeItem from "./tree-item.vue"


import "../../global-style.css";

@Options({
	name:"su-button",
	components:{
		treeItem
	}
})
export default class SuTreeItem extends Vue {
	isExpand=false;
	@Prop({
		type:Number,
		default:()=>{
			return 0;
		}
	})
	deep!:number;
	@Prop({
		type:String,
		default:()=>{
			return "medium"
		}
	})
	size!:string;
	@Prop({
		type:Object,
		default:()=>{
			return {}
		}
	})
	item!:Record<string, unknown>;
	@Prop({
		type:[String,Function],
		default:()=>{
			return "label"
		}
	})
	label!:string|((item:Record<string, unknown>)=>string);
	@Prop({
		type:[String,Function],
		default:()=>{
			return "value"
		}
	})
	value!:string|((item:Record<string, unknown>)=>string|number);
	@Prop({
		type:[String,Function],
		default:()=>{
			return "children"
		}
	})
	children!:string|((item:Record<string, unknown>)=>Record<string, unknown>[]);
	get labelData():string{
		if(typeof this.label == "string"){
			return (this.item[this.label]||"") as string;
		}
		return this.label(this.item);
	}
	get childrenData():Record<string, unknown>[]{
		if(typeof this.children == "string"){
			return (this.item[this.children]||[]) as Record<string, unknown>[];
		}
		return this.children(this.item);
	}
}
</script>

<style>
.star-ui-tree-deep-nbsp{
	display: inline-block;
	height: 100%;
	width: 20px;
}
.star-ui-tree-expand{
	width: 16px;
	height: 100%;
	display: inline-block;
	cursor: pointer;
}
</style>
