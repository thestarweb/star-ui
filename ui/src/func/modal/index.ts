import { createVNode, render } from 'vue';
import { SuModalConfirm,SuViewControl } from '@ui-root/main';

export function confirm(title: string){
	const dom = document.createElement("div");
	const vnode = createVNode(SuModalConfirm, {
		visible: true,
		title,
		onClose: () => {
			console.log(11);
			if(vnode.props) vnode.props.visible = false;
			render(null, dom);
		}
	});
	
	render(createVNode(SuViewControl, {}, () => vnode), dom);
}