// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES ==============================================================================================================
import "./card.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

export type CardElementType = HTMLDivElement;
export interface CardCustomProps {
    heading ? : string;
}
export type CardProps = CommonAndHTMLProps<CardElementType> & CardCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Card = React.forwardRef(({ shape, heading, children, ...props }: CardProps, ref: React.Ref<CardElementType>) => {
    let classNames = [];

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    return (
        <Element<CardElementType>
            as="div"
            data-card
            ref={ref}
            classNames={classNames}
            role="region"
            aria-label={heading}
            tabIndex={0}
            {...props}
        >
            {children}
        </Element>
    );
});
