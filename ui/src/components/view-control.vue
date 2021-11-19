<template>
	<div :class="['star-ui', 'su-view-control', $isMobile?'su-view-control-mobile':'su-view-control-pc']">
		<slot></slot>
	</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { Register, Prop } from "@ui-root/reg";
import { SuViewCtrlInjectKeyIsMobile } from "@ui-root/outher";
import { Provide } from "vue-property-decorator";
import "../global-style.css";

type DeviceType='auto'|'mobile'|'pc';


@Register({
	name:"su-view-control",
	watch:{
		$isMobile(newValue){
			//this.sendData.isMobile = newValue;
		}
	},
	// provide() {
	// 	return {
	// 		viewCtrlInfo: this.sendData
	// 	}
	// },
	// created(){
	// 	this.sendData.isMobile = this.$isMobile;
	// }
})
export default class SuViewControl extends Vue {
	mounted():void{
		this.$el._vue = this;
	}
	// @Provide({to:SuViewCtrlInjectKeyIsMobile})
	// isMobile=false;
	@Prop({
		type: String,
		default: "auto",
		validator: function(value:string) {
			return ['mobile', 'pc', 'auto'].indexOf(value) !== -1
		}
	})
	deviceType!:DeviceType;
	@Prop({
		type: String,
		default: "ua",
		validator: function(value:string) {
			return ['ua','screen-width'].indexOf(value) !== -1
		}
	})
	checkFunction!:'ua'|'screen-width';
	private windowWidth = 0;
	private windowHeight = 0;
	public checkWindowSize():void{
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	}
	@Provide({to:SuViewCtrlInjectKeyIsMobile})
	public get $isMobile():boolean{
		switch (this.deviceType) {
			case "mobile":
				return true;
			case "pc":
				return false;
		}
		switch (this.checkFunction) {
			case "ua":
				return navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
			case "screen-width":
				console.log(this.windowWidth);
				return this.windowWidth < 1000;
		}
		return false;
	}
	beforeMount(){
		this.checkWindowSize();
		window.addEventListener("resize", this.checkWindowSize);
	}
	beforeUnmount(){
		window.removeEventListener("resize", this.checkWindowSize);
	}
}
</script>

<style>
</style>
