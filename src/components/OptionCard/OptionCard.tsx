import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

import { Element } from "../Element/Element";
import { Card, CardElementType, CardProps } from "../Card/Card";

import "./option-card.css";

// import TickIcon from "../../assets/icons/tick.svg";

export interface OptionCardsProviderProps {
    children                  : ReactNode;
    allowMultipleSelections ? : boolean;
    showTickIcon            ? : boolean;
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
}>({
    isSelected      : () => false,
    toggleSelection : () => {},
    showTickIcon    : false,
});

export const OptionCardsGroup: React.FC<OptionCardsProviderProps> = (
    {
        children,
        allowMultipleSelections = false,
        showTickIcon,
        onSelectionChange,
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
        <OptionCardsContext.Provider value={{ isSelected, toggleSelection, showTickIcon }}>
            {children}
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

    let classNames = [];

    if (isSelected) {
        classNames.push("selected");
    }

    if (disabled) {
        classNames.push("disabled");
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            toggleSelection();
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!disabled) {
            toggleSelection();
            props.onClick?.(e);
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
            {...props}
        >
            {showTickIcon
                ? (
                    <svg viewBox="0 0 24 24" className="tick-icon">
                        <circle cx="12" cy="12" r="11" />
                        <path d="M8 13 L11 15 L16 9" />
                    </svg>
                ) : null}
            {children}
        </Element>
    );
};
