import React from "react";

import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { Text } from "../../Typography/Text";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import "./range.css";

export interface RangeCustomProps {
    min    ? : number;
    max    ? : number;
    step   ? : number;
    suffix ? : string;
}

export type RangeElementType = HTMLInputElement;
export type RangeProps = Omit<BaseInputComponentProps<RangeElementType>, "as"> & RangeCustomProps;

export const Range = React.forwardRef(({ label, value, suffix, ...props }: RangeProps, ref: React.Ref<RangeElementType>) => {
    return (
        <Div data-range>
            {label && (
                <Div data-range-meta>
                    <Text>{label}</Text>
                    <Text>
                        {value}
                        {suffix && suffix}
                    </Text>
                </Div>
            )}

            <Element<RangeElementType>
                as="input"
                type="range"
                value={value}
                ref={ref}
                {...props}
            />
        </Div>
    );
});

