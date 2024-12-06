// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Div } from "../../Element/Tags";
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// TYPES ===============================================================================================================
import { RadioGroupProps } from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    const RadioGroupOptions = (
        {
            id,
            name,
            options,
            value,
            defaultValue,
            onChange,
            ...groupProps
        }: RadioGroupProps) => {
        const derivedName = React.useMemo(() => name || id, [ name, id ]);

        console.log("RadioGroup render:", {
            groupName    : name,
            currentValue : value,
            defaultValue,
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(e.target.value);
            }
        };

        return (
            <Element as="div">
                {options.map((option, index) => {
                    const { id: optionId, value: optionValue, label, ...optionProps } = option;
                    const finalId = optionId || `${id}-option-${index}`;
                    const isChecked = value ? value === optionValue : defaultValue === optionValue;

                    return (
                        <Div
                            key={finalId}
                            data-radio-button
                            role="radio"
                            aria-checked={isChecked}
                        >
                            <input
                                type="radio"
                                id={finalId}
                                name={derivedName}
                                value={optionValue}
                                checked={isChecked}
                                onChange={handleChange}
                                {...optionProps}
                            />
                            <label htmlFor={finalId}>{label}</label>
                        </Div>
                    );
                })}
            </Element>
        );
    };

    return (
        <BaseInputComponent<HTMLDivElement>
            as={RadioGroupOptions}
            ref={ref}
            {...props}
        />
    );
});
