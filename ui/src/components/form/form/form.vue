<template>
	<form :class="`star-ui su-form star-ui-form`">
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
}
</script>
<style>
.star-ui-form{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
