<template>
	<form :class="`star-ui su-form star-ui-form ${allowAotoMobile?'star-ui-form--auto-mobile':''}`">
		<slot></slot>
	</form>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Register, Prop } from "@ui-root/reg";
import type { TypeFormLabelAlign } from "@ui-root/outher";

import "@ui-root/global-style.css";
import { Provide } from "vue-property-decorator";
import { InjectLabelAlign, InjectLabelWidth } from "./form-item.vue";

@Register({
	name:"su-form"
})
export default class SuButton extends Vue {
	@Prop({
		autoType: "FormLabelAlign",
		default:()=>{
			return "right"
		}
	})
	@Provide({to:InjectLabelAlign})
	readonly labelAlign!:TypeFormLabelAlign;
	@Prop({
		type: Number
	})
	@Provide({to:InjectLabelWidth})
	readonly labelWidth!:number|undefined;
	@Prop({
		type: Boolean,
		default:()=>{
			return true
		}
	})
	readonly allowAotoMobile!:boolean;
}
</script>
<style>
.star-ui-form{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.star-ui-view-control.star-ui-view-control-mobile .star-ui-form--auto-mobile>.star-ui-form-item{
	width: 100%;
}
</style>
