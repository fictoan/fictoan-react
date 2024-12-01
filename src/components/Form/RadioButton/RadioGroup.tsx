// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { RadioButton } from "./RadioButton";
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// TYPES ===============================================================================================================
import { RadioGroupProps } from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const RadioGroupOptions = ({ id, name, options, defaultValue, required, ...props }: RadioGroupProps) => {
    // Use ID as default for name if not provided
    const derivedName = useMemo(() => name || id, [name, id]);

    return (
        <Element as="div" required={required}>
            {options.map((option, index) => {
                const { id: optionId, ...optionProps } = option;
                // Derive option id if not provided
                const finalId = optionId || `${id}-option-${index}`;

                return (
                    <RadioButton
                        key={finalId}
                        {...props}
                        {...optionProps}
                        id={finalId}
                        name={derivedName} // Pass group's name to all radio buttons
                    />
                );
            })}
        </Element>
    );
};

export const RadioGroup = React.forwardRef((props: RadioGroupProps, ref: React.Ref<HTMLDivElement>) => {
    return <BaseInputComponent<HTMLDivElement> as={RadioGroupOptions} ref={ref} {...props} />;
});
