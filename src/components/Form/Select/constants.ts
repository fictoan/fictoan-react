import { CommonAndHTMLProps } from "../../Element/constants";

export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

interface SelectCustomProps {
    options       : CommonAndHTMLProps<OptionElementType>[];
    isFullWidth ? : boolean;
    label       ? : string;
    helpText    ? : string;
    errorText   ? : string;
}

export type OptionProps = CommonAndHTMLProps<SelectElementType>;
export type SelectProps = CommonAndHTMLProps<SelectElementType> & SelectCustomProps;
