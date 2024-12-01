// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./radio-tab-group.css";

// TYPES ===============================================================================================================
import { RadioTabGroupProps, RadioGroupProps, RadioButtonElementType } from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const RadioTabGroupOptions = ({ id, name, options, defaultValue, value, required, ...props }: RadioGroupProps) => {
    // Use ID as default for name if not provided
    const derivedName = useMemo(() => name || id, [name, id]);

    return (
        <Div data-radio-tab-group name={derivedName} required={required}>
            {options.map((option, index) => {
                const { id: optionId, ...optionProps } = option;
                // Derive option id if not provided
                const finalId = optionId || `${id}-option-${index}`;

                return (
                    <React.Fragment key={finalId}>
                        <input
                            type="radio"
                            {...props}
                            {...optionProps}
                            id={finalId}
                            name={derivedName}
                            checked={value === option.value}
                        />
                        <label htmlFor={finalId}>{option.label}</label>
                    </React.Fragment>
                );
            })}
        </Div>
    );
};

export const RadioTabGroup = React.forwardRef(
    ({ size = "medium", ...props }: RadioTabGroupProps, ref: React.Ref<HTMLDivElement>) => {
        let classNames = [];

        if (size) {
            classNames.push(`size-${size}`);
        }

        return (
            <BaseInputComponent<RadioButtonElementType>
                as={RadioTabGroupOptions}
                ref={ref}
                classNames={classNames}
                bgColour={props.bgColour}
                {...props}
            />
        );
    }
);
