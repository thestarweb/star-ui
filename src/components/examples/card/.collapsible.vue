<template>
	<su-card title="这里时标题">
		这是一段可折叠的内容
	</su-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
	name:"su-card",
	props: {
	}
})
export default class Examples extends Vue {
}
</script>
