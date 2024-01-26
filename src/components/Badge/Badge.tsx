import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ShapeTypes, SpacingTypes } from "../Element/constants";

import "./badge.css";

// prettier-ignore
export interface BadgeCustomProps {
    size  ? : SpacingTypes;
    shape ? : ShapeTypes;
}

export type BadgeElementType = HTMLDivElement;
export type BadgeProps = Omit<CommonAndHTMLProps<BadgeElementType>, keyof BadgeCustomProps> & BadgeCustomProps;

export const Badge = React.forwardRef(
    ({ size = "medium", shape, kind, ...props }: BadgeProps, ref: React.Ref<BadgeElementType>) => {
        let classNames = [];

        if (kind) {
            classNames.push(kind);
        }

        if (size) {
            classNames.push(`size-${size}`);
        }

        if (shape) {
            classNames.push(`shape-${shape}`);
        }

        return <Element<BadgeElementType> as="mark" data-badge ref={ref} classNames={classNames} {...props} />;
    }
);
