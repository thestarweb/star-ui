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
				{label:"lebal3",value:"3"},
				{label:"lebal4",value:"4"},
				{label:"lebal5",value:"5"},
				{label:"lebal6",value:"6"},
				{label:"lebal7",value:"7"},
				{label:"lebal8",value:"8"},
				{label:"lebal9",value:"9"},
				{label:"lebal10",value:"10"},
				{label:"lebal11",value:"11"},
				{label:"lebal12",value:"12"},
				{label:"lebal13",value:"13"},
				{label:"lebal14",value:"14"},
				{label:"lebal15",value:"15"},
			],
			data:"2"
		}
	},
	{
		name:"小尺寸",
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
								"size":"mini"
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