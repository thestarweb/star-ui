<template>
	<div class="star-ui su-v-line"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";

@Options({
	name:"su-v-line",
	props: {
	}
})
export default class SuVLine extends Vue {
}
</script>

<style>
.su-v-line{
	background-color:var(--star-ui-line-color);
    /*height:100%;*/
    width:var(--star-ui-line-width);
    min-width:var(--star-ui-line-width);
    max-width:var(--star-ui-line-width);
    flex:0 0 var(--star-ui-line-width);
    padding: 0;
}
</style>
