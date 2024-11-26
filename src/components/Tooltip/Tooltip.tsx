import React, { useState, useEffect, useRef } from "react";
import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./tooltip.css";

// Constants
const TOOLTIP_OFFSET = 8;
const SCREEN_PADDING = 16;

// Positioning helper function
const calculatePosition = (
    tooltipElement: HTMLElement,
    targetElement: HTMLElement,
    position: "top" | "bottom" | "left" | "right",
) => {
    console.log("Calculating position...");  // Debug log
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    let top, left;

    switch (position) {
        case "top":
            top = targetRect.top - tooltipRect.height - TOOLTIP_OFFSET;
            left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
            if (top < SCREEN_PADDING) {
                top = targetRect.bottom + TOOLTIP_OFFSET;
            }
            break;
        case "bottom":
            top = targetRect.bottom + TOOLTIP_OFFSET;
            left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
            if (top + tooltipRect.height > viewportHeight - SCREEN_PADDING) {
                top = targetRect.top - tooltipRect.height - TOOLTIP_OFFSET;
            }
            break;
        case "left":
            top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
            left = targetRect.left - tooltipRect.width - TOOLTIP_OFFSET;
            if (left < SCREEN_PADDING) {
                left = targetRect.right + TOOLTIP_OFFSET;
            }
            break;
        case "right":
            top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
            left = targetRect.right + TOOLTIP_OFFSET;
            if (left + tooltipRect.width > viewportWidth - SCREEN_PADDING) {
                left = targetRect.left - tooltipRect.width - TOOLTIP_OFFSET;
            }
            break;
        default:
            top = targetRect.top - tooltipRect.height - TOOLTIP_OFFSET;
            left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
    }

    // Ensure tooltip stays within bounds
    if (left < SCREEN_PADDING) {
        left = SCREEN_PADDING;
    } else if (left + tooltipRect.width > viewportWidth - SCREEN_PADDING) {
        left = viewportWidth - tooltipRect.width - SCREEN_PADDING;
    }

    if (top < SCREEN_PADDING) {
        top = SCREEN_PADDING;
    } else if (top + tooltipRect.height > viewportHeight - SCREEN_PADDING) {
        top = viewportHeight - tooltipRect.height - SCREEN_PADDING;
    }

    console.log("Calculated position:", { top, left });  // Debug log
    return { top, left };
};

export interface TooltipCustomProps {
    isTooltipFor: string;
    showOn?: "click" | "hover";
    position?: "top" | "bottom" | "left" | "right";
}

export type TooltipElementType = HTMLDivElement;
export type TooltipProps = Omit<CommonAndHTMLProps<TooltipElementType>, keyof TooltipCustomProps> & TooltipCustomProps;

export const Tooltip = React.forwardRef(
    (
        {
            children,
            isTooltipFor,
            showOn = "hover",
            position = "top",
            className,
            ...props
        }: TooltipProps,
        ref: React.Ref<TooltipElementType>,
    ) => {
        const [isVisible, setIsVisible] = useState(false);
        const [tooltipPosition, setTooltipPosition] = useState({ top: -9999, left: -9999 });
        const tooltipRef = useRef<HTMLDivElement>(null);
        const effectiveRef = (ref || tooltipRef) as React.RefObject<HTMLDivElement>;

        const updatePosition = () => {
            console.log("updatePosition called", { isVisible });  // Debug log
            if (!isVisible || !effectiveRef.current) return;

            const targetElement = document.getElementById(isTooltipFor);
            if (!targetElement) return;

            const { top, left } = calculatePosition(effectiveRef.current, targetElement, position);
            console.log("Setting new position:", { top, left });  // Debug log
            setTooltipPosition({ top, left });
        };

        // Update position when visibility or position prop changes
        useEffect(() => {
            if (isVisible) {
                console.log("Visibility changed, updating position");  // Debug log
                updatePosition();
            }
        }, [isVisible, position]);

        useEffect(() => {
            const targetElement = document.getElementById(isTooltipFor);
            if (!targetElement) {
                console.warn(`Tooltip target element with id "${isTooltipFor}" not found`);
                return;
            }

            const showTooltip = () => {
                console.log("Showing tooltip");  // Debug log
                setIsVisible(true);
            };

            const hideTooltip = () => {
                console.log("Hiding tooltip");  // Debug log
                setIsVisible(false);
            };

            if (showOn === "hover") {
                targetElement.addEventListener("mouseenter", showTooltip);
                targetElement.addEventListener("mouseleave", hideTooltip);
            } else if (showOn === "click") {
                targetElement.addEventListener("click", () => setIsVisible(prev => !prev));
                document.addEventListener("click", (e) => {
                    if (
                        !targetElement.contains(e.target as Node) &&
                        effectiveRef.current &&
                        !effectiveRef.current.contains(e.target as Node)
                    ) {
                        hideTooltip();
                    }
                });
            }

            // Handle repositioning on scroll and resize
            window.addEventListener("scroll", updatePosition);
            window.addEventListener("resize", updatePosition);

            return () => {
                if (showOn === "hover") {
                    targetElement.removeEventListener("mouseenter", showTooltip);
                    targetElement.removeEventListener("mouseleave", hideTooltip);
                }
                window.removeEventListener("scroll", updatePosition);
                window.removeEventListener("resize", updatePosition);
            };
        }, [isTooltipFor, showOn, position]);

        return (
            <Element<TooltipElementType>
                as="div"
                data-tooltip
                ref={effectiveRef}
                className={`${isVisible ? "visible" : ""}`}
                role="tooltip"
                style={{
                    position: "fixed",
                    zIndex: 1000,
                    top: `${tooltipPosition.top}px`,
                    left: `${tooltipPosition.left}px`,
                }}
                {...props}
            >
                {children}
            </Element>
        );
    },
);
