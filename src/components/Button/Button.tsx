import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, EmphasisTypes, ShapeTypes, SpacingTypes } from "../Element/constants";

import "./Button.css";

// prettier-ignore
export interface ButtonCustomProps {
    kind      ? : EmphasisTypes;
    size      ? : SpacingTypes;
    shape     ? : ShapeTypes;
    isLoading ? : boolean;
    hasDelete ? : boolean;
}

export type ButtonElementType = HTMLButtonElement;
export type ButtonProps = Omit<CommonAndHTMLProps<ButtonElementType>, keyof ButtonCustomProps> & ButtonCustomProps;

export const Button = React.forwardRef(
    ({ size="medium", shape, kind, isLoading, hasDelete, ...props }: ButtonProps, ref: React.Ref<ButtonElementType>) => {
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

        if (isLoading) {
            classNames.push("is-loading");
        }

        if (hasDelete) {
            classNames.push("has-delete");
        }

        return <Element<ButtonElementType> as="button" data-button ref={ref} classNames={classNames} {...props} />;
    }
);
