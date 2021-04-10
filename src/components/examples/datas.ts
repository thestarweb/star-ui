import SuCard from "./card"
import SuInput from "./input"
import { example } from "./type.d";

interface ExamplesObj {
    [key: string]: example[],
}

export default {
	"su-card":SuCard,
	"su-input":SuInput,
}as ExamplesObj;
