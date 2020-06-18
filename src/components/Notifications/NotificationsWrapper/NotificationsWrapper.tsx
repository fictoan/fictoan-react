import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { NotificationsWrapperStyled } from "./NotificationsWrapper.styled";


export interface NotificationsWrapperCustomProps {
    position : "left" | "right";
    anchor   : "top" | "bottom";
}

export type NotificationsWrapperElementType = HTMLDivElement;
export type NotificationsWrapperProps       = CommonAndHTMLProps<NotificationsWrapperElementType> & NotificationsWrapperCustomProps;

export const NotificationsWrapper = ({
    position,
    anchor,
    className,
    ...props
}: NotificationsWrapperProps) => {
    let classNames = [];

    if (className) {
        classNames.push(className);
    }

    if (position) {
        classNames.push(position);
    }

    if (anchor) {
        classNames.push(anchor);
    }

    return (
        <Element<NotificationsWrapperElementType>
            as={NotificationsWrapperStyled}
            classNames={classNames}
            {...props}
        />
    );
}
