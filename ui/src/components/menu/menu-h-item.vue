<template>
	<div class="star-ui star-ui-menu--item-box">
		<div class="star-ui star-ui-menu--item-box-inner">
			<slot v-bind="item" />
		</div>
		<su-h-menu-child :menu="item.children || []" :itemComponent="selfClass" :direction="childDirection">
			<template v-slot="item">
				<slot v-bind="item" />
			</template>
		</su-h-menu-child>
	</div>
</template>

<script lang="ts">
import { Register, Prop } from "@ui-root/reg";
import { Vue } from 'vue-class-component';
import SuHMenuChild from "./menu-h-child.vue";
import isFocus from '@ui-root/directives/is-focus';
import '@ui-root/global-style.css';

export interface MenuItem{
	name?:string;
	path:string;
	title:string;
	children?:MenuItem[];
}

@Register({
	name: 'su-h-menu-item',
	internalOnly: true,
	components:{
		SuHMenuChild,
	},
	directives:{
		isFocus,
	}
})
export default class SuHMenuItem extends Vue {
	isFocus=false;
	@Prop({
		type: Object,
	})
	private item!:MenuItem;
	private selfClass = SuHMenuItem;
	@Prop({
		type: String,
		default:'right',
	})
	private childDirection!:'right'|'bottom';
}
</script>
