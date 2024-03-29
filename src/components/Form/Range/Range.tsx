import React from "react";

import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { InputLabel } from "../InputLabel/InputLabel";
import { Text } from "../../Typography/Text";

import "./range.css";

import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";

export interface RangeCustomProps {
    min    ? : number;
    max    ? : number;
    step   ? : number;
    suffix ? : string;
}

export type RangeElementType = HTMLInputElement;
// export type RangeProps = Omit<BaseInputComponentProps<RangeElementType>, "as"> & RangeCustomProps;
export type RangeProps = CommonAndHTMLProps<RangeElementType> & InputCommonProps & RangeCustomProps;

export const Range = React.forwardRef(({ label, value, suffix, ...props }: RangeProps, ref: React.Ref<RangeElementType>) => {
    return (
        <Element<RangeElementType> data-range ref={ref}>
            {label && (
                <Div data-range-meta>
                    <InputLabel className="range-label" label={label} htmlFor={props.id} />
                    <Text className="range-value">
                        {value}
                        {suffix && suffix}
                    </Text>
                </Div>
            )}

            <BaseInputComponent
                as="input"
                type="range"
                value={value}
                {...props}
            />
        </Element>
    );
});
