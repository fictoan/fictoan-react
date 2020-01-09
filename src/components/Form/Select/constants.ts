import { HTMLProps } from "react";

import { CommonAndHTMLProps } from "../../Element/constants";

export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

interface SelectCustomProps {
    options: CommonAndHTMLProps<OptionElementType>[];
    fullWidth?: boolean;
}

export type SelectProps = CommonAndHTMLProps<SelectElementType> & SelectCustomProps;
export type OptionProps = CommonAndHTMLProps<SelectElementType>;
