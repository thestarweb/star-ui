<template>
	<div class="star-ui su-h-line"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-h-line",
	props: {
	}
})
export default class SuHLine extends Vue {
}
</script>

<style>
.su-h-line{
	background-color:var(--star-ui-line-color);
    width:100%;
    height:var(--star-ui-line-width);
    padding: 0;
}
</style>
