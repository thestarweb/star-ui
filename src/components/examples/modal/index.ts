import { example } from "../type.d";

export default [
	{
		name:"base",
		template:{
			isText:false,
			component:"div",
			slot:[
				{
					name:"default",
					data:[
						{
							component:"su-modal-confirm",
							props:{
								'visible':true
							},
							slot:[
								{
									name:"default",
									data:[
										{
											isText: true,
											text: 'hello'
										}
									],
								},
							],
						},
					]
				}
			],
		}
	},
] as example[];