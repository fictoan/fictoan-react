import { ReactElement } from "react";

import { ElementProps } from "src/components/Element/constants";
import { InputLabelProps } from "../InputLabel/constants";

export interface InputIconProps {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    validateThis?: boolean;
    valid?:boolean;
    invalid?:boolean;
}

export type BaseInputComponentProps = ElementProps &
    InputLabelProps &
    InputIconProps;

