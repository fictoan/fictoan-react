import React, { forwardRef, useEffect, useState } from "react";
import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./loading-bar.css";

interface LoadingBarCustomProps {
    animateWhen?: boolean;
    progress?: number;
    isIndeterminate?: boolean;
    height?: string;
    position?: "top" | "bottom";
}

export type LoadingBarElementType = HTMLDivElement;
export type LoadingBarProps =
    Omit<CommonAndHTMLProps<LoadingBarElementType>, keyof LoadingBarCustomProps>
    & LoadingBarCustomProps;

export const LoadingBar = forwardRef<LoadingBarElementType, LoadingBarProps>(
    (
        {
            animateWhen = false,
            progress = 0,
            isIndeterminate = false,
            height = "4px",
            position = "top",
            className,
            ...props
        }, ref) => {
        const [ state, setState ] = useState({
            isVisible       : false,
            isFading        : false,
            currentProgress : progress,
        });

        // Handle state updates
        useEffect(() => {

            if (animateWhen && !state.isVisible) {
                setState(prev => ({ ...prev, isVisible : true, isFading : false }));
            } else if (progress >= 100 && !state.isFading) {
                setState(prev => ({ ...prev, isFading : true }));

                // Remove from DOM after fade
                const timer = setTimeout(() => {
                    setState(prev => ({
                        ...prev,
                        isVisible       : false,
                        isFading        : false,
                        currentProgress : 0,
                    }));
                }, 500);

                return () => clearTimeout(timer);
            }

            setState(prev => ({ ...prev, currentProgress : progress }));
        }, [ animateWhen, progress ]);

        if (!state.isVisible && !animateWhen) return null;

        const transformValue = isIndeterminate ?
            undefined :
            `translateX(${-100 + Math.min(100, state.currentProgress)}%)`;

        const style = {
            height,
            [position] : 0,
            bottom     : position === "bottom" ? 0 : "auto",
            ...(transformValue ? { transform : transformValue } : {}),
        };

        const classes = [
            className,
            animateWhen ? "active" : "",
            isIndeterminate ? "indeterminate" : "determinate",
            state.isFading ? "fade-out" : "",
        ].filter(Boolean).join(" ");


        return (
            <Element<LoadingBarElementType>
                as="div"
                data-loading-bar
                ref={ref}
                style={style}
                className={classes}
                {...props}
            />
        );
    });
