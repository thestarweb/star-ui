<template>
	<div class="su-main">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-main",
	props: {
	}
})
export default class SuMain extends Vue {
}
</script>

<style scoped>
div{
	flex-grow: 1;
}
</style>
