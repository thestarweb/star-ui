<template>
	<div class="star-ui star-ui-input">
		<input type="text" ref="input" :value="value" :name="name" class="star-ui star-ui-input--inner" @input.stop="handleInput">
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-input",
	props: {
		value:{
			type:String,
			default:""
		},
		name:{
			type:String,
			default:""
		},
		size:{
			type:String,
			default:"min"
		}
	}
})
export default class SuButton extends Vue {
	value!:string;
	$refs!:{
		input:HTMLInputElement
	};
	size!:string;
	handleInput(event:InputEvent):void{
		if(event.target){
			var target=event.target as HTMLInputElement;
			this.$emit("input",target.value)
			//target.value=this.value;
			this.$nextTick(()=>target.value=this.value);
		}
	}
}
</script>

<style>
.star-ui-input{
	display: inline-block;
	border: solid 1px var(--star-ui-input-border-color);
	border-radius: var(--star-ui-border-radius);
}
.star-ui-input:focus{
	border: solid 1px var(--star-ui-base-color);
}
.star-ui-input--inner,.star-ui-input--inner:hover,.star-ui-input--inner:active,.star-ui-input--inner:focus{
	border-width: 0px;
	outline: none;
	margin: 0;
	padding: 0;
}
</style>
