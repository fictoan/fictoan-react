import React, { useEffect, useRef, useState } from "react";
import { Card, CardProps } from "../Card/Card";
import { Text } from "../Typography";

import { Element } from "../Element";

import "./tooltip.css";

export interface TooltipCustomProps {
    label: string;
    labelFor: string; // The ID of the element the tooltip is for
    position?: "top" | "bottom" | "left" | "right";
}

export type TooltipElementType = HTMLDivElement;
export type TooltipProps = Omit<CardProps, keyof TooltipCustomProps> & TooltipCustomProps;

export const Tooltip = ({ label, labelFor, position = "top", ...props }: TooltipProps) => {
    const tooltipRef            = useRef<HTMLDivElement | null>(null);
    const [ appear, setAppear ] = useState<boolean>(false);

    useEffect(() => {
        const targetElement  = document.getElementById(labelFor) as HTMLDivElement | null;
        const tooltipElement = tooltipRef.current;

        const positionTooltip = () => {
            if (!tooltipElement || !targetElement) return;

            const targetElementBounds  = targetElement.getBoundingClientRect();
            const tooltipBounds = tooltipElement.getBoundingClientRect();

            switch (position) {
                case "top":
                    tooltipElement.style.left = `${targetElementBounds.left + (targetElementBounds.width / 2) - (tooltipBounds.width / 2)}px`;
                    tooltipElement.style.top  = `${targetElementBounds.top - tooltipBounds.height - 5}px`;
                    break;
                case "bottom":
                    tooltipElement.style.left = `${targetElementBounds.left + (targetElementBounds.width / 2) - (tooltipBounds.width / 2)}px`;
                    tooltipElement.style.top  = `${targetElementBounds.bottom + 5}px`;
                    break;
                case "left":
                    tooltipElement.style.left = `${targetElementBounds.left - tooltipBounds.width - 5}px`;
                    tooltipElement.style.top  = `${targetElementBounds.top + (targetElementBounds.height / 2) - (tooltipBounds.height / 2)}px`;
                    break;
                case "right":
                    tooltipElement.style.left = `${targetElementBounds.right + 5}px`;
                    tooltipElement.style.top  = `${targetElementBounds.top + (targetElementBounds.height / 2) - (tooltipBounds.height / 2)}px`;
                    break;
            }
        };

        window.addEventListener("resize", positionTooltip);
        if (targetElement) {
            targetElement.addEventListener("mouseover", () => {
                setAppear(true);
                positionTooltip();
            });
            targetElement.addEventListener("mouseout", () => setAppear(false));
        }

        return () => {
            window.removeEventListener("resize", positionTooltip);
            if (targetElement) {
                targetElement.removeEventListener("mouseover", () => setAppear(true));
                targetElement.removeEventListener("mouseout", () => setAppear(false));
            }
        };
    }, [ labelFor, position ]);

    return (
        <>
            {label && appear && (
                <Element<TooltipElementType>
                    as="div"
                    data-tooltip
                    ref={tooltipRef}
                    className={`${position} ${appear ? "active" : ""}`}
                    shape="rounded"
                    padding="nano"
                    {...props}
                >
                    <Text className="tooltip-label">
                        {label}
                    </Text>
                </Element>
            )}
        </>
    );
};
