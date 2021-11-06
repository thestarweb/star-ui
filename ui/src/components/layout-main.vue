<template>
	<div class="star-ui su-main">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Register } from '@ui-root/reg';
import "../global-style.css";

@Register({
	name:"su-main",
	props: {
	}
})
export default class SuMain extends Vue {
}
</script>

<style>
.su-main{
	flex: 1;
}
</style>
