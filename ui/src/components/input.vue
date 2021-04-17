<template>
	<div :class="['star-ui','star-ui-input',{'is-focus':isFocused}]">
		<input type="text" ref="input" :value="value" :name="name" :class="['star-ui','star-ui-input--inner','star-ui-size-'+size]" @input.stop="handleInput" @focus="handleFocus" @blur="handleBlur">
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
			default:"medium"
		}
	}
})
export default class SuInput extends Vue {
	value!:string;
	$refs!:{
		input:HTMLInputElement
	};
	size!:string;
	isFocused=false;
	handleInput(event:InputEvent):void{
		if(event.target){
			var target=event.target as HTMLInputElement;
			this.$emit("input",target.value)
			//target.value=this.value;
			this.$nextTick(()=>target.value=this.value);
		}
	}
	handleFocus():void{
		this.isFocused=true;
	}
	handleBlur():void{
		this.isFocused=false;
	}
}
</script>

<style>
.star-ui-input{
	display: flex;
	border: solid 1px var(--star-ui-input-border-color);
	border-radius: var(--star-ui-border-radius);
	flex-direction: row;
	width:var(--star-ui-input-default-width);
	overflow: hidden;
}
.star-ui-input:hover,.star-ui-input.is-focus{
	border: solid 1px var(--star-ui-base-color);
}
.star-ui-input--inner,.star-ui-input--inner:hover,.star-ui-input--inner:active,.star-ui-input--inner:focus{
	border-width: 0px;
	outline: none;
	margin: 0;
	flex:1;
}
</style>
