<template>
	<div :class="['star-ui', 'star-ui-menu', 'star-ui-menu-h']">
		<su-h-menu-item v-for="item in menu" :key="item.path" :item="item" childDirection="bottom">
			<template v-slot="data">
				<slot v-bind="data" />
			</template>
		</su-h-menu-item>
	</div>
</template>

<script lang="ts">
import { Register, Prop } from "@ui-root/reg";
import { Vue } from 'vue-class-component';
import SuHMenuChild from "./menu-h-child.vue";
import '@ui-root/global-style.css';
import SuHMenuItem, { MenuItem } from "./menu-h-item.vue";

@Register({
	name: 'su-h-menu',
	watch:{
		menu(this:SuHMenu){
			this.splitMenu();
		},
	},
	components:{
		SuHMenuChild,
		SuHMenuItem,
	},
	internalOnly:true,
})
export default class SuHMenu extends Vue {
	@Prop({
		type: Array,
		required: true,
	})
	private menu!:MenuItem[];
	private splitMenu(){
		this.displayItem=[...this.menu];
	}
	private displayItem:MenuItem[]=[];
	created():void{
		this.splitMenu();
	}
}

</script>
<style>
.star-ui-menu-h{
	display: flex;
	flex-direction: row;
	overflow: visible;
	position: relative;
	padding: 0;
	white-space: nowrap;
}
</style>
