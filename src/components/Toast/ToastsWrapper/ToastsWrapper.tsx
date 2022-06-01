import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { ToastsWrapperStyled } from "./ToastsWrapper.styled";

// prettier-ignore
export interface NotificationsWrapperCustomProps {
    position ? : "top" | "bottom";
}

export type NotificationsWrapperElementType = HTMLDivElement;
export type NotificationsWrapperProps = CommonAndHTMLProps<NotificationsWrapperElementType> &
    NotificationsWrapperCustomProps;

export const ToastsWrapper = React.forwardRef(
    ({ position, ...props }: NotificationsWrapperProps, ref: React.Ref<NotificationsWrapperElementType>) => {
        let classNames = [];

        if (position) {
            classNames.push(position);
        }

        return (
            <Element<NotificationsWrapperElementType>
                as={ToastsWrapperStyled}
                ref={ref}
                classNames={classNames}
                {...props}
            />
        );
    }
);
