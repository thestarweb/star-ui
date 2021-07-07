<template>
	<button :class="['star-ui', 'star-ui-container', 'star-ui-button','star-ui-size-'+size]">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from "../reg";

import "../global-style.css";

@Options({
	name:"su-button"
})
export default class SuButton extends Vue {
	@Prop({
		type:String,
		default:()=>{
			return "medium"
		}
	})
	size!:string;
}
</script>

<style>
.star-ui-button.star-ui-size-mini{
	border-radius:2px;
}
</style>
