<template>
	<div :class="['star-ui','star-ui-select',{'is-focus':isFocused}]" @click="isFocused=!isFocused">
		<!-- 原生组件 -->
		<select :name="name" style="display: none"></select>
		<input v-if="false" type="text" :value="1" class="star-ui star-ui-select--inner">
		<!-- 内容显示 -->
		<div :class="['star-ui','star-ui-select--inner-content','star-ui-size-'+size]">{{this.showValue}}</div>
		<!-- 后缀 -->
		<div :class="['star-ui','start-ui-select--inner-suffix','star-ui-size-'+size]">
			<i class="star-ui-icon-font star-ui-icon-arrow-down"/>
		</div>
		<!-- 选项弹窗 -->
		<base-popper :from-item="$el" :visible="isFocused" @out-click="isFocused=false">
			<div :class="['star-ui','star-ui-select--pooper']" :style="{width:isMobile()?'100%':(width+'px')}">
				<div v-for="item in valueMap" :key="item[0]" :class="['star-ui','star-ui-select--option','star-ui-size-'+size,'star-ui-container',{
					'star-ui-select--option-sel':item[0]==this.value
				}]" @click="handleSelect(item[0])">{{item[1]}}</div>
			</div>
		</base-popper>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BasePopper from "./common/base-popper.vue";
import { isMobile } from '../utils';
import "../global-style.css";

declare interface IObj {
	// eslint-disable-next-line
    [key: string]: any,
}

@Options({
	name:"su-select",
	components:{
		BasePopper
	},
	props: {
		value:{
			type:[String,Number,Array],
			default:""
		},
		name:{
			type:String,
			default:""
		},
		size:{
			type:String,
			default:"medium"
		},
		options:{
			type:Array,
			default:function(){return [];}
		},
		labelName:{
			type:String,
			default:"label"
		},
		valueName:{
			type:String,
			default:"value"
		},
	},
	watch:{
		isFocused(v){
			if(v){
				if(this.$el){
					if(this.$el.clientWidth){
						this.width=this.$el.clientWidth;
					}
				}
			}
		}
	}
})
export default class SuSelect extends Vue {
	value!:string;
	$refs!:{
		// input:HTMLInputElement
	};
	size!:string;
	isFocused=false;
	options!:IObj[];
	valueName!:string;
	labelName!:string;
	private isMobile():boolean{
		return isMobile(this);
	}
	get valueMap():Map<string|number,string>{
		const map=new Map();
		this.options.map((item)=>{
			if(this.valueName in item){
				const value=item[this.valueName];
				const label=(this.labelName in item)?item[this.labelName]:value
				map.set(value,label);
			}
		});
		return map;
	}
	get showValue():string{
		if(this.valueMap.has(this.value)){
			return this.valueMap.get(this.value) as string;
		}
		return this.value;
	}
	private width=280;
	handleSelect(value:string):void{
		this.$emit("input",value);
		this.isFocused=false;
	}
}
</script>

<style>
/*基本样式*/
.star-ui-select{
	display: inline-block;
	border: solid 1px var(--star-ui-input-border-color);
	border-radius: var(--star-ui-border-radius);
	display: flex;
	flex-direction: row;
	width:var(--star-ui-input-default-width);
}
/*选中时样式*/
.star-ui-select:hover,.star-ui-select.is-focus{
	border: solid 1px var(--star-ui-base-color);
}
/*内容显示区域占用全部剩余空间*/
.star-ui-select--inner-content{
	flex:1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
/*清除原生输入框的样式*/
.star-ui-select--inner,.star-ui-select--inner:hover,.star-ui-select--inner:active,.star-ui-select--inner:focus{
	border-width: 0px;
	outline: none;
	margin: 0;
	padding: 0;
}
/*弹出层样式*/
.star-ui-select--pooper{
	background: var(--star-ui-backgorund-color);
	border: solid 1px var(--star-ui-input-border-color);
	border-radius: var(--star-ui-border-radius);
}
/*选中选项样式*/
.star-ui-select--option-sel{
	background: var(--star-ui-base-color);
	color:var(--star-ui-backgorund-color);
}

/*移动样式*/
.su-view-control-mobile .star-ui-select--pooper{
	width: 100%;
}
</style>
