<template>
	<div :class="['star-ui', 'star-ui-menu', 'star-ui-menu-h']">
		<su-h-menu-item v-for="item in menu" :key="item.path" :item="item" childDirection="bottom">
			<template v-slot="data">
				<slot v-if="$slots['default']" v-bind="data" />
				<component :is="displayComponent" :[useedKey]="data.path">
					{{data.title}}
				</component>
			</template>
		</su-h-menu-item>
	</div>
</template>

<script lang="ts">
import { Register, Prop } from "@ui-root/reg";
import { ConcreteComponent, resolveComponent } from "vue";
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
	@Prop({
		type: [String,Function,Object],
		default: undefined,
	})
	private component!:string|Vue|Record<string, unknown>|ConcreteComponent|undefined;
	private get displayComponent():string|Vue|ConcreteComponent|Record<string, unknown>{
		if(this.component) return this.component;
		const vueRouterLink = resolveComponent('router-link');
		if(typeof vueRouterLink != 'string') return vueRouterLink;
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
.star-ui-menu--item-box{
	height: 100%;
	overflow: visible;
	position: relative;
	padding: 0;
	transition: background-color 0.5s;
}
.star-ui-menu--item-box:hover{
	background-color: rgba(128,128,128,0.4);
}
.star-ui-menu--item-box-inner{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center; 
	height: 100%;
	padding: 8px;
}
.star-ui-menu--chlild-box{
	/* display: none; */
	position: absolute;
	background-color: #FFF;
	opacity: 0;
	transition: opacity 0.5s;
	pointer-events: none;
}
*:hover>.star-ui-menu--chlild-box{
	display: block;
	opacity: 1;
	pointer-events: auto;
}
</style>
