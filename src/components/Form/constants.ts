import { CommonAndHTMLProps } from "../Element/constants";

export type FormWrapperElementType        = HTMLFormElement;
export type FormItemElementType           = HTMLDivElement;
export type FormItemGroupElementType      = HTMLDivElement;
export type FormItemJointGroupElementType = HTMLDivElement;


interface FormItemCustomProps {
    isAnswers?: boolean;
}

export type FormWrapperProps        = CommonAndHTMLProps<FormWrapperProps>;
export type FormItemProps           = CommonAndHTMLProps<FormItemProps> & FormItemCustomProps;
export type FormItemGroupProps      = CommonAndHTMLProps<FormItemGroupProps>;
export type FormItemJointGroupProps = CommonAndHTMLProps<FormItemJointGroupProps>;
