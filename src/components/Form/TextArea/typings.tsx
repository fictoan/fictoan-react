import { HTMLProps } from "react";

import { InputLabelProps } from "../InputLabel/typings";
import { InputIconProps } from "../BaseInputComponent/typings";

export type TextAreaProps = HTMLProps<HTMLInputElement> &
    InputLabelProps &
    InputIconProps;
