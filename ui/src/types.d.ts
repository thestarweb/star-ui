export interface ViewCtrlInfo{
	isMobile?:boolean;
}
export interface MenuItem{
	name?:string;
	path?:string;
	title:string;
	children?:MenuItem[];
}
