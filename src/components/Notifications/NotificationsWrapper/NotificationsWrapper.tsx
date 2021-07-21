import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { NotificationsWrapperStyled } from "./NotificationsWrapper.styled";

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
    ({
         position = "right",
         anchor = "top",
         order = "new-on-top",
         ...props
    } : NotificationsWrapperProps, ref : React.Ref<NotificationsWrapperElementType>) => {
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

        return (
            <Element<NotificationsWrapperElementType>
                as={NotificationsWrapperStyled}
                ref={ref}
                classNames={classNames}
                {...props}
            />
        );
    }
);
