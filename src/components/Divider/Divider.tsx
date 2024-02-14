import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./divider.css";

// prettier-ignore
export interface DividerCustomProps {
    kind ? : "primary" | "secondary" | "tertiary";
}

export type DividerElementType = HTMLHRElement;
export type DividerProps = Omit<CommonAndHTMLProps<DividerElementType>, keyof DividerCustomProps> & DividerCustomProps;

export const Divider = React.forwardRef(({ kind, ...props }: DividerProps, ref: React.Ref<DividerElementType>) => {
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
                {...props}
            />
        );
    },
);
