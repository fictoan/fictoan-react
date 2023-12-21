import { ReactElement } from "react";
import { ElementProps } from "../../Element/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";
export interface InputIconProps {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
}
export interface InputCommonProps {
    helpText?: string;
    errorText?: string;
    validateThis?: boolean;
    valid?: boolean;
    invalid?: boolean;
}
export declare type BaseInputComponentProps<K extends {}> = ElementProps<K> & InputLabelCustomProps & InputCommonProps;
export declare type BaseInputComponentWithIconProps<K extends {}> = BaseInputComponentProps<K> & InputIconProps;
