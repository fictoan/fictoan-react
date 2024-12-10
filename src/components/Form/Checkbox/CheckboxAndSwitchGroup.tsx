// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { Checkbox } from "./Checkbox";
import { Switch } from "./Switch";

// STYLES ==============================================================================================================
import "./checkbox-and-switch-group.css";

// TYPES ===============================================================================================================
import { CheckboxProps } from "./Checkbox";
import { SwitchProps } from "./Switch";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

// COMMON GROUP OPTIONS ////////////////////////////////////////////////////////////////////////////////////////////////
interface BaseGroupOptionProps {
    id    : string;
    label : string;
    value : string;
}

// Define what props we want to exclude from the input component props when creating option props
type ExcludedInputProps = "onChange" | "checked" | "name";

// Generic type for creating option props from any input component props
type InputGroupOptionProps<T> = BaseGroupOptionProps & Omit<T, ExcludedInputProps>;

// Props specific to the group functionality
interface GroupCustomProps<T> {
    name            : string;
    options         : InputGroupOptionProps<T>[];
    value         ? : string[];
    defaultValue  ? : string[];
    onChange      ? : (values: string[]) => void;
    align         ? : "horizontal" | "vertical";
    equaliseWidth ? : boolean;
    equalizeWidth ? : boolean;
}

// Combined props for the group component
export type InputGroupProps<T> = Omit<BaseInputComponentProps<HTMLDivElement>, "value"> & GroupCustomProps<T>;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic group options component that can work with different input types ============================================
function InputGroupOptions<T>(
    {
        id,
        name,
        options,
        value,
        defaultValue,
        onChange,
        InputComponent,
        ...groupProps
    }: InputGroupProps<T> & { InputComponent: React.ComponentType<any> }) {
    const derivedName = useMemo(() => name || id, [ name, id ]);

    // Use controlled or uncontrolled value ============================================================================
    const [ selectedValues, setSelectedValues ] = React.useState<string[]>(
        value || defaultValue || [],
    );

    // Update internal state when controlled value changes =============================================================
    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValues(value);
        }
    }, [ value ]);

    // Handle individual input changes =================================================================================
    const handleChange = (optionValue: string, checked: boolean) => {
        let newValues: string[];

        if (checked) {
            newValues = [ ...selectedValues, optionValue ];
        } else {
            newValues = selectedValues.filter(v => v !== optionValue);
        }

        // Update internal state if uncontrolled
        if (value === undefined) {
            setSelectedValues(newValues);
        }

        // Notify parent using standard onChange
        onChange?.(newValues);
    };

    return (
        <Element
            as="div"
            role="group"
            aria-label={derivedName}
            {...groupProps}
        >
            {options.map((option, index) => {
                const {
                    id    : optionId,
                    value : optionValue,
                    label,
                    ...optionProps
                } = option;

                const finalId   = optionId || `${id}-option-${index}`;
                const isChecked = selectedValues.includes(optionValue);

                return (
                    <React.Fragment key={finalId}>
                        <InputComponent
                            {...optionProps}
                            id={finalId}
                            name={derivedName}
                            value={optionValue}
                            label={label}
                            checked={isChecked}
                            onChange={(checked: boolean) => handleChange(optionValue, checked)}
                        />
                    </React.Fragment>
                );
            })}
        </Element>
    );
}

// SPECIALISED GROUP COMPONENTS FOR CHECKBOX AND SWITCH ////////////////////////////////////////////////////////////////
export const CheckboxGroup = React.forwardRef<HTMLDivElement, InputGroupProps<CheckboxProps>>((props, ref) => {
    let classNames = [];

    if (props.align) {
        classNames.push(`align-${props.align}`);
    }

    if (props.equaliseWidth || props.equalizeWidth) {
        classNames.push(`equalise-width`);
    }

    return (
        <BaseInputComponent<HTMLDivElement>
            data-checkbox-group
            as={(componentProps) => <InputGroupOptions {...componentProps} InputComponent={Checkbox} />}
            classNames={classNames}
            ref={ref}
            {...props}
        />
    );
});

export const SwitchGroup = React.forwardRef<HTMLDivElement, InputGroupProps<SwitchProps>>((props, ref) => {
    let classNames = [];

    if (props.align) {
        classNames.push(`align-${props.align}`);
    }

    if (props.equaliseWidth || props.equalizeWidth) {
        classNames.push(`equalise-width`);
    }

    return (
        <BaseInputComponent<HTMLDivElement>
            data-switch-group
            as={(componentProps) => <InputGroupOptions {...componentProps} InputComponent={Switch} />}
            classNames={classNames}
            ref={ref}
            {...props}
        />
    );
});
