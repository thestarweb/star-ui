<template>
	<div :class="['star-ui','su-slider','star-ui-size-'+size]">
		<div ref="bar" class="su-slider--inner-runway">
			<div class="su-slider--inner-button-wrapper" :style="{left:positionLeft+'%'}" @mousedown="handleMouseDown"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop, Emit } from "../reg";
import "../global-style.css";

@Options({
	name:"su-slider"
})
export default class SuSlider extends Vue {
	declare $refs:{
		bar:HTMLDivElement
	};
	private refBar:HTMLDivElement|null=null;

	mounted():void{
		this.refBar=this.$refs.bar;
	}
	beforeUnmount():void{
		this.removeEvent;
	}

	@Prop({
		type:String,
		default:"medium"
	})
	public readonly size!:string;

	@Prop({
		type:Number,
		default:0
	})
	readonly modelValue!:number;

	@Prop({
		type:Number,
		default:0
	})
	public readonly min!:number;

	@Prop({
		type:Number,
		default:100
	})
	public readonly max!:number;

	@Prop({
		type:Number,
		default:0
	})
	public readonly setp!:number;

	private moveStartValue=0;
	private get displayValue():number{
		let res=this.modelValue;
		if(this.refBar && this.dx){
			res=this.moveStartValue+this.dx/this.refBar.clientWidth*(this.max-this.min);
		}
		if(this.setp&&this.setp>0){
			res= Math.round((res-this.min)/this.setp)*this.setp;
		}
		if(res>this.max) res=this.max;
		else if(res<this.min) res=this.min;
		return res;
	}
	private get positionLeft():number{
		return (this.displayValue-this.min)*100/(this.max-this.min);
	}
	@Emit("update:modelValue")
	private updateEvent(value:number):number{
		return value;
	}

	private dx=0;

	private handleMouseDown():void{
		window.addEventListener("mousemove",this.handleMouseMove);
		window.addEventListener("mouseup",this.handleMouseUp);
		this.moveStartValue=this.modelValue;
	}
	private removeEvent():void{
		window.removeEventListener("mousemove",this.handleMouseMove);
		window.removeEventListener("mouseup",this.handleMouseUp);
	}
	private handleMouseMove(ev:MouseEvent):void{
		this.dx+=ev.movementX;

		this.updateEvent(this.displayValue);
	}
	private handleMouseUp():void{
		this.updateEvent(this.displayValue);
		this.dx=0;
		this.removeEvent();
	}
}
</script>

<style>
.su-slider{
	padding: calc(var(--star-ui-input-medium-font-size) );
	user-select: none;
}
.su-slider--inner-runway{
	height: 2px;
	background-color: var(--star-ui-input-border-color);
}
.su-slider--inner-button-wrapper{
	width: var(--star-ui-input-medium-font-size);
	height: var(--star-ui-input-medium-font-size);
	border-radius: 50%;
	border: 1px solid var(--star-ui-base-color);
	display: inline-block;
	position: relative;
	margin-left: calc(0px - var(--star-ui-input-medium-font-size) / 2);
	top: calc(0px - var(--star-ui-input-medium-font-size) / 2);
	cursor: pointer;
	background-color: var(--star-ui-backgorund-color);
}
</style>
