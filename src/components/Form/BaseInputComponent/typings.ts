import { ReactElement } from "react";

import { BaseComponentProps } from "src/components/BaseComponent/BaseComponent";
import { InputLabelProps } from "../InputLabel/typings";

export interface InputIconProps {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    validateThis?: boolean;
    valid?:boolean;
    invalid?:boolean;
}

export type BaseInputComponentProps = BaseComponentProps &
    InputLabelProps &
    InputIconProps;

