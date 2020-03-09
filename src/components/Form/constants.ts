import { CommonAndHTMLProps } from "../Element/constants";

export type FormWrapperElementType        = HTMLFormElement;
export type FormItemElementType           = HTMLDivElement;
export type FormItemGroupElementType      = HTMLDivElement;
export type FormItemJointGroupElementType = HTMLDivElement;

interface FormWrapperCustomProps {
    spacing ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
}

interface FormItemCustomProps {
    isAnswers ? : boolean;
}

export type FormWrapperProps        = CommonAndHTMLProps<FormWrapperElementType> & FormWrapperCustomProps;
export type FormItemProps           = CommonAndHTMLProps<FormItemElementType> & FormItemCustomProps;
export type FormItemGroupProps      = CommonAndHTMLProps<FormItemGroupElementType>;
export type FormItemJointGroupProps = CommonAndHTMLProps<FormItemJointGroupElementType>;
