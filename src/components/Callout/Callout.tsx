import React, { ReactNode } from "react";

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element";
import { Text } from "../Typography";

import "./callout.css";

// prettier-ignore
export interface CalloutCustomProps {
    kind     : "info" | "success" | "warning" | "error";
    children : ReactNode;
}

export type CalloutElementType = HTMLDivElement;
export type CalloutProps = Omit<CommonAndHTMLProps<CalloutElementType>, keyof CalloutCustomProps> & CalloutCustomProps;

export const Callout = React.forwardRef(
    ({kind, children, ...props}: CalloutProps, ref: React.Ref<CalloutElementType>) => {
        return (
            <Element<CalloutElementType> as="div" data-callout ref={ref} className={kind} {...props}>
                <Text marginBottom="none" marginTop="none">
                    {children}
                </Text>
            </Element>
        );
    }
);
