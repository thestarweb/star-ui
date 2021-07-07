<template>
	<div :class="['star-ui','star-ui-input',{'is-focus':isFocused}]">
		<input type="text" ref="input" :value="modelValue" :name="name" :class="['star-ui','star-ui-input--inner','star-ui-size-'+size]" @input.stop="handleInput" @focus="handleFocus" @blur="handleBlur">
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit } from "../reg";
import "../global-style.css";

@Options({
	name:"su-input"
})
export default class SuInput extends Vue {
	@Prop({
		type:String,
		default:""
	})
	modelValue!:string;
	$refs!:{
		input:HTMLInputElement
	};
	@Prop({
		type:String,
		default:""
	})
	name!:string;
	@Prop({
		type:String,
		default:"medium"
	})
	size!:string;
	isFocused=false;
	@Emit("update:modelValue")
	emitInput(data:string):string{
		return data;
	}
	handleInput(event:InputEvent):void{
		if(event.target){
			var target=event.target as HTMLInputElement;
			this.$emit("update:modelValue",target.value);
			this.emitInput(target.value)
			this.$nextTick(()=>target.value=this.modelValue);
			// return target.value;
		}
		// return "";
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
