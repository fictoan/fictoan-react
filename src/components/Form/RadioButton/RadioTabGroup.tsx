// FRAMEWORK ===========================================================================================================
import React, { useMemo, useRef, useEffect, useState, ChangeEvent } from "react";

// FICTOAN =============================================================================================================
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./radio-tab-group.css";

// TYPES ===============================================================================================================
import { RadioTabGroupProps, RadioGroupProps, RadioButtonElementType } from "./constants";

interface IndicatorPosition {
    width     : number;
    transform : string;
}

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
const RadioTabGroupOptions = (
    {
        id,
        name,
        options,
        defaultValue,
        value,
        required,
        onChange,
        ...props
    }: RadioGroupProps) => {
    const derivedName = useMemo(() => name || id, [name, id]);
    const [indicatorPos, setIndicatorPos] = useState<IndicatorPosition>({ width: 0, transform: "translateX(0)" });
    const labelsRef = useRef<(HTMLLabelElement | null)[]>([]);

    // Update indicator position based on selected radio
    useEffect(() => {
        const selectedIndex = options.findIndex(option => option.value === value);
        if (selectedIndex >= 0) {
            const label = labelsRef.current[selectedIndex];
            if (label) {
                const width = label.offsetWidth;
                let transform = "translateX(0)";

                if (selectedIndex > 0) {
                    const offset = labelsRef.current
                        .slice(0, selectedIndex)
                        .reduce((acc, label) => acc + (label?.offsetWidth || 0), 0);
                    transform = `translateX(${offset}px)`;
                }

                setIndicatorPos({ width, transform });
            }
        }
    }, [value, options]);

    return (
        <Div data-radio-tab-group name={derivedName} required={required}>
            <div
                className="indicator"
                style={{
                    width: `${indicatorPos.width}px`,
                    transform: indicatorPos.transform,
                }}
            />
            {options.map((option, index) => {
                const { id: optionId, ...optionProps } = option;
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
                            onChange={onChange}
                        />
                        <label
                            ref={el => labelsRef.current[index] = el}
                            htmlFor={finalId}
                        >
                            {option.label}
                        </label>
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
    },
);
