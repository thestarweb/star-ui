import { example } from "../type.d";

export default [
	{
		name:"基本用法（base）",
		template:{
			isText:false,
			component:"su-calendar"
		}
	},
	{
		name:"自定义默认显示时间",
		template:{
			isText:false,
			component:"su-calendar",
			props:{
				displayMonth:"2015-09"
			}
		}
	},
] as example[];