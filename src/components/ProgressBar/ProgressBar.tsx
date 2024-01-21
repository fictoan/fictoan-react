import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";
import { Text } from "../Typography/Text";

import "./progress-bar.css";

// prettier-ignore
export interface ProgressBarLabelCustomProps {
    suffix ? : string;
}

// prettier-ignore
export interface ProgressBarCustomProps {
    barBg   ? : string;
    barFill ? : string;
    suffix  ? : string;
    height  ? : string;
}

export type ProgressBarElementType = HTMLProgressElement;
export type ProgressBarProps = Omit<CommonAndHTMLProps<ProgressBarElementType>, keyof ProgressBarCustomProps> &
    ProgressBarCustomProps;
export type ProgressBarMetaProps = Omit<CommonAndHTMLProps<HTMLDivElement>, keyof ProgressBarLabelCustomProps> &
    ProgressBarLabelCustomProps;

export const ProgressBar = React.forwardRef(
    ({ label, value,  height, ...props }: ProgressBarProps, ref: React.Ref<ProgressBarElementType>) => {
        return (
            <>
                {label && (
                    <Element<HTMLDivElement>
                        as="div"
                        data-progress-bar-meta
                    >
                        <Text>{label}</Text>
                        <Text>
                            {value}
                            {props.suffix && props.suffix}
                        </Text>
                    </Element>
                )}
                <Element<ProgressBarElementType>
                    as="progress"
                    data-progress-bar
                    ref={ref}
                    value={value}
                    {...props}
                    style={{ height : height }}
                />
            </>
        );
    }
);
