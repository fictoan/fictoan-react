// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { InputLabel } from "../InputLabel/InputLabel";
import { Text } from "../../Typography/Text";

// STYLES ==============================================================================================================
import "./range.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";
import { InputCommonProps } from "../BaseInputComponent/constants";

export interface RangeCustomProps {
    min      ? : number;
    max      ? : number;
    step     ? : number;
    suffix   ? : string;
    onChange ?: (value: number) => void;
}

export type RangeElementType = HTMLInputElement;
export type RangeProps = Omit<CommonAndHTMLProps<RangeElementType>, "onChange"> & InputCommonProps & RangeCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Range = React.forwardRef(({ label, value, suffix, onChange, ...props }: RangeProps,
     ref: React.Ref<RangeElementType>
    ) => {
    const handleChange = (value: string) => {
        // Convert the string to a number and call our number handler
        onChange?.(parseFloat(value));
    };

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
                    value={value?.toString()} // Clever, eh?
                    onChange={handleChange}
                    {...props}
                />
            </Element>
        );
    });
