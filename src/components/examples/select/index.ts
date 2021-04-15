import { example } from "../type.d";

export default [
	{
		name:"基本用法（base）",
		template:{
			isText:false,
			component:"div",
			slot:[
				{
					name:"default",
					data:[
						{
							isText:false,
							component:"su-select",
							props:{
								"v-model": "data",
								":options": "options",
							}
						}
					]	
				}
			]
		},
		data:{
			options:[
				{label:"lebal1",value:"1"},
				{label:"lebal2",value:"2"},
			],
			data:"2"
		}
	}
] as example[];