// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES ==============================================================================================================
import "./Button.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps, EmphasisTypes, ShapeTypes, SpacingTypes } from "../Element/constants";

// prettier-ignore
export interface ButtonCustomProps {
    kind      ? : EmphasisTypes;
    size      ? : SpacingTypes;
    shape     ? : ShapeTypes;
    isLoading ? : boolean;
    hasDelete ? : boolean;
    label     ? : string; // For aria-label
}

export type ButtonElementType = HTMLButtonElement;
export type ButtonProps = Omit<CommonAndHTMLProps<ButtonElementType>, keyof ButtonCustomProps> & ButtonCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Button = React.forwardRef(
    ({ size="medium", shape, kind, isLoading, hasDelete, label, ...props }: ButtonProps, ref: React.Ref<ButtonElementType>) => {
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

        return (
            <Element<ButtonElementType>
                as="button"
                data-button
                ref={ref}
                classNames={classNames}
                aria-label={label}
                aria-disabled={props.disabled || isLoading}
                aria-busy={isLoading}
                {...props}
            />
        );
    }
);
