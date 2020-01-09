import { CommonAndHTMLProps } from "../../Element/constants";

import { InputLabelProps } from "../InputLabel/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";

export type TextareaElementType = HTMLTextAreaElement;

export type TextareaProps = CommonAndHTMLProps<TextareaElementType> & InputLabelProps & InputCommonProps;
