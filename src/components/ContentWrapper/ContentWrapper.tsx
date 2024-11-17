// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES ==============================================================================================================
import "./content-wrapper.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

export type ContentWrapperElementType = HTMLDivElement;
interface ContentWrapperCustomProps {
    label ? : string; // For aria-label
}
export type ContentWrapperProps = CommonAndHTMLProps<ContentWrapperElementType> & ContentWrapperCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ContentWrapper = React.forwardRef(
    (
        { label, ...props }: ContentWrapperProps, ref: React.Ref<ContentWrapperElementType>) => {

        return (
            <Element<ContentWrapperElementType>
                as="main"
                data-content-wrapper
                ref={ref}
                role="main"
                aria-label={label || "Main content"}
                {...props}
            />
        );
    }
);
