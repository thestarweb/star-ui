import { Options, Vue } from 'vue-class-component';
import { Prop } from "../reg";

@Options({
    name:'call-render',
})
export default class CallRender extends Vue {
	@Prop({
		type:Function,
	})
    // eslint-disable-next-line
	func!:(...arg:any[])=>any;
	@Prop({
		type:Array,
	})
    // eslint-disable-next-line
	args!:any[];
	render(){
		return this.func(...this.args);
	}
}