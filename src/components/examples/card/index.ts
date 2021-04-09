import { example } from "../type.d";
import { components } from "@/../ui/src/main"

export default [
	{
		name:"基本用法（base）",
		template:{
			isText:false,
			component:components.SuCard,
			slot:[
				{
					name:"default",
					data:[
						{
							isText:true,
							data:"I am a card!"
						}
					]
				}
			]
		}
	},
	{
		name:"带标题",
		template:{
			isText:false,
			component:components.SuCard,
			slot:[
				{
					name:"default",
					data:[
						{
							isText:true,
							data:"I am a card with title!"
						}
					]
				}
			],
			props:{
				title:"I am a title of the card."
			}
		}
	},
	{
		name:"可折叠",
		template:{
			isText:false,
			component:components.SuCard,
			slot:[
				{
					name:"default",
					data:[
						{
							isText:true,
							data:"This is collapsible data."
						}
					]
				}
			],
			props:{
				title:"I am collapsible!!",
				":collapsible":true
			}
		}
	},
	{
		name:"可嵌套",
		template:{
			isText:false,
			component:components.SuCard,
			slot:[
				{
					name:"default",
					data:[
						{
							isText:true,
							data:"I am in card++"
						},
						{
							isText:false,
							component:components.SuCard,
							slot:[
								{
									name:"default",
									data:[
										{
											isText:true,
											data:"emmm"
										}
									]
								}
							],
							props:{
								title:"I am just a card in card++",
								":collapsible":true
							}
						}
					]
				}
			],
			props:{
				title:"I am card++",
				":collapsible":true
			}
		}
	}
] as example[];