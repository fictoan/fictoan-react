// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./checkbox.css";

// TYPES ===============================================================================================================
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

export type CheckboxElementType = HTMLInputElement;
export type CheckboxProps = Omit<BaseInputComponentProps<CheckboxElementType>, "as">;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Checkbox = React.forwardRef(
    ({ id, name, value, ...props }: CheckboxProps, ref: React.Ref<CheckboxElementType>) => {
        // Use ID as default for name and value if they’re not provided
        const derivedName = useMemo(() => name || id, [name, id]);
        const derivedValue = useMemo(() => value || id, [value, id]);

        return (
            <Element<CheckboxElementType> as="div" data-checkbox ref={ref}>
                <BaseInputComponent
                    as="input"
                    type="checkbox"
                    id={id}
                    name={derivedName}
                    value={derivedValue}
                    {...props}
                />
            </Element>
        );
    }
);
