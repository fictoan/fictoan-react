import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ProgressBarStyled, ProgressBarMetaStyled } from "./ProgressBar.styled";
import { Text } from "../Typography/Text";

// prettier-ignore
export interface ProgressBarLabelCustomProps {
    unit ? : string;
}

export interface ProgressBarCustomProps {
    barBg   ? : string;
    barFill ? : string;
    unit    ? : string;
    shape   ? : "rounded" | "curved";
}

export type ProgressBarElementType = HTMLProgressElement;
export type ProgressBarProps = CommonAndHTMLProps<ProgressBarElementType> & ProgressBarCustomProps;
export type ProgressBarMetaProps = CommonAndHTMLProps<HTMLDivElement> & ProgressBarLabelCustomProps;

export const ProgressBar = React.forwardRef(
    ({ label, value, shape, ...props }: ProgressBarProps, ref: React.Ref<ProgressBarElementType>) => {
        let classNames = [];

        if (shape) {
            classNames.push(`shape-${shape}`);
        }

        return (
            <>
                {label && (
                    <Element<HTMLDivElement> as={ProgressBarMetaStyled}>
                        <Text>{label}</Text>
                        <Text>{value}</Text>
                    </Element>
                )}
                <Element<ProgressBarElementType>
                    as={ProgressBarStyled}
                    ref={ref}
                    classNames={classNames}
                    value={value}
                    {...props}
                />
            </>
        );
    }
);
