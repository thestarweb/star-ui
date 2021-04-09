<template>
	<div>
		<div v-for="example in list" :key="example.name">
			<h4>{{example.name}}</h4>
			<div>
				<render-component :example="example"></render-component>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import showData from "./datas";
import RenderComponent from "./render-component"

import { example } from "./type.d";


@Options({
	components:{
		RenderComponent
	},
	props: {
		name:{
			type:String,
			default:""
		},
	}
})
export default class SuButton extends Vue {
	name!:string;
	get list():example[]{
		if(this.name in showData){
			return showData[this.name];
		}
		return [];
	}
}
</script>