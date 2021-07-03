<template>
	<button class="star-ui star-ui-container star-ui-button">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Emit } from '../reg'

import "../global-style.css";

@Options({
	name:"su-button",
	props: {
		size:{
			
			type:String,
			default:()=>{
				return "min"
			}
		}
	}
})
export default class SuButton extends Vue {
	size!:string;
}
</script>

<style>

</style>
