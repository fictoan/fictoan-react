import { HTMLProps } from "react";

import { InputLabelProps } from "../InputLabel/constants";
import { InputIconProps } from "../BaseInputComponent/constants";

export type TextAreaProps = HTMLProps<HTMLInputElement> &
    InputLabelProps &
    InputIconProps;
