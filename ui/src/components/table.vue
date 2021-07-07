<template>
	<div class="star-ui su-table">
		<table class="star-ui su-table--inner" rules="none" frame="void">
			<thead class="star-ui su-table--inner-thead">
				<tr class="star-ui su-table--inner-tr">
					<th v-for="item in columns" :key="item.name+item.key" class="star-ui star-ui-container su-table--inner-th">{{item.name}}</th>
				</tr>
			</thead>
			<tbody class="star-ui su-table--inner-tbody">
				<tr v-for="(row,index) in data" :key="index" class="star-ui su-table--inner-tr">
					<td v-for="item in columns" :key="item.name+item.key" class="star-ui star-ui-container su-table--inner-td">{{row[item.field]}}</td>
				</tr>
				<slot></slot>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from "../reg";
import "../global-style.css";


@Options({
	name:"su-table",
	props: {
		data:{
			type:Array,
			default:()=>[]
		}
	}
})
export default class SuTable extends Vue {
	// @Prop({
	// 	type:Array,
	// 	default:()=>[]
	// })
	// data!:any[];
	@Prop({
		type:Array,
		default:()=>[]
	})
	// eslint-disable-next-line
	columns!:any[];
}
</script>

<style>
.su-tabl{
	width: 100%;
}
.su-table--inner-thead{
	background-color: var(--star-ui-table-head-color);
}
.su-table--inner-tr{
	border-bottom: 1px solid #e8eaec;
}
</style>
