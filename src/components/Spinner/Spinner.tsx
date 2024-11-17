// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES ==============================================================================================================
import "./spinner.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

// prettier-ignore
export interface SpinnerCustomProps {
    size        ? : "tiny" | "small" | "medium" | "large" | "huge";
    loadingText ? : string; // Custom loading message for screen readers
}

export type SpinnerElementType = HTMLDivElement;
export type SpinnerProps = Omit<CommonAndHTMLProps<SpinnerElementType>, keyof SpinnerCustomProps> & SpinnerCustomProps;

// COMPONENT //////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Spinner = React.forwardRef((
        {
            size = "medium",
            loadingText = "Loading...",
            ...props
        }: SpinnerProps,
        ref: React.Ref<SpinnerElementType>,
    ) => {
        let classNames = [];

        if (size) {
            classNames.push(`size-${size}`);
        }

        return (
            <Element<SpinnerElementType>
                as="div"
                data-spinner
                ref={ref}
                classNames={classNames}
                role="status"
                aria-busy="true"
                aria-live="polite"
                aria-label={loadingText}
                {...props}
            />
        );
    },
);
