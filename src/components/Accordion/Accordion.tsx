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
        const [ isOpen, setIsOpen ] = useState(open);

        const toggleOpen = () => setIsOpen(!isOpen);

        useEffect(() => {
            if (ref && "current" in ref && ref.current) {
                ref.current.setAttribute("aria-expanded", isOpen.toString());
            }
        }, [ isOpen, ref ]);

        const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleOpen();
            }
        };

        return (
            <Element
                as="details"
                data-expandable-content
                ref={ref}
                {...props}
                open={isOpen}
                role="region"
                aria-labelledby="accordion-summary"
            >
                <summary
                    role="button"
                    tabIndex={0}
                    aria-controls="accordion-content"
                    aria-expanded={isOpen}
                    onClick={toggleOpen}
                    onKeyDown={handleKeyDown}
                >
                    {typeof summary === "string" ? <Text margin="none">{summary}</Text> : summary}
                </summary>
                {children}
            </Element>
        );
    },
);
