import { ReactElement } from "react";

import { ElementProps }    from "src/components/Element/constants";
import { InputLabelProps } from "../InputLabel/constants";

export interface InputIconProps {
    iconLeft  ? : ReactElement;
    iconRight ? : ReactElement;
}

export interface InputCommonProps {
    validateThis ? : boolean;
    valid        ? : boolean;
    invalid      ? : boolean;
}

export type BaseInputComponentProps<K extends {}> = ElementProps<K> & InputLabelProps & InputCommonProps;
export type BaseInputComponentWithIconProps<K extends {}> = BaseInputComponentProps<K> & InputIconProps;

