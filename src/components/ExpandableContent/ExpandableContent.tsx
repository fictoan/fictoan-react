import React, { ReactNode } from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

import { ExpandableContentStyled } from "./ExpandableContent.styled";

export interface ExpandableContentCustomProps {
    summary: ReactNode;
    open?: boolean;
    children: ReactNode;
}

export type ExpandableContentElementType = HTMLDetailsElement;
export type ExpandableContentProps = Omit<
    CommonAndHTMLProps<ExpandableContentElementType>,
    keyof ExpandableContentCustomProps
> &
    ExpandableContentCustomProps;

export const ExpandableContent = React.forwardRef(
    ({ summary, children, ...props }: ExpandableContentProps, ref: React.Ref<ExpandableContentElementType>) => {
        return (
            <Element<ExpandableContentElementType> as={ExpandableContentStyled} ref={ref} {...props}>
                <summary>{typeof summary === "string" ? <Text margin="none">{summary}</Text> : summary}</summary>
                {children}
            </Element>
        );
    }
);
