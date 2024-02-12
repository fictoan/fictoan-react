import React, { ReactNode } from "react";

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

import "./Accordion.css";

// prettier-ignore
export interface AccordionCustomProps {
    open     ? : boolean;
    summary    : ReactNode;
    children   : ReactNode;
}

export type AccordionElementType = HTMLDetailsElement;
export type AccordionProps =
    Omit<CommonAndHTMLProps<AccordionElementType>, keyof AccordionCustomProps>
    & AccordionCustomProps;

export const Accordion = React.forwardRef(
    ({ summary, children, ...props }: AccordionProps, ref: React.Ref<AccordionElementType>) => {
        return (
            <Element<AccordionElementType> as="details" data-expandable-content ref={ref} {...props}>
                <summary>{typeof summary === "string" ? <Text margin="none">{summary}</Text> : summary}</summary>
                {children}
            </Element>
        );
    },
);
