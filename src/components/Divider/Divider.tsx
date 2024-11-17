// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES ==============================================================================================================
import "./divider.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface DividerCustomProps {
    kind   ? : "primary" | "secondary" | "tertiary";
    height ? : string;
    label  ? : string;
}

export type DividerElementType = HTMLHRElement;
export type DividerProps = Omit<CommonAndHTMLProps<DividerElementType>, keyof DividerCustomProps> & DividerCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Divider = React.forwardRef(
    (
        { kind, height, label, ...props }: DividerProps, ref: React.Ref<DividerElementType>) => {
        let classNames = [];

        if (kind) {
            classNames.push(kind);
        }

        return (
            <Element<DividerElementType>
                as="hr"
                data-hrule
                ref={ref}
                classNames={classNames}
                role="separator"
                aria-orientation="horizontal"
                aria-label={label}
                {...props}
                style={{ height : height }}
            />
        );
    },
);
