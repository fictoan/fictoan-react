import { HTMLProps } from "react";

import { BaseAndHTMLProps } from "../../BaseComponent/constants";

export type SelectElementType = HTMLSelectElement;
export type OptionElementType = HTMLOptionElement;

interface SelectCustomProps {
    options: BaseAndHTMLProps<OptionElementType>[];
    fullWidth?: boolean;
}

export type SelectProps = BaseAndHTMLProps<SelectElementType> & SelectCustomProps;
export type OptionProps = BaseAndHTMLProps<SelectElementType>;
