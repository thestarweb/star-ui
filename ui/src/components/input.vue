<template>
	<div class="star-ui star-ui-input">
		<input type="text" :name="name" class="star-ui star-ui-input--inner">
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-button",
	props: {
		name:{
			type:String,
			default:""
		},
		size:{
			type:String,
			default:()=>{
				return "min"
			},
			required: true
		}
	}
})
export default class SuButton extends Vue {
	size!:string;
}
</script>

<style>
</style>
