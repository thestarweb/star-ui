<template>
	<div class="star-ui star-ui-card">
		<div class="star-ui star-ui-card--inner-head">
			<div class="star-ui star-ui-card--inner-title">{{title}}</div>
			<button v-if="collapsible" :class="['star-ui','star-ui-card--inner-button-collapsible',isCollaps?'show':'hidden']" @click="collapsChange"></button>
		</div>
		<div ref="body" class="star-ui star-ui-card--inner-body">
			<div ref="bodyInner" class="star-ui star-ui-card--inner-body-inner">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "../global-style.css";
import VLayout from "./layout-v.vue";
import HLayout from "./layout-h.vue";
import SuMain from "./layout-main.vue";


@Options({
	name:"su-card",
	components:{
		VLayout,
		HLayout,
		SuMain
	},
	props: {
		title:{
			type:String,
			default:""
		},
		collapsible:{
			type:Boolean,
			default:false
		}
	}
})
export default class SuCard extends Vue {
	$refs!: {
		body:HTMLDivElement
	};
	isCollaps=false;
	collapsChange():void{
		if(this.isCollaps){
			this.$refs.body.style.height="100px";
		}else{
			this.$refs.body.style.height="0";
		}
		console.log(this.$refs.body.style.height);
		this.isCollaps=!this.isCollaps;
	}
}
</script>

<style>
.star-ui-card{
	border: 1px solid var(--star-ui-line-color);
	border-radius: var(--star-ui-border-radius);
	display: flex;
	flex-direction: column;
}
.star-ui-card--inner-head{
	display: flex;
	flex-direction: row;
}
.star-ui-card--inner-title{
	flex-grow: 1;
}
.star-ui-card--inner-button-collapsible{
	width: 0;
	height: 0;
	margin: 2px;
	padding: 10px;
	/*background: #88f;*/
	border-radius: 50%;
	border: 1px solid var(--star-ui-line-color);
	display: inline-block;
	float: right;
}
.star-ui-card--inner-button-collapsible:after{
	content: " ";
	width: 0;
	height: 0;
	padding: 0;
	/*margin-left: -5px !important;
	margin-top: -2.5px !important;*/
	left: 5px;
	top:8px;
	position: absolute;
	border-color: var(--star-ui-line-color);
	border-style: solid;
	border-right: solid 5px transparent;
	border-left: solid 5px transparent;
	transition: border-top-width 0.5s, border-bottom-width 0.5s;
}
.star-ui-card--inner-button-collapsible.hidden:after{
	/*border-bottom: solid 5px #ccf;*/
	border-bottom-width: 5px;
	border-top-width: 0;
}
.star-ui-card--inner-button-collapsible.show:after{
	/*border-top: solid 5px #ccf;*/
	border-top-width: 5px;
	border-bottom-width: 0;
}
.star-ui-card--inner-body{
	flex-grow: 1;
	overflow: hidden;
	transition: height 0.5s;
}
.star-ui-card--inner-body-inner{
	overflow: auto;
}
</style>
