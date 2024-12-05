// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { RadioButton } from "./RadioButton";
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// TYPES ===============================================================================================================
import { RadioGroupProps } from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const RadioGroupOptions = (
    {
        id,
        name,
        options,
        value,
        defaultValue,
        onChange,
        ...props
    }: RadioGroupProps) => {

    // Use ID as default for name if not provided
    const derivedName = React.useMemo(() => name || id, [ name, id ]);

    // Handle individual radio button changes
    const handleRadioChange = (optionValue: string) => {
        onChange?.(optionValue);
    };

    return (
        <Element as="div">
            {options.map((option, index) => {
                const { id : optionId, value : optionValue, ...optionProps } = option;

                // Derive option id if not provided
                const finalId = optionId || `${id}-option-${index}`;

                return (
                    <RadioButton
                        key={finalId}
                        {...props}
                        {...optionProps}
                        id={finalId}
                        name={derivedName}
                        value={optionValue}
                        checked={value ? value === optionValue : defaultValue === optionValue}
                        onChange={() => handleRadioChange(optionValue)}
                    />
                );
            })}
        </Element>
    );
};

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return <BaseInputComponent<HTMLDivElement> as={RadioGroupOptions} ref={ref} {...props} />;
});
