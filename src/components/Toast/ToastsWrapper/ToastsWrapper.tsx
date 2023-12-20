import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./toasts-wrapper.css";

// prettier-ignore
export interface ToastsWrapperCustomProps {
    position ? : "top" | "bottom";
}

export type ToastsWrapperElementType = HTMLDivElement;
export type ToastsWrapperProps = CommonAndHTMLProps<ToastsWrapperElementType> &
    ToastsWrapperCustomProps;

export const ToastsWrapper = React.forwardRef(
    ({ position, ...props }: ToastsWrapperProps, ref: React.Ref<ToastsWrapperElementType>) => {
        let classNames = [];

        if (position) {
            classNames.push(position);
        }

        return (
            <Element<ToastsWrapperElementType>
                as="div"
                data-toasts-wrapper
                ref={ref}
                classNames={classNames}
                {...props}
            />
        );
    }
);
