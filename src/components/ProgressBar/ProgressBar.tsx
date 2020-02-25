import React from "react";

import { createClassName } from "src/utils/classNames";
import { Element } from "../Element/Element";

import { Text } from "../Typography/Text";

import { ProgressBarStyled } from "./ProgressBar.styled"
import { ProgressBarProps, ProgressBarElementType } from "./constants";

export const ProgressBar = ({ className, label, value, ...props }: ProgressBarProps) => {

    const classNames = [ className ];

    return (
        <div>
            <Text className="progress-label">{label}</Text>
            <Element<ProgressBarElementType>
                as={ProgressBarStyled}
                className={createClassName(classNames)}
                value={value}
                {...props}
            />
        </div>
    );
}
