import React, { HTMLProps } from "react";
declare function RadioButton(prop: HTMLProps<HTMLInputElement> & {
    id: string;
    value: string;
    onSelected: (event: React.ChangeEvent<HTMLDivElement>, id: string) => void;
    isChecked: boolean;
}): JSX.Element;
export default RadioButton;
