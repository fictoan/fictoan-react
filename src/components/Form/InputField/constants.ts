import { CommonAndHTMLProps } from "src/components/Element/constants";

import { InputLabelProps } from "../InputLabel/constants";
import { InputIconProps } from "../BaseInputComponent/constants";

export type InputFieldElementType = HTMLInputElement;

export type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> & InputLabelProps & InputIconProps;
