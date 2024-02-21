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
    min       : number;
    max       : number;
    low       : number;
    high      : number;
    optimum   : number;
    barBg   ? : string;
    barFill ? : string;
    suffix  ? : string;
    height  ? : string;
}

export type MeterElementType = HTMLMeterElement;
export type MeterProps = Omit<CommonAndHTMLProps<MeterElementType>, keyof MeterCustomProps> &
    MeterCustomProps;
export type MeterMetaProps = Omit<CommonAndHTMLProps<HTMLDivElement>, keyof MeterLabelCustomProps> &
    MeterLabelCustomProps;

export const Meter = React.forwardRef(
    ({ label, value,  height, suffix, ...props }: MeterProps, ref: React.Ref<MeterElementType>) => {
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

                <Element<MeterElementType>
                    as="meter"
                    data-meter
                    ref={ref}
                    value={value}
                    {...props}
                    title={suffix}
                    style={{ height : height }}
                />
            </>
        );
    }
);
