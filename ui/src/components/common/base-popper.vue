<template>
	<teleport :to="'#'+id">
		<div>
		<slot></slot>
		</div>
	</teleport>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

// import { Vue } from "vue"
import "../../global-style.css";
let nowId=0;

@Options({
	name:"su-base-popper",
	props: {
		fromItem:{
			type:Object,
			required:true
		},
		style:{
			type:Object,
			default:function(){return {};}
		},
		updateType:{
			type:String,
			default:"v-sync"
		},
		visible:{
			type:Boolean,
			default:false
		}
	},
	watch:{
		visible(){
			this._updateVisible();
		}
	},
	inject: ['$suControl']
})
export default class SuButton extends Vue {
	fromItem!:Vue|HTMLElement;
	private div!:HTMLDivElement;
	private id!:string;
	private updateType!:string;
	private visible!:boolean;
	private get isMobile():boolean{
		return ((this as any).$suControl||{}).isMobile;
	}
	beforeCreate():void{
		this.div=document.createElement("div");
		document.body.append(this.div);
		this.id="star-ui-popper-"+nowId++;
		this.div.id=this.id;
		this.div.style.position="fixed";
	}
	unmounted():void{
		document.body.removeChild(this.div);
	}
	mounted():void{
		window.addEventListener("click",this._clickCheck);
		this._updateVisible();
	}
	beforeUnmount():void{
		window.removeEventListener("click",this._clickCheck);
	}
	_clickCheck(ev:MouseEvent):void{
		var dom=ev.target;
		while(dom&&dom!=document){
			if(dom==this.div||(this.fromItem&&dom==((this.fromItem instanceof HTMLElement)?this.fromItem:this.fromItem.$el))){
				return;
			}
			dom=(dom as HTMLElement).parentElement;
		}
		this.$emit("out-click");
	}
	private syncRequestId!:number;
	_updateVisible():void{
		if(this.visible){
			this.div.style.display="";
			this.updatePos();
		}else{
			this.div.style.display="none";
			if(this.syncRequestId)cancelAnimationFrame(this.syncRequestId);
		}
	}
	updatePos():void{
		if(this.fromItem){
			let dom=(this.fromItem instanceof HTMLElement)?this.fromItem:this.fromItem.$el;
			if(this.isMobile){
				this.div.style.bottom="0";
				this.div.style.left="0";
				this.div.style.width="100%";
				// this.div.style.height="100%";
				this.div.className="star-ui su-view-control su-view-control-mobile";
			}else{
				this.div.className="star-ui su-view-control su-view-control-pc";
				const height=dom.clientHeight;
				let top=0,left=0;
				while(dom&&dom!=document){
					top+=dom.offsetTop-dom.scrollTop;
					left+=dom.offsetLeft-dom.scrollLeft;
					dom=dom.offsetParent;
				}
				top+=height;
				this.div.style.top=top+"px";
				this.div.style.left=left+"px";
				if(this.updateType=="v-sync"){
					this.syncRequestId=requestAnimationFrame(this.updatePos);
				}
			}
		}
	}
}
</script>

<style>

</style>
