import { BaseAndHTMLProps } from "src/components/BaseComponent/constants";

import { InputLabelProps } from "../InputLabel/constants";
import { InputIconProps } from "../BaseInputComponent/constants";

export type InputFieldElementType = HTMLInputElement;

export type InputFieldProps = BaseAndHTMLProps<InputFieldElementType> & InputLabelProps & InputIconProps;
