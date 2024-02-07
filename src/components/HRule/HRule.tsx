import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./h-rule.css";

// prettier-ignore
export interface HRCustomProps {
    kind ? : "primary" | "secondary" | "tertiary";
}

export type HRElementType = HTMLHRElement;
export type HRProps = Omit<CommonAndHTMLProps<HRElementType>, keyof HRCustomProps> & HRCustomProps;

export const HRule = React.forwardRef(({ kind, ...props }: HRProps, ref: React.Ref<HRElementType>) => {
        let classNames = [];

        if (kind) {
            classNames.push(kind);
        }

        return (
            <Element<HRElementType>
                as="hr"
                data-hrule
                ref={ref}
                classNames={classNames}
                {...props}
            />
        );
    },
);
