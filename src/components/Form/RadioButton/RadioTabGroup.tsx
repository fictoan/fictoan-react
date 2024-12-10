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

interface ExtendedRadioGroupProps extends Omit<RadioGroupProps, "as"> {
    onMeasure: (needsScroll: boolean, maxScroll: number) => void;
    optionsWrapperRef: React.RefObject<HTMLDivElement>;
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
        onMeasure,
        optionsWrapperRef,
        ...props
    }: ExtendedRadioGroupProps) => {
    const derivedName                           = useMemo(() => name || id, [ name, id ]);

    const [ indicatorPos, setIndicatorPos ]     = useState<IndicatorPosition>({
        width     : 0,
        transform : "translateX(0)",
    });
    const [ needsScroll, setNeedsScroll ]       = useState(false);
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ maxScroll, setMaxScroll ]           = useState(0);

    const labelsRef                             = useRef<(HTMLLabelElement | null)[]>([]);

    // Measure and determine if scrolling is needed ====================================================================
    const measureWidths = useCallback(() => {
        if (!optionsWrapperRef.current) return;

        const wrapper      = optionsWrapperRef.current;
        const inputWrapper = wrapper.closest("[data-input-wrapper]");

        if (wrapper && inputWrapper) {
            const totalContentWidth = wrapper.scrollWidth;
            const availableWidth    = inputWrapper.clientWidth;
            const needsToScroll     = totalContentWidth > availableWidth;

            setNeedsScroll(needsToScroll);
            setMaxScroll(needsToScroll ? totalContentWidth - availableWidth : 0);
            onMeasure(needsToScroll, needsToScroll ? totalContentWidth - availableWidth : 0);
        }
    }, [ onMeasure ]);

    // Set up resize observer to measure widths on window resize =======================================================
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
        if (wrapper.closest("[data-input-wrapper]")) {
            observer.observe(wrapper.closest("[data-input-wrapper]") as Element);
        }

        return () => observer.disconnect();
    }, [ measureWidths ]);

    // Update indicator position based on selected radio
    useEffect(() => {
        const selectedIndex = options.findIndex(option => option.value === value);
        if (selectedIndex >= 0) {
            const label = labelsRef.current[selectedIndex];
            if (label) {
                const width   = label.offsetWidth;
                let transform = "translateX(0)";

                if (selectedIndex > 0) {
                    const offset = labelsRef.current
                        .slice(0, selectedIndex)
                        .reduce((acc, label) => acc + (label?.offsetWidth || 0), 0);
                    transform    = `translateX(${offset}px)`;
                }

                setIndicatorPos({ width, transform });
            }
        }
    }, [ value, options ]);

    // HANDLE RADIO CHANGE =============================================================================================
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    // SCROLL LEFT OR RIGHT ============================================================================================
    const handleScroll = useCallback((direction: "left" | "right") => {
        const optionsWrapper = optionsWrapperRef.current;
        if (!optionsWrapper) return;

        const visibleWidth = optionsWrapper.clientWidth;
        // TODO: Scroll only a few options at a time, not straight to the end
        const scrollAmount = visibleWidth * 0.8;

        let newPosition = direction === "right"
            ? Math.min(scrollPosition + scrollAmount, maxScroll)
            : Math.max(scrollPosition - scrollAmount, 0);

        setScrollPosition(newPosition);

        requestAnimationFrame(() => {
            optionsWrapper.style.transform = `translateX(-${newPosition}px)`;
        });
    }, [ scrollPosition, maxScroll ]);

    const canScrollLeft  = scrollPosition > 0;
    const canScrollRight = scrollPosition < maxScroll;

    return (
        <Div data-radio-tab-group name={derivedName} required={required}>
            {/* LEFT SCROLL BUTTON ================================================================================= */}
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

            {/* RADIO OPTIONS ====================================================================================== */}
            <Div className="rtg-options-container">
                <Div
                    className="rtg-options-wrapper"
                    ref={optionsWrapperRef}
                >
                    {/* INDICATOR ---------------------------------------------------------------------------------- */}
                    <Div
                        className="indicator"
                        style={{
                            width     : `${indicatorPos.width}px`,
                            transform : indicatorPos.transform,
                        }}
                    />

                    {options.map((option, index) => {
                        const { id : optionId, ...optionProps } = option;
                        const finalId                           = optionId || `${id}-option-${index}`;

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

                {/* RIGHT SCROLL BUTTON ============================================================================ */}
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
        </Div>
    );
};

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const RadioTabGroup = React.forwardRef(
    ({ size = "medium", ...props }: RadioTabGroupProps, ref: React.Ref<HTMLDivElement>) => {
        const optionsWrapperRef = useRef<HTMLDivElement>(null);

        // Stub for onMeasure as we handle everything in RadioTabGroupOptions now
        const handleMeasure = useCallback(() => {
        }, []);

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
                // @ts-expect-error
                onMeasure={handleMeasure}
                optionsWrapperRef={optionsWrapperRef}
                {...props}
            />
        );
    },
);
