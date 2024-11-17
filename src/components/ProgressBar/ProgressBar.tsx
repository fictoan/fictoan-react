// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

// STYLES ==============================================================================================================
import "./progress-bar.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface ProgressBarLabelCustomProps {
    suffix ? : string;
}

// prettier-ignore
export interface ProgressBarCustomProps {
    barBg    ? : string;
    barFill  ? : string;
    suffix   ? : string;
    height   ? : string;
    max      ? : number;    // Maximum value
}

export type ProgressBarElementType = HTMLProgressElement;
export type ProgressBarProps = Omit<CommonAndHTMLProps<ProgressBarElementType>, keyof ProgressBarCustomProps> &
    ProgressBarCustomProps;
export type ProgressBarMetaProps = Omit<CommonAndHTMLProps<HTMLDivElement>, keyof ProgressBarLabelCustomProps> &
    ProgressBarLabelCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ProgressBar = React.forwardRef(
    (
        {
            label,
            value,
            height,
            max = 100,
            ...props
        }: ProgressBarProps, ref: React.Ref<ProgressBarElementType>) => {
        const validValue   = Math.max(0, Math.min(max, Number(value) || 0));
        const progressText = `${validValue}${props.suffix || ""}`;

        return (
            <>
                {label && (
                    <Element<HTMLDivElement>
                        as="div"
                        data-progress-bar-meta
                        aria-hidden="true"
                    >
                        <Text>{label}</Text>
                        <Text>
                            {progressText}
                        </Text>
                    </Element>
                )}

                <Element<ProgressBarElementType>
                    as="progress"
                    data-progress-bar
                    ref={ref}
                    value={validValue}
                    max={max}
                    aria-label={label}
                    aria-valuemin={0}
                    aria-valuemax={max}
                    aria-valuenow={validValue}
                    aria-valuetext={`${label ? `${label}: ` : ""}${progressText}`}
                    {...props}
                    style={{ height }}
                />
            </>
        );
    },
);
