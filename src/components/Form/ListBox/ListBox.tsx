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
        allowMultiSelect = false,
        disabled,
        badgeBgColour,
        badgeBgColor,
        badgeTextColour,
        badgeTextColor,
        selectionLimit,
        allowCustomEntries = false,
        isLoading,
        ...props
    }: ListBoxCustomProps & { className?: string }) => {
    // STATES ====================================================================================================
    const [ isOpen, setIsOpen ]                   = useState(false);
    const [ selectedOptions, setSelectedOptions ] = useState<OptionForListBoxProps[]>([]);
    const [ searchValue, setSearchValue ]         = useState("");
    const [ activeIndex, setActiveIndex ]         = useState(-1);

    // Initialize selectedOption based on defaultValue
    const [selectedOption, setSelectedOption] = useState<OptionForListBoxProps | null>(() => {
        if (defaultValue) {
            return options.find(opt => opt.value === defaultValue) || null;
        }
        return null;
    });

    // Set initial value
    useEffect(() => {
        if (defaultValue && onChange) {
            onChange(defaultValue);
        }
    }, []);

    // REFS =====================================================================================================
    const dropdownRef    = useRef() as MutableRefObject<HTMLSelectElement>;
    const searchInputRef = useRef<HTMLInputElement>(null);

    // CONSTANTS ===============================================================================================
    const listboxId       = id || `listbox-${Math.random().toString(36).substring(2, 9)}`;
    const filteredOptions = searchOptions(options, searchValue);

    // HANDLERS ================================================================================================
    const handleSearchChange = (valueOrEvent: string | React.FormEvent<HTMLInputElement>) => {
        const value = typeof valueOrEvent === "string"
            ? valueOrEvent
            : (valueOrEvent.target as HTMLInputElement).value;
        setSearchValue(value);
    };

    const handleSelectOption = (option: OptionForListBoxProps) => {
        if (option.disabled) return;

        let newSelectedOptions: OptionForListBoxProps[];
        let valueToEmit: string | string[];

        if (allowMultiSelect) {
            const isSelected = selectedOptions.some(opt => opt.value === option.value);
            if (isSelected) {
                newSelectedOptions = selectedOptions.filter(opt => opt.value !== option.value);
            } else {
                if (selectionLimit && selectedOptions.length >= selectionLimit) {
                    return;
                }
                newSelectedOptions = [...selectedOptions, option];
            }
            valueToEmit = newSelectedOptions.map(opt => opt.value);
        } else {
            newSelectedOptions = [option];
            setSelectedOption(option);
            valueToEmit = option.value;
            setIsOpen(false);
        }

        setSelectedOptions(newSelectedOptions);
        onChange?.(valueToEmit);
        setSearchValue("");
        setActiveIndex(-1);
    };

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

    const handleDeleteOption = (valueToRemove: string) => {
        const newSelectedOptions = selectedOptions.filter(opt => opt.value !== valueToRemove);
        setSelectedOptions(newSelectedOptions);
        onChange?.(newSelectedOptions.map(opt => opt.value));
    };

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

    // Click outside handling
    useClickOutside(dropdownRef, () => {
        setIsOpen(false);
        setActiveIndex(-1);
    });

    // Focus management
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [ isOpen ]);

    // SCROLL ACTIVE OPTION INTO VIEW =======================================================================
    useEffect(() => {
        if (activeIndex >= 0) {
            const activeOption = document.querySelector(`[data-index="${activeIndex}"]`);
            activeOption?.scrollIntoView({ block: "nearest" });
        }
    }, [activeIndex]);

    // RENDER ==================================================================================================
    return (
        <Div data-list-box className={`list-box-wrapper ${disabled ? "disabled" : ""}`}
             ref={dropdownRef}>
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
                                    <Text
                                        className="options-limit-warning"
                                        textColour="red"
                                        size="small"
                                        role="alert"
                                    >
                                        You can choose only {selectionLimit} option{selectionLimit === 1 ? "" : "s"}
                                    </Text>
                                )}
                            </Div>
                        ) : (
                            <span className="placeholder">{placeholder}</span>
                        )}
                    </>
                ) : (
                    selectedOption
                        ? <Text className="selected-option">{selectedOption.label}</Text>
                        : <span className="placeholder">{placeholder}</span>
                )}

                <Div className="icon-wrapper chevrons">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <polyline points="6 9 12 4 18 9"></polyline>
                        <polyline points="6 15 12 20 18 15"></polyline>
                    </svg>
                </Div>
            </Div>

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
        </Div>
    );
};

// Main ListBox component
export const ListBox = React.forwardRef<ListBoxElementType, ListBoxProps>((props, ref) => {
    return (
        <BaseInputComponent<ListBoxElementType>
            as={ListBoxWithOptions}
            ref={ref}
            {...props}
        />
    );
});
