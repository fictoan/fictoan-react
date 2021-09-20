import React, { ReactNode } from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

import { CalloutStyled } from "./Callout.styled";

export interface CalloutCustomProps {
    kind: "success" | "info" | "error" | "warning";
    children: ReactNode;
}

export type CalloutElementType = HTMLDivElement;
export type CalloutProps = Omit<CommonAndHTMLProps<CalloutElementType>, keyof CalloutCustomProps> & CalloutCustomProps;

export const Callout = React.forwardRef(
    (
        { kind, children, ...props }: CalloutProps,
        ref: React.Ref<CalloutElementType>
    ) => {
        return (
            <Element<CalloutElementType> as={CalloutStyled} ref={ref} className={kind} {...props}>
                <Text marginBottom="none" marginTop="none">
                    {children}
                </Text>
            </Element>
        );
    }
);
