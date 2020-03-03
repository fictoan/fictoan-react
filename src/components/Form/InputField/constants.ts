import { CommonAndHTMLProps } from "../../Element/constants";

import { InputLabelCustomProps } from "../InputLabel/constants";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";

export type InputFieldElementType = HTMLInputElement;

export type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> & InputLabelCustomProps & InputCommonProps & InputIconProps;
