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
							component:"su-input",
							props:{
								"v-model":"data"
							},
							data:{
								data:"233"
							}
						}
					]
				}
			]
		}
	}
] as example[];