// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

// STYLES ==============================================================================================================
import "./meter.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface MeterLabelCustomProps {
    suffix? : string;
}

// prettier-ignore
export interface MeterCustomProps extends Omit<CommonAndHTMLProps<HTMLMeterElement>, "value"> {
    min                 : number;
    max                 : number;
    low                 : number;
    high                : number;
    value               : number;
    optimum           ? : number;
    showOptimumMarker ? : boolean;
    barBg             ? : string;
    barFill           ? : string;
    suffix            ? : string;
    height            ? : string;
    ariaLabel         ? : string;
    description       ? : string;
}

export type MeterElementType = HTMLMeterElement;
export type MeterProps = MeterCustomProps;
export type MeterMetaProps = Omit<CommonAndHTMLProps<HTMLDivElement>, keyof MeterLabelCustomProps> &
                             MeterLabelCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Meter = React.forwardRef(
    ({
        label,
        value,
        height,
        suffix,
        showOptimumMarker,
        ariaLabel,
        description,
        min,
        max,
        low,
        high,
        optimum,
        ...props
    } : MeterProps, ref : React.Ref<MeterElementType>) => {
        // CALCULATE OPTIMUM MARKER POSITION ===========================================================================
        const optimumPositionPercent = optimum ? (
            (
                optimum - min
            ) / (
                max - min
            )
        ) * 100 : 0;

        // GENERATE DESCRIPTIVE STATUS STRING ==========================================================================
        const getValueDescription = () => {
            const percentage = (
                (
                    value - min
                ) / (
                    max - min
                )
            ) * 100;
            let status : string;

            if (value <= low) {
                status = "Low";
            } else if (value >= high) {
                status = "High";
            } else {
                status = "Normal";
            }

            return `Current value is ${value}${suffix || ""} (${percentage.toFixed(1)}%). Status: ${status}`;
        };

        return (
            <div
                role="region"
                aria-label={ariaLabel || "Meter indicator"}
            >
                {label && (
                    <Element<HTMLDivElement>
                        as="div"
                        data-meter-meta
                        id={`meter-label-${label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                        <Text>{label}</Text>
                        <Text>
                            {value}
                            {suffix && suffix}
                        </Text>
                    </Element>
                )}

                <div
                    className="meter-wrapper"
                    role="presentation"
                >
                    <Element<MeterElementType>
                        as="meter"
                        data-meter
                        ref={ref}
                        value={value}
                        min={min}
                        max={max}
                        low={low}
                        high={high}
                        {...props}
                        title={suffix}
                        style={{ height }}
                        aria-label={label || ariaLabel || "Progress meter"}
                        aria-valuemin={min}
                        aria-valuemax={max}
                        aria-valuenow={value}
                        aria-valuetext={getValueDescription()}
                        aria-describedby={description ? `meter-description-${label?.toLowerCase()
                            .replace(/\s+/g, "-")}` : undefined}
                    />

                    {showOptimumMarker && optimum && (
                        <div
                            className="optimum-marker"
                            style={{ left : `calc(${optimumPositionPercent}% - var(--meter-border-width))` }}
                            title={`Optimum: ${optimum}`}
                            role="presentation"
                            aria-hidden="true"
                        />
                    )}
                </div>

                {description && (
                    <div
                        id={`meter-description-${label?.toLowerCase().replace(/\s+/g, "-")}`}
                        className="sr-only"
                    >
                        {description}
                    </div>
                )}
            </div>
        );
    },
);
