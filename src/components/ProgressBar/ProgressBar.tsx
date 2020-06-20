import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ProgressBarStyled } from "./ProgressBar.styled"
import { Text } from "../Typography/Text";


export interface ProgressBarCustomProps {
    isThin  ? : boolean;
    barBg   ? : string;
    barFill ? : string;
}

export type ProgressBarElementType = HTMLProgressElement;
export type ProgressBarProps       = CommonAndHTMLProps<ProgressBarElementType> & ProgressBarCustomProps;

export const ProgressBar = ({
    label,
    value,
    isThin,
    ...props
}: ProgressBarProps) => {
    let classNames = [];

    if (isThin) {
        classNames.push("is-thin");
    }

    return (
        <div>
            <Text className="progress-label">{label}</Text>
            <Text className="progress-value">{value}</Text>
            <Element<ProgressBarElementType>
                as={ProgressBarStyled}
                classNames={classNames}
                value={value}
                {...props}
            />
        </div>
    );
}
