<template>
	<div class="star-ui star-ui-calendar">
		<div class="star-ui-calendar--ctrl" :style="{opacity: showSelYear||showSelMonth?0:1}">
			<div @click="dYear--">&lt;&lt;</div>
			<div @click="dMonth--">&lt;</div>
			<div class="star-ui-calendar--display-month">
				<span @click="showSelYear=true">{{displayMonthStartDate.format("YYYY")}}</span>
				-
				<span @click="showSelMonth=true">{{displayMonthStartDate.format("MM")}}</span>
			</div>
			<div @click="dMonth++">&gt;</div>
			<div @click="dYear++">&gt;&gt;</div>
		</div>
		<table cellspacing="0" cellpadding="0" :style="{opacity: showSelYear||showSelMonth?0:1}">
			<tr class="su-calendar--inner-head">
				<th class="" v-for="(name,index) in displayHead" :key="index">{{name}}</th>
			</tr>
			<tr v-for="(row,index) in displayData" :key="index">
				<td v-for="(day,index) in row" :key="index" class="su-calendar--inner-cell">{{day}}</td>
			</tr>
		</table>
		<div v-if="showSelYear" class="star-ui-calendar--select">
			<div class="star-ui-calendar--select-ctrl">
				<div @click="dShowSelYear--">&lt;&lt;</div>
				<div></div>
				<div @click="dShowSelYear++">&gt;&gt;</div>
			</div>
			<div class="star-ui-calendar--select-body">
				<div v-for="i in 12" :key="i" :class="{'now-sel':i==6&&dShowSelYear==0}" @click="dYear+=i-6+dShowSelYear*12;showSelYear=false;dShowSelYear=0;">
					{{displayMonthStartDate.year()+i-6+dShowSelYear*12}}
				</div>
			</div>
		</div>
		<div v-if="showSelMonth" class="star-ui-calendar--select">
			<!-- <div class="star-ui-calendar--select-ctrl">
				<div @click="dShowSelYear--">&lt;&lt;</div>
				<div></div>
				<div @click="dShowSelYear++">&gt;&gt;</div>
			</div> -->
			<div class="star-ui-calendar--select-body">
				<div v-for="i in 12" :key="i" :class="{'now-sel':i==6&&dShowSelYear==0}" @click="showSelMonth=false;dShowSelYear=0;">
					{{i}}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from "../reg";
import moment from "moment";


import "../global-style.css";

@Options({
	name:"su-calendar"
})
export default class SuCalendar extends Vue {
	@Prop({
		type:[Date,String],
		default:()=>{
			return new Date();
		}
	})
	public readonly displayMonth!:Date|string;
	private dYear=0;
	private dMonth=0;
	private get displayMonthStartDate():moment.Moment{
		let date=moment(this.displayMonth);
		date.add(this.dYear,"y").add(this.dMonth,"M");
		date.date(1);
		return date;
	}
	@Prop({
		type:Array,
		default:()=>{
			return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
		}
	})
	public readonly weekName!:string[];

	private get displayHead():string[]{
		return this.weekName;
	}
	private getMonthDate(month:number,year:number):number{
		if(month==2){
			if((year%100!=0&&year%4==0)||year%400==0) return 29;
			else return 28;
		}
		//if([1,3,5,7,8,10,12].)
		let parity=month&1;
		if(month<8?parity==1:parity==0) return 31;
		return 30;
	}
	private get displayData():number[][]{
		let res:number[][]=[[]];
		let now=res[0];
		let month=this.displayMonthStartDate.month();
		let year=this.displayMonthStartDate.year()
		let lastMonthDay=this.displayMonthStartDate.day();
		//计算上个月开始的位置
		let lastMonthStart=this.getMonthDate(month==1?12:month-1,year)-lastMonthDay;
		for(let i=0;i<lastMonthDay;i++){
			now.push(lastMonthStart+i);
		}
		const nowMonthDay=this.getMonthDate(month,year);
		for(let i=1;i<=nowMonthDay;i++){
			if(now.length==7){
				now=[];
				res.push(now);
			}
			now.push(i);
		}
		let j=1;
		while(now.length<7){
			now.push(j++);
		}
		return res;
	}

	private showSelYear=false;
	private dShowSelYear=0;
	private showSelMonth=false;
}
</script>

<style>
.star-ui-calendar{
	text-align: center;
	display: inline-block;
	border: 1px solid #e8eaec;
}
.star-ui-calendar--ctrl{
	display: flex;
	flex-direction: row;
}
.star-ui-calendar--ctrl>*{
	padding: 5px;
	cursor: pointer;
}
.star-ui-calendar--display-month{
	flex: 1 0 auto;
	cursor: default;
}
.star-ui-calendar--display-month>span{
	cursor: pointer;
}
.star-ui-calendar th,.star-ui-calendar td{
	padding: 5px 0;
}
.su-calendar--inner-head{
	background-color: var(--star-ui-table-head-color);
}
.su-calendar--inner-cell{
	border: 1px solid #e8eaec;
	width: 42px
}

.star-ui-calendar--select{
	position: absolute;
	top:0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: inherit;
}
.star-ui-calendar--select-body{
	flex-grow: 1;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(4, 1fr);
	align-items: center;
}
.star-ui-calendar--select-body>*{
	cursor: pointer;
}
.star-ui-calendar--select-body>*:hover{
	color: var(--star-ui-base-color);
}
.star-ui-calendar--select-ctrl{
	display: flex;
	flex-direction: row;
	justify-content:space-between;
	height: 20%;
	align-items: center;
}
.star-ui-calendar--select-ctrl>*{
	padding: 0 15px;
	cursor: pointer;
}
.star-ui-calendar .now-sel{
	color: var(--star-ui-base-color);
	font-weight: bold;
}
</style>
