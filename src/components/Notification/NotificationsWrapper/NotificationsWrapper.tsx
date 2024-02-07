import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./notifications-wrapper.css";

// prettier-ignore
export interface NotificationsWrapperCustomProps {
    position ? : "left" | "right";
    anchor   ? : "top" | "bottom";
    order    ? : "new-on-top" | "new-on-bottom";
}

export type NotificationsWrapperElementType = HTMLDivElement;
export type NotificationsWrapperProps = CommonAndHTMLProps<NotificationsWrapperElementType> &
    NotificationsWrapperCustomProps;

export const NotificationsWrapper = React.forwardRef(
    (
        { position = "right", anchor = "top", order = "new-on-top", children, ...props }: NotificationsWrapperProps,
        ref: React.Ref<NotificationsWrapperElementType>
    ) => {
        let classNames = [];

        if (position) {
            classNames.push(position);
        }

        if (anchor) {
            classNames.push(anchor);
        }

        if (order) {
            classNames.push(order);
        }

        // Doing this because this component has a very high z-index
        const childrenCount = React.Children.count(children);
        if (childrenCount === 0) {
            return null;
        }

        return (
            <Element<NotificationsWrapperElementType>
                as="div"
                data-notifications-wrapper
                ref={ref}
                classNames={classNames}
                {...props}
            >
                {children}
            </Element>
        );
    }
);
