import { CommonAndHTMLProps } from "../Element/constants";

export type FormWrapperElementType        = HTMLFormElement;
export type FormItemElementType           = HTMLDivElement;
export type FormItemGroupElementType      = HTMLDivElement;
export type FormItemJointGroupElementType = HTMLDivElement;


interface FormItemCustomProps {
    isAnswers ? : boolean;
}

export type FormWrapperProps        = CommonAndHTMLProps<FormWrapperElementType>;
export type FormItemProps           = CommonAndHTMLProps<FormItemElementType> & FormItemCustomProps;
export type FormItemGroupProps      = CommonAndHTMLProps<FormItemGroupElementType>;
export type FormItemJointGroupProps = CommonAndHTMLProps<FormItemJointGroupElementType>;
