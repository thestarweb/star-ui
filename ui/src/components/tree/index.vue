<template>
	<div :class="['star-ui', 'star-ui-tree']">
		<tree-item v-for="(item, index) in treeData" :key="index" :item="item" :label="label" :value="value" :children="children"></tree-item>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from "../../reg";
import treeItem from "./tree-item.vue"


import "../../global-style.css";

@Options({
	name:"su-tree",
	components:{
		treeItem
	}
})
export default class SuTree extends Vue {
	@Prop({
		type:String,
		default:()=>{
			return "medium"
		}
	})
	size!:string;
	@Prop({
		type:Array,
		default:()=>{
			return []
		}
	})
	treeData!:Record<string, unknown>[];
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
}
</script>

<style>
</style>
