<template>
	<div class="star-ui su-h-layout">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-h-layout",
	props: {
	}
})
export default class SuHLayout extends Vue {
}
</script>

<style>
.su-h-layout{
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	padding: 0;
	overflow: hidden;
}
</style>
