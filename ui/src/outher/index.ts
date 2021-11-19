import { Inject } from "vue-property-decorator";

export const SuViewCtrlInjectKeyIsMobile=Symbol('SuViewCtrlInjectKeyIsMobile');
export const SuViewCtrlInjectIsMobile = Inject({from:SuViewCtrlInjectKeyIsMobile,default:false})
