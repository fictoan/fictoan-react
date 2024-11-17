// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";

// STYLES ==============================================================================================================
import "./notifications-wrapper.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export interface NotificationsWrapperCustomProps {
    position ? : "left" | "right";
    anchor   ? : "top" | "bottom";
    order    ? : "new-on-top" | "new-on-bottom";
    label    ? : string;
}

export type NotificationsWrapperElementType = HTMLDivElement;
export type NotificationsWrapperProps = CommonAndHTMLProps<NotificationsWrapperElementType> &
    NotificationsWrapperCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const NotificationsWrapper = React.forwardRef(
    (
        {
            position = "right",
            anchor = "top",
            order = "new-on-top",
            children,
            label,
            ...props
        }: NotificationsWrapperProps,
        ref: React.Ref<NotificationsWrapperElementType>
    ) => {
        let classNames = [];

        if (position) classNames.push(position);
        if (anchor) classNames.push(anchor);
        if (order) classNames.push(order);

        const childrenCount = React.Children.count(children);
        if (childrenCount === 0) return null;

        return (
            <Element<NotificationsWrapperElementType>
                as="section"
                data-notifications-wrapper
                ref={ref}
                classNames={classNames}
                aria-label={label || "Notifications"}
                aria-relevant="additions removals"
                role="log"
                {...props}
            >
                <div role="log">
                    {children}
                </div>
            </Element>
        );
    }
);
