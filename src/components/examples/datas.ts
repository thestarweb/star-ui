import SuHLayout from "./h-layout";
import SuVLayout from "./v-layout";
import SuMain from "./main";
import SuHLine from "./h-line";
import SuVLine from "./v-line";
import SuCard from "./card";
import SuInput from "./input";
import SuSelect from "./select";
import SuSwitch from "./switch";
import SuButton from "./button";
import SuTable from "./table";
import SuTree from "./tree";
import SuViewControl from "./view-control";
import { example } from "./type.d";

interface ExamplesObj {
    [key: string]: example[],
}

export default {
	"su-h-layout":SuHLayout,
	"su-v-layout":SuVLayout,
	"su-main":SuMain,
	"su-h-line":SuHLine,
	"su-v-line":SuVLine,
	"su-card":SuCard,
	"su-input":SuInput,
	"su-select":SuSelect,
	"su-button":SuButton,
	"su-switch":SuSwitch,
	"su-table":SuTable,
	"su-tree":SuTree,
	"su-view-control":SuViewControl,
}as ExamplesObj;
