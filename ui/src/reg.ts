import { VueDecorator, PropOptions, createDecorator } from 'vue-class-component';

export const data = {
	//
} as {[key:string]: {
	props?:{
		[key:string]: PropOptions
	}
}}

const hyphenate = (str:string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
// eslint-disable-next-line
function isPromise(obj:any) {
	return obj instanceof Promise || (obj && typeof obj.then === 'function');
}
// eslint-disable-next-line
export function Emit(event?:string, shouldEmit?:(res:any)=>boolean):VueDecorator{
	return createDecorator((componentOptions, propertyKey) => {
		//获取事件名称
		const emitName = event || hyphenate(propertyKey);
		//告知vue有这个事件
		componentOptions.emits || (componentOptions.emits = []);
		componentOptions.emits.push(emitName);
		const original = componentOptions.methods[propertyKey];
		// eslint-disable-next-line
		componentOptions.methods[propertyKey] = function emitter(...args:any[]) {
			// eslint-disable-next-line
			const emit = (returnValue:any) => {
				if (returnValue === undefined) {
					if (args.length === 0) {
						this.$emit(emitName);
					}
					else if (args.length === 1) {
						this.$emit(emitName, args[0]);
					}
					else {
						this.$emit(emitName, ...args);
					}
				}
				else {
					args.unshift(returnValue);
					this.$emit(emitName, ...args);
				}
			};
			const returnValue = original.apply(this, args);
			if(shouldEmit && ! shouldEmit(returnValue)){
				return;
			}
			if (isPromise(returnValue)) {
				returnValue.then(emit);
			}
			else {
				emit(returnValue);
			}
			return returnValue;
		};
	});
}

export function Prop(propOptions:PropOptions):VueDecorator{
	return createDecorator((componentOptions, key) => {
		if(componentOptions.name){
			// console.log(componentOptions.name);
			if(!data[componentOptions.name]) data[componentOptions.name] = {};
			if(!data[componentOptions.name].props) data[componentOptions.name].props={};
			(data[componentOptions.name].props!)[key] = propOptions;
		}
		componentOptions.props ||= Object.create(null)
		componentOptions.props[key] = propOptions;
	});
}