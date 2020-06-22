import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ProgressBarStyled, ProgressBarMetaStyled } from "./ProgressBar.styled"
import { Text } from "../Typography/Text";


export interface ProgressBarCustomProps {
    isThin  ? : boolean;
    barBg   ? : string;
    barFill ? : string;
    unit    ? : string;
}

export type ProgressBarElementType = HTMLProgressElement;
export type ProgressBarProps       = CommonAndHTMLProps<ProgressBarElementType> & ProgressBarCustomProps;
export type ProgressBarMetaProps   = CommonAndHTMLProps<HTMLDivElement> & ProgressBarCustomProps;

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
            {
                label &&
                <Element<ProgressBarMetaProps>
                    as={ProgressBarMetaStyled}
                    { ...props }
                >
                    <Text>{label}</Text>
                    <Text>{value}</Text>
                </Element>
            }
            <Element<ProgressBarElementType>
                as={ProgressBarStyled}
                classNames={classNames}
                value={value}
                {...props}
            />
        </div>
    );
}
