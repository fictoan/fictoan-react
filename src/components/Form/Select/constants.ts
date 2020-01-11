import { CommonAndHTMLProps } from "../../Element/constants";

export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

interface SelectCustomProps {
    options     : CommonAndHTMLProps<OptionElementType>[];
    fullWidth ? : boolean;
}

export type OptionProps = CommonAndHTMLProps<SelectElementType>;
export type SelectProps = CommonAndHTMLProps<SelectElementType> & SelectCustomProps;
