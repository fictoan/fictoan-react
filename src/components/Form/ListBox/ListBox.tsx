// FRAMEWORK ===========================================================================================================
import React, {
    useState,
    useRef,
    useEffect,
    MutableRefObject,
    KeyboardEvent,
} from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { Div } from "../../Element/Tags";
import { InputField } from "../InputField/InputField";
import { Badge } from "../../Badge/Badge";
import { Text } from "../../Typography/Text";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// HOOKS ===============================================================================================================
import { useClickOutside } from "../../../hooks/UseClickOutside";

// UTILS ===============================================================================================================
import { searchOptions } from "./listBoxUtils";

// STYLES ==============================================================================================================
import "./list-box.css";

// TYPES ===============================================================================================================
import { ListBoxProps, OptionForListBoxProps, ListBoxElementType, ListBoxCustomProps } from "./constants";

const ListBoxWithOptions = (
    {
        options,
        label,
        placeholder = "Select an option",
        id,
        defaultValue,
        onChange,
        disabled,
        badgeBgColour,
        badgeBgColor,
        badgeTextColour,
        badgeTextColor,
        selectionLimit,
        allowMultiSelect = false,
        allowCustomEntries = false,
        isLoading,
        value,
        isFullWidth,
        className,
        ...props
    }: ListBoxCustomProps & { className ? : string }) => {

    // STATES ==========================================================================================================
    const [ isOpen, setIsOpen ]                   = useState(false);
    const [ searchValue, setSearchValue ]         = useState("");
    const [ activeIndex, setActiveIndex ]         = useState(-1);

    const selectedOptions = value
        ? (Array.isArray(value)
            ? options.filter(opt => value.includes(opt.value))
            : options.filter(opt => opt.value === value))
        : [];

    // Set initial value ===============================================================================================
    useEffect(() => {
        if (defaultValue && onChange) {
            onChange(defaultValue);
        }
    }, []);

    // REFS ============================================================================================================
    const dropdownRef    = useRef() as MutableRefObject<HTMLSelectElement>;
    const searchInputRef = useRef<HTMLInputElement>(null);

    // CONSTANTS =======================================================================================================
    const listboxId       = id || `listbox-${Math.random().toString(36).substring(2, 9)}`;
    const filteredOptions = searchOptions(options, searchValue);

    // SELECT AN OPTION ================================================================================================
    const handleSelectOption = (option: OptionForListBoxProps) => {
        let valueToEmit: string | string[];

        if (allowMultiSelect) {
            const isSelected = selectedOptions.some(opt => opt.value === option.value);
            valueToEmit = isSelected
                ? selectedOptions
                    .filter(opt => opt.value !== option.value)
                    .map(opt => opt.value)
                : [...selectedOptions.map(opt => opt.value), option.value];
        } else {
            valueToEmit = option.value;
            setIsOpen(false);
        }

        // Create a synthetic event that BaseInputComponent will understand
        const syntheticEvent = {
            target: {
                value: valueToEmit
            }
        } as React.ChangeEvent<HTMLInputElement>;
        // @ts-ignore
        onChange?.(syntheticEvent);
    };

    // SEARCH ==========================================================================================================
    const handleSearchChange = (valueOrEvent: string | React.FormEvent<HTMLInputElement>) => {
        const value = typeof valueOrEvent === "string"
            ? valueOrEvent
            : (valueOrEvent.target as HTMLInputElement).value;
        setSearchValue(value);
    };

    // CUSTOM ENTRY ====================================================================================================
    const handleCustomEntry = () => {
        if (!searchValue.trim() || !allowCustomEntries) return;

        const customOption: OptionForListBoxProps = {
            value : searchValue.trim(),
            label : searchValue.trim(),
        };

        handleSelectOption(customOption);
        setSearchValue("");
        setActiveIndex(-1);
    };

    // REMOVE AN OPTION ================================================================================================
    const handleDeleteOption = (valueToRemove: string) => {
        const valueToEmit = selectedOptions
            .filter(opt => opt.value !== valueToRemove)
            .map(opt => opt.value);
        onChange?.(valueToEmit);
    };

    // ARROW KEYS ======================================================================================================
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                    setActiveIndex(0);
                } else {
                    setActiveIndex(prev =>
                        prev < filteredOptions.length - 1 ? prev + 1 : prev,
                    );
                }
                break;

            case "ArrowUp":
                event.preventDefault();
                setActiveIndex(prev => prev > 0 ? prev - 1 : prev);
                break;

            case "Enter":
                event.preventDefault();
                if (allowCustomEntries && searchValue.trim()) {
                    const exactMatch = filteredOptions.find(opt =>
                        opt.label.toLowerCase() === searchValue.trim().toLowerCase(),
                    );
                    if (exactMatch) {
                        handleSelectOption(exactMatch);
                    } else {
                        handleCustomEntry();
                    }
                } else if (activeIndex >= 0 && filteredOptions[activeIndex]) {
                    handleSelectOption(filteredOptions[activeIndex]);
                }
                break;

            case "Escape":
                event.preventDefault();
                setIsOpen(false);
                setActiveIndex(-1);
                break;

            case " ":
                if (!isOpen) {
                    event.preventDefault();
                    setIsOpen(true);
                    setActiveIndex(0);
                }
                break;
        }
    };

    // CLICK OUTSIDE HANDLING ==========================================================================================
    useClickOutside(dropdownRef, () => {
        setIsOpen(false);
        setActiveIndex(-1);
    });

    // FOCUS MANAGEMENT ================================================================================================
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [ isOpen ]);

    // SCROLL ACTIVE OPTION INTO VIEW ==================================================================================
    useEffect(() => {
        if (activeIndex >= 0) {
            const activeOption = document.querySelector(`[data-index="${activeIndex}"]`);
            activeOption?.scrollIntoView({ block: "nearest" });
        }
    }, [activeIndex]);

    return (
        // PARENT //////////////////////////////////////////////////////////////////////////////////////////////////////
        <Element
            as="div"
            data-list-box
            classNames={["list-box-wrapper", disabled ? "disabled" : "", className || ""]}
            ref={dropdownRef}
            {...props}
        >
            <Div
                className="list-box-input-wrapper"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={`${listboxId}-listbox`}
                aria-owns={`${listboxId}-listbox`}
                tabIndex={disabled ? -1 : 0}
            >
                {allowMultiSelect ? (
                    <>
                        {selectedOptions.length > 0 ? (
                            <Div className="options-wrapper">
                                <Div className="options-list">
                                    {selectedOptions.map(option => (
                                        <Badge
                                            key={option.value}
                                            withDelete={allowMultiSelect}
                                            onDelete={() => handleDeleteOption(option.value)}
                                            size="small"
                                            shape="rounded"
                                            bgColour={badgeBgColour || badgeBgColor}
                                            textColour={badgeTextColour || badgeTextColor}
                                        >
                                            {option.label}
                                        </Badge>
                                    ))}
                                </Div>
                                {selectionLimit && selectedOptions.length >= selectionLimit && (
                                    <Text className="options-limit-warning" textColour="red" size="small">
                                        You can choose only {selectionLimit} option{selectionLimit === 1 ? "" : "s"}
                                    </Text>
                                )}
                            </Div>
                        ) : (
                            <span className="placeholder">{placeholder}</span>
                        )}
                    </>
                ) : (
                    selectedOptions[0]
                        ? <Text className="selected-option">{selectedOptions[0].label}</Text>
                        : <span className="placeholder">{placeholder}</span>
                )}

                <Div className="icon-wrapper chevrons">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="6 9 12 4 18 9"></polyline>
                        <polyline points="6 15 12 20 18 15"></polyline>
                    </svg>
                </Div>
            </Div>

            {/* DROPDOWN /////////////////////////////////////////////////////////////////////////////////////////// */}
            {isOpen && !disabled && (
                <Div className="list-box-dropdown">
                    <Div className="list-box-search-wrapper">
                        <InputField
                            type="text"
                            ref={searchInputRef}
                            className="list-box-search"
                            placeholder="Search"
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            aria-controls={`${listboxId}-listbox`}
                            aria-label="Search options"
                        />
                        {allowCustomEntries && searchValue.trim() && !selectedOptions.some(opt =>
                            opt.label.toLowerCase() === searchValue.trim().toLowerCase()) && (
                            <kbd
                                className="list-box-enter-key"
                                aria-label="Press Enter to add custom option"
                            >
                                ↵
                            </kbd>
                        )}
                    </Div>

                    {/* OPTIONS //////////////////////////////////////////////////////////////////////////////////// */}
                    <Element
                        as="ul"
                        id={`${listboxId}-listbox`}
                        className="list-box-options"
                        role="listbox"
                        aria-multiselectable={allowMultiSelect}
                        aria-busy={isLoading}
                        tabIndex={-1}
                    >
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <li
                                    key={option.value}
                                    id={`${listboxId}-option-${option.value}`}
                                    className={`list-box-option ${option.disabled ? "disabled" : ""} ${activeIndex === index ? "active" : ""}`}
                                    role="option"
                                    aria-selected={selectedOptions.some(opt => opt.value === option.value)}
                                    aria-disabled={option.disabled}
                                    onClick={() => handleSelectOption(option)}
                                    data-index={index}
                                    tabIndex={-1}
                                >
                                    {option.customLabel || option.label}
                                </li>
                            ))
                        ) : (
                            <li
                                className="list-box-option disabled"
                                role="alert"
                                aria-live="polite"
                            >
                                No matches found
                            </li>
                        )}
                    </Element>
                </Div>
            )}
        </Element>
    );
};

// MAIN LISTBOX COMPONENT //////////////////////////////////////////////////////////////////////////////////////////////
export const ListBox = React.forwardRef<ListBoxElementType, ListBoxProps>((props, ref) => {
    const handleChange = (valueOrEvent: string | string[] | React.ChangeEvent<HTMLInputElement>) => {
        // Handle both direct values and events
        const value = typeof valueOrEvent === "object" && "target" in valueOrEvent
            ? valueOrEvent.target.value
            : valueOrEvent;

        props.onChange?.(value);
    };

    return (
        <BaseInputComponent<ListBoxElementType>
            as={ListBoxWithOptions}
            ref={ref}
            {...props}
            onChange={handleChange}
        />
    );
});
