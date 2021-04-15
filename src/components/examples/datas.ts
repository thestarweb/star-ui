import SuCard from "./card"
import SuInput from "./input"
import SuSelect from "./select"
import SuTable from "./table"
import { example } from "./type.d";

interface ExamplesObj {
    [key: string]: example[],
}

export default {
	"su-card":SuCard,
	"su-input":SuInput,
	"su-select":SuSelect,
	"su-table":SuTable,
}as ExamplesObj;
