interface slotType{
	name:string,
	data:template[],
}
export interface template{
	isText:boolean,
	component?:class,
	text?:string,
	slot?:slotType[],
	props?:IObj,
	data?:IObj
}
export interface example{
	name:string,
	template:template,
	data?:any
}