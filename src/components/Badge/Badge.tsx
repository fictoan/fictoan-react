import React from "react";

import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";
import { CommonAndHTMLProps, ShapeTypes, SpacingTypes } from "../Element/constants";

import "./badge.css";

// prettier-ignore
export interface BadgeCustomProps {
    size       ? : SpacingTypes;
    shape      ? : ShapeTypes;
    withDelete ? : boolean;
    onDelete   ? : (event: React.MouseEvent<HTMLElement>) => void;
}

export type BadgeElementType = HTMLDivElement;
export type BadgeProps = Omit<CommonAndHTMLProps<BadgeElementType>, keyof BadgeCustomProps> & BadgeCustomProps;

export const Badge = React.forwardRef(
    ({ children, size = "medium", shape, withDelete, onDelete, ...props }: BadgeProps, ref: React.Ref<BadgeElementType>) => {
        let classNames = [];

        if (size) {
            classNames.push(`size-${size}`);
        }

        if (shape) {
            classNames.push(`shape-${shape}`);
        }

        const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            onDelete?.(e);
        };

        return (
            <Element<BadgeElementType>
                data-badge
                ref={ref}
                classNames={classNames}
                {...props}
            >
                <Text>{children}</Text>
                {withDelete && (
                    <Text
                        className="dismiss-button"
                        onClick={handleDelete}
                    >
                        &times;
                    </Text>
                )}
            </Element>
        );
    }
);
