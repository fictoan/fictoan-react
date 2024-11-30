// FRAMEWORK ===========================================================================================================
import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Div } from "../Element/Tags";
import { Card, CardElementType, CardProps } from "../Card/Card";

// STYLES ==============================================================================================================
import "./option-card.css";

// TYPES ===============================================================================================================
export type TickPosition =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "centre-left"
    | "center-left"
    | "centre-right"
    | "center-right"
    | "centre-top"
    | "center-top"
    | "center-bottom"
    | "centre-bottom"
    | "centre"
    | "center"

export interface OptionCardsProviderProps {
    children                  : ReactNode;
    allowMultipleSelections ? : boolean;
    showTickIcon            ? : boolean;
    tickPosition            ? : TickPosition;
    onSelectionChange       ? : (selectedIds: Set<string>) => void;
}

export interface OptionCardProps extends CardProps {
    id         : string;
    children   : ReactNode;
    disabled ? : boolean;
}

const OptionCardsContext = createContext<{
    isSelected        : (id: string) => boolean;
    toggleSelection   : (id: string) => void;
    showTickIcon    ? : boolean;
    tickPosition    ? : TickPosition;
}>({
    isSelected      : () => false,
    toggleSelection : () => {},
    showTickIcon    : false,
    tickPosition    : "top-right",
});

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const OptionCardsGroup: React.FC<OptionCardsProviderProps> = (
    {
        children,
        allowMultipleSelections = false,
        showTickIcon,
        onSelectionChange,
        tickPosition = "top-right",
        ...props
    },
) => {
    const [ selectedIds, setSelectedIds ] = useState<Set<string>>(new Set());

    const toggleSelection = useCallback((id: string) => {
        setSelectedIds(prevSelectedIds => {
            const newSelectedIds = new Set(prevSelectedIds);
            if (allowMultipleSelections) {
                if (newSelectedIds.has(id)) {
                    newSelectedIds.delete(id);
                } else {
                    newSelectedIds.add(id);
                }
            } else {
                if (newSelectedIds.has(id) && prevSelectedIds.size === 1) {
                    newSelectedIds.clear();
                } else {
                    newSelectedIds.clear();
                    newSelectedIds.add(id);
                }
            }
            onSelectionChange?.(newSelectedIds);
            return newSelectedIds;
        });
    }, [ allowMultipleSelections, onSelectionChange ]);

    const isSelected = useCallback((id: string) => {
        return selectedIds.has(id);
    }, [ selectedIds ]);

    return (
        <OptionCardsContext.Provider value={{ isSelected, toggleSelection, showTickIcon, tickPosition }}>
            <Div data-option-cards-group className={`tick-${tickPosition}`}>
                {children}
            </Div>
        </OptionCardsContext.Provider>
    );
};

export const useOptionCard = (id: string) => {
    const context = useContext(OptionCardsContext);
    return {
        isSelected      : context.isSelected(id),
        toggleSelection : () => context.toggleSelection(id),
        showTickIcon    : context.showTickIcon,
    };
};

export const OptionCard: React.FC<OptionCardProps> = ({ id, children, disabled = false, ...props }) => {
    const { isSelected, toggleSelection, showTickIcon } = useOptionCard(id);
    const [showDeselect, setShowDeselect] = useState(false);
    const [isInitialHover, setIsInitialHover] = useState(true);

    let classNames = [];

    if (isSelected) {
        classNames.push("selected");
    }

    if (disabled) {
        classNames.push("disabled");
    }

    if (showDeselect) {
        classNames.push("show-deselect");
    }

    const handleMouseEnter = () => {
        if (isSelected && !isInitialHover) {
            setShowDeselect(true);
        }
    };

    const handleMouseLeave = () => {
        setShowDeselect(false);
        setIsInitialHover(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!disabled) {
            setIsInitialHover(true);
            setShowDeselect(false);
            toggleSelection();
            props.onClick?.(e);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            setIsInitialHover(true);
            setShowDeselect(false);
            toggleSelection();
        }
    };

    return (
        <Element<CardElementType>
            as={Card}
            data-option-card
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled ? "true" : "false"}
            aria-selected={isSelected ? "true" : "false"}
            classNames={classNames}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {showTickIcon && (
                <>
                    <svg viewBox="0 0 24 24" className="tick-icon">
                        <circle cx="12" cy="12" r="11" />
                        <path d="M8 13 L11 15 L16 9" />
                    </svg>

                    <svg viewBox="0 0 24 24" className="deselect-icon">
                        <circle cx="12" cy="12" r="11" />
                        <path d="M8 8 L16 16 M16 8 L8 16" />
                    </svg>
                </>
            )}
            {children}
        </Element>
    );
};
