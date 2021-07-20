import { example } from "../type.d";

export default [
	{
		name:"默认自动",
		template:{
			isText:false,
			component:"su-view-control",
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
				{label:"label1",value:"1"},
				{label:"label2",value:"2"},
				{label:"label3",value:"3"},
				{label:"label4",value:"4"},
				{label:"label5",value:"5"},
				{label:"label6",value:"6"},
				{label:"label7",value:"7"},
				{label:"label8",value:"8"},
				{label:"label9",value:"9"},
				{label:"label10",value:"10"},
				{label:"label11",value:"11"},
				{label:"label12",value:"12"},
				{label:"label13",value:"13"},
				{label:"label14",value:"14"},
				{label:"label15",value:"15"},
			],
			data:"2"
		}
	},
	{
		name:"强制pc",
		template:{
			isText:false,
			component:"su-view-control",
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
			],
			props:{
				deviceType:"pc"
			}
		},
		data:{
			options:[
				{label:"label1",value:"1"},
				{label:"label2",value:"2"},
				{label:"label3",value:"3"},
				{label:"label4",value:"4"},
				{label:"label5",value:"5"},
				{label:"label6",value:"6"},
				{label:"label7",value:"7"},
				{label:"label8",value:"8"},
				{label:"label9",value:"9"},
				{label:"label10",value:"10"},
				{label:"label11",value:"11"},
				{label:"label12",value:"12"},
				{label:"label13",value:"13"},
				{label:"label14",value:"14"},
				{label:"label15",value:"15"},
			],
			data:"2"
		}
	},
	{
		name:"强制mobile",
		template:{
			isText:false,
			component:"su-view-control",
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
			],
			props:{
				deviceType:"mobile"
			}
		},
		data:{
			options:[
				{label:"label1",value:"1"},
				{label:"label2",value:"2"},
				{label:"label3",value:"3"},
				{label:"label4",value:"4"},
				{label:"label5",value:"5"},
				{label:"label6",value:"6"},
				{label:"label7",value:"7"},
				{label:"label8",value:"8"},
				{label:"label9",value:"9"},
				{label:"label10",value:"10"},
				{label:"label11",value:"11"},
				{label:"label12",value:"12"},
				{label:"label13",value:"13"},
				{label:"label14",value:"14"},
				{label:"label15",value:"15"},
			],
			data:"2"
		}
	}
] as example[];