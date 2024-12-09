// FRAMEWORK ===========================================================================================================
import React, { useMemo, useRef, useEffect, useState, useCallback } from "react";

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

    const containerRef = useRef<HTMLDivElement>(null);
    const formItemRef = useRef<HTMLDivElement>(null);
    const [needsScroll, setNeedsScroll] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    // Function to measure and determine if scrolling is needed
    const measureWidths = useCallback(() => {
        const container = containerRef.current;
        const formItem = container?.closest("[data-form-item]");

        if (container && formItem) {
            const containerWidth = container.scrollWidth;
            const formItemWidth = formItem.clientWidth;
            const needsToScroll = containerWidth > formItemWidth;

            setNeedsScroll(needsToScroll);
            if (needsToScroll) {
                setMaxScroll(containerWidth - formItemWidth);
            }
        }
    }, []);

    // Set up resize observer
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(measureWidths);
        observer.observe(container);
        observer.observe(container.closest("[data-form-item]") as Element);

        return () => observer.disconnect();
    }, [measureWidths]);

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

    // Handle change to emit the selected value directly
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <Div
            data-radio-tab-group
            name={derivedName}
            required={required}
            className={needsScroll ? "needs-scroll" : ""}
        >
            {/* SELECTED OPTION INDICATOR ////////////////////////////////////////////////////////////////////////// */}
            <Div
                className="indicator"
                style={{
                    width: `${indicatorPos.width}px`,
                    transform: indicatorPos.transform,
                }}
            />

            {/* LEFT SCROLL BUTTON ///////////////////////////////////////////////////////////////////////////////// */}
            {needsScroll &&
                <Div className="scroll-button left">
                    <svg viewBox="0 0 24 24">
                        <polyline points="15 18  9 12  15 6" />
                    </svg>
                </Div>
            }

            {/* RADIO OPTIONS ////////////////////////////////////////////////////////////////////////////////////// */}
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
                            onChange={handleChange}
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

            {/* RIGHT SCROLL BUTTON //////////////////////////////////////////////////////////////////////////////// */}
            {needsScroll &&
                <Div className="scroll-button right">
                    <svg viewBox="0 0 24 24">
                        <polyline points="9 6  15 12  9 18" />
                    </svg>
                </Div>
            }
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
