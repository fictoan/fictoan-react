// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./radio-group.css";

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

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(e.target.value);
            }
        };

        return (
            <React.Fragment>
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
                            classNames={classNames}
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
            </React.Fragment>
        );
    };

    let classNames: string[] | undefined = [];

    if (props.align) {
        classNames.push(`align-${props.align}`);
    }

    if (props.equaliseWidth || props.equalizeWidth) {
        classNames.push(`equalise-width`);
    }

    return (
        <BaseInputComponent<HTMLDivElement>
            data-radio-group
            as={RadioGroupOptions}
            ref={ref}
            {...props}
            classNames={classNames}
        />
    );
});
