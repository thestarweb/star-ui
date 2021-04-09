<template>
	<div class="star-ui">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
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
}
</style>
