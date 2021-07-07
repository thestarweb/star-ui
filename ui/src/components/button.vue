<template>
	<button class="star-ui star-ui-container star-ui-button">
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
			return "min"
		}
	})
	size!:string;
}
</script>

<style>

</style>
