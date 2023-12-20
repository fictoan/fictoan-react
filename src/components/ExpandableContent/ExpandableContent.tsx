import React, { ReactNode } from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

import "./expandable-content.css";

// prettier-ignore
export interface ExpandableContentCustomProps {
    open     ? : boolean;
    summary    : ReactNode;
    children   : ReactNode;
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
            <Element<ExpandableContentElementType> as="details" data-expandable-content ref={ref} {...props}>
                <summary>{typeof summary === "string" ? <Text margin="none">{summary}</Text> : summary}</summary>
                {children}
            </Element>
        );
    }
);
