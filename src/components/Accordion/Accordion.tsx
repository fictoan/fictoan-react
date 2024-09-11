import React, { ReactNode, useEffect, useState } from "react";

import { CommonAndHTMLProps } from "../Element/constants";
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

import "./accordion.css";

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
    ({ summary, children, open = false, ...props }: AccordionProps, ref: React.Ref<AccordionElementType>) => {

        return (
            <Element
                as="details"
                data-expandable-content
                ref={ref}
                {...props}
                open={open}
                role="region"
                aria-labelledby="accordion-summary"
            >
                <summary
                    role="button"
                    tabIndex={0}
                    aria-controls="accordion-content"
                    aria-expanded={open}
                >
                    {typeof summary === "string" ? <Text margin="none">{summary}</Text> : summary}
                </summary>
                {children}
            </Element>
        );
    },
);
