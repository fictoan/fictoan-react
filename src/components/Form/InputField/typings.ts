import { HTMLProps } from "react";

import { InputLabelProps } from "../InputLabel/typings";
import { InputIconProps } from "../BaseInputComponent/typings";

export type InputFieldProps = HTMLProps<HTMLInputElement> &
    InputLabelProps &
    InputIconProps;
