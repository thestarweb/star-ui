interface slotType{
	name:string,
	data:template[],
}
export interface template{
	isText:boolean,
	component?:class,
	data?:string,
	slot?:slotType[],
	props?:IObj
}
export interface example{
	name:string,
	template:template,
	data?:any
}