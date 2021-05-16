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
				{label:"lebal1",value:"1"},
				{label:"lebal2",value:"2"},
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
				{label:"lebal1",value:"1"},
				{label:"lebal2",value:"2"},
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
				{label:"lebal1",value:"1"},
				{label:"lebal2",value:"2"},
			],
			data:"2"
		}
	}
] as example[];