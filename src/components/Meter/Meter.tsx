import React from "react";

import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";
import { CommonAndHTMLProps } from "../Element/constants";

import "./meter.css";

// prettier-ignore
export interface MeterLabelCustomProps {
    suffix ? : string;
}

// prettier-ignore
export interface MeterCustomProps {
    min                 : number;
    max                 : number;
    low                 : number;
    high                : number;
    optimum           ? : number;
    showOptimumMarker ? : boolean;
    barBg             ? : string;
    barFill           ? : string;
    suffix            ? : string;
    height            ? : string;
}

export type MeterElementType = HTMLMeterElement;
export type MeterProps = Omit<CommonAndHTMLProps<MeterElementType>, keyof MeterCustomProps> &
    MeterCustomProps;
export type MeterMetaProps = Omit<CommonAndHTMLProps<HTMLDivElement>, keyof MeterLabelCustomProps> &
    MeterLabelCustomProps;

export const Meter = React.forwardRef(
    ({
         label, value, height, suffix, showOptimumMarker, ...props
    }: MeterProps, ref: React.Ref<MeterElementType>) => {
        const optimumPositionPercent = ((props.optimum ? props.optimum : 0 - props.min) / (props.max - props.min)) * 100;

        return (
            <>
                {label && (
                    <Element<HTMLDivElement>
                        as="div"
                        data-meter-meta
                    >
                        <Text>{label}</Text>
                        <Text>
                            {value}
                            {suffix && suffix}
                        </Text>
                    </Element>
                )}

                <div className="meter-wrapper">
                    <Element<MeterElementType>
                        as="meter"
                        data-meter
                        ref={ref}
                        value={value}
                        {...props}
                        title={suffix}
                        style={{ height : height }}
                    />
                    {showOptimumMarker && (
                        <div
                            className="optimum-marker"
                            style={{ left: `calc(${optimumPositionPercent}% - var(--meter-border-width))` }}
                            title={`Optimum: ${props.optimum}`}
                        />
                    )}
                </div>
            </>
        );
    }
);
