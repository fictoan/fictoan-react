import React, { ChangeEvent, HTMLProps } from "react";
declare type RadioGroupProps = HTMLProps<HTMLInputElement> & {
    options: object[];
    onChange: () => void;
    defaultSelected: string;
};
declare class RadioGroup extends React.Component<RadioGroupProps, {
    selected: string;
    options: {
        id: string;
        value: string;
    }[];
}> {
    constructor(props: RadioGroupProps);
    onSelect(event: ChangeEvent<HTMLDivElement>, id: string): void;
    render(): JSX.Element[];
}
export default RadioGroup;
