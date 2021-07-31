interface slotType{
	name:string,
	data:template[],
}
export interface template{
	isText:boolean,
	component?:class,
	text?:string,
	slot?:slotType[],
	props?:IObj
}
export interface example{
	name:string,
	template:template,
	data?:Record<string, unknown>
}