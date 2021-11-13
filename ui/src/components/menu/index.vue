<template>
	<component :is="menuComponent" :menu="menu" class="su-menu">
		<template v-slot="data">
			<slot v-if="$slots['default']" v-bind="data" />
			<component v-else :is="displayComponent" :[useedKey]="data.path" @click.>
				{{data.title}}
			</component>
		</template>
	</component>
</template>

<script lang="ts">
import { Register, Prop } from "@ui-root/reg";
import { ConcreteComponent } from "vue";
import { Vue } from 'vue-class-component';
import HMenu from './menu-h/index.vue';
import VMenu from './menu-v/index.vue';
import { MenuItem } from "@ui-root/types";
import '@ui-root/global-style.css';

@Register({
	name: 'su-menu',
})
export default class SuHMenu extends Vue {
	@Prop({
		type: Array,
		required: true,
	})
	private menu!:MenuItem[];
	@Prop({
		type: String,
		required: true,
		default: 'h'
	})
	private direction!:"h"|"v"|"row";
	private get menuComponent(){
		if (["h",'row','r'].includes(this.direction)){
			return HMenu;
		}
		return VMenu;
	}
	@Prop({
		type: [String,Function,Object],
		default: undefined,
	})
	private component!:string|Vue|Record<string, unknown>|ConcreteComponent|undefined;
	private get displayComponent():string|Vue|ConcreteComponent|Record<string, unknown>{
		if(this.component) return this.component;
		// const vueRouterLink = resolveComponent('router-link');
		// if(typeof vueRouterLink != 'string') return vueRouterLink;
		return 'a';
	}
	@Prop({
		type: String,
		default: ()=>"",
	})
	private key!:string;
	private get useedKey():string{
		if(this.component && this.key) return this.key;
		if(this.displayComponent == "a") return 'href';
		return 'to';
	}
}

</script>
<style>
.su-menu a{
	color: inherit;
	text-decoration: none;
}
</style>
