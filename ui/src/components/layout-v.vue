<template>
	<div class="star-ui su-v-layout">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Register } from "@ui-root/reg";
import "../global-style.css";

@Register({
	name:"su-v-layout",
	props: {
	}
})
export default class SuVLayout extends Vue {
}
</script>

<style>
.su-v-layout{
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 0;
	overflow: hidden;
}
.su-v-layout>*{
	flex:0 0 auto;
}
.su-v-layout>.su-main{
	height: 0;
}
</style>
