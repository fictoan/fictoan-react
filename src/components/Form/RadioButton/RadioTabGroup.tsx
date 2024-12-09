// FRAMEWORK ===========================================================================================================
import React, { useMemo, useRef, useEffect, useState, useCallback } from "react";

// FICTOAN =============================================================================================================
import { Div } from "../../Element/Tags";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./radio-tab-group.css";

// TYPES ===============================================================================================================
import { RadioTabGroupProps, RadioGroupProps, RadioButtonElementType } from "./constants";
import { BaseInputComponentProps } from "components/Form/BaseInputComponent/constants";

interface IndicatorPosition {
    width     : number;
    transform : string;
}

interface ExtendedRadioGroupProps extends Omit<RadioGroupProps, "as"> {
    onMeasure: (needsScroll: boolean, maxScroll: number) => void;
    optionsWrapperRef: React.RefObject<HTMLDivElement>;
}

type RadioTabBaseProps = BaseInputComponentProps<HTMLDivElement> & ExtendedRadioGroupProps;

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
        onMeasure,
        optionsWrapperRef,
        ...props
    }: ExtendedRadioGroupProps & {
        onMeasure: (needsScroll: boolean, maxScroll: number) => void;
        optionsWrapperRef: React.RefObject<HTMLDivElement>;
    }) => {
    const derivedName = useMemo(() => name || id, [name, id]);
    const [indicatorPos, setIndicatorPos] = useState<IndicatorPosition>({ width: 0, transform: "translateX(0)" });
    const labelsRef = useRef<(HTMLLabelElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Function to measure and determine if scrolling is needed
    const measureWidths = useCallback(() => {
        if (!optionsWrapperRef.current) return;

        const wrapper = optionsWrapperRef.current;
        const formItem = wrapper.closest("[data-form-item]");

        if (wrapper && formItem) {
            const totalContentWidth = wrapper.scrollWidth;
            const availableWidth = formItem.clientWidth;
            const needsToScroll = totalContentWidth > availableWidth;

            // Call onMeasure with the scroll status and max scroll amount
            onMeasure(
                needsToScroll,
                needsToScroll ? totalContentWidth - availableWidth : 0
            );
        }
    }, [onMeasure]);

    // Set up resize observer
    useEffect(() => {
        const wrapper = optionsWrapperRef.current;
        if (!wrapper) return;

        // Initial measurement
        measureWidths();

        // Set up observer for size changes
        const observer = new ResizeObserver(() => {
            measureWidths();
        });

        observer.observe(wrapper);
        if (wrapper.closest("[data-form-item]")) {
            observer.observe(wrapper.closest("[data-form-item]") as Element);
        }

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
        >
            <Div
                className="rtg-options-wrapper"
                ref={optionsWrapperRef}
                style={{ overflow: "hidden" }}
            >
                <Div
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
            </Div>
        </Div>
    );
};

// Main RadioTabGroup component that will handle the BaseInputComponent and scroll buttons
export const RadioTabGroup = React.forwardRef(
    ({ size = "medium", ...props }: RadioTabGroupProps, ref: React.Ref<HTMLDivElement>) => {
        const [needsScroll, setNeedsScroll] = useState(false);
        const [scrollPosition, setScrollPosition] = useState(0);
        const [maxScroll, setMaxScroll] = useState(0);
        const wrapperRef = useRef<HTMLDivElement>(null);
        const optionsWrapperRef = useRef<HTMLDivElement>(null);

        // Throttle resize measurements
        const handleMeasure = useCallback((needsToScroll: boolean, maxScrollValue: number) => {
            // Only update if values have changed significantly
            setNeedsScroll(needsToScroll);
            setMaxScroll(Math.floor(maxScrollValue)); // Round down to avoid floating point issues
        }, []);

        const handleScroll = useCallback((direction: "left" | "right") => {
            const optionsWrapper = optionsWrapperRef.current;
            if (!optionsWrapper) return;

            const visibleWidth = optionsWrapper.clientWidth;
            const scrollAmount = visibleWidth * 0.8;

            let newPosition = direction === "right"
                ? Math.min(scrollPosition + scrollAmount, maxScroll)
                : Math.max(scrollPosition - scrollAmount, 0);

            setScrollPosition(newPosition);

            requestAnimationFrame(() => {
                optionsWrapper.style.transform = `translateX(-${newPosition}px)`;
            });
        }, [scrollPosition, maxScroll]);

        const canScrollLeft = scrollPosition > 0;
        const canScrollRight = scrollPosition < maxScroll;

        let classNames = [];
        if (size) {
            classNames.push(`size-${size}`);
        }

        return (
            <Div className="radio-tab-group-container" ref={wrapperRef}>
                {needsScroll && canScrollLeft && (
                    <Div
                        className="scroll-button left"
                        onClick={() => handleScroll("left")}
                    >
                        <svg viewBox="0 0 24 24">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </Div>
                )}

                <BaseInputComponent<RadioButtonElementType>
                    as={RadioTabGroupOptions}
                    ref={ref}
                    classNames={classNames}
                    bgColour={props.bgColour}
                    // @ts-ignore
                    onMeasure={handleMeasure}
                    optionsWrapperRef={optionsWrapperRef}
                    {...props}
                />

                {needsScroll && canScrollRight && (
                    <Div
                        className="scroll-button right"
                        onClick={() => handleScroll("right")}
                    >
                        <svg viewBox="0 0 24 24">
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </Div>
                )}
            </Div>
        );
    }
);
