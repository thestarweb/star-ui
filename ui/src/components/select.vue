<template>
	<div :class="['star-ui','star-ui-input',{'is-focus':isFocused}]">
		<select :name="name" style="display: none"></select>
		<input type="text" :value="showValue" class="star-ui star-ui-input--inner">
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-select",
	props: {
		value:{
			type:[String,Array],
			default:""
		},
		name:{
			type:String,
			default:""
		},
		size:{
			type:String,
			default:"min"
		},

	}
})
export default class SuButton extends Vue {
	value!:string;
	$refs!:{
		input:HTMLInputElement
	};
	size!:string;
	isFocused=false;
	get showValue():string{
		return "";
	}
}
</script>

<style>
.star-ui-input{
	display: inline-block;
	border: solid 1px var(--star-ui-input-border-color);
	border-radius: var(--star-ui-border-radius);
}
.star-ui-input:hover,.star-ui-input.is-focus{
	border: solid 1px var(--star-ui-base-color);
}
.star-ui-input--inner,.star-ui-input--inner:hover,.star-ui-input--inner:active,.star-ui-input--inner:focus{
	border-width: 0px;
	outline: none;
	margin: 0;
	padding: 0;
}
</style>
