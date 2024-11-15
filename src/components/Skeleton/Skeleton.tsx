import React, { createContext, useContext } from "react";
import { Element } from "../Element/Element";
import { CommonAndHTMLProps, ShapeTypes, SpacingTypes } from "../Element/constants";

import "./skeleton.css";

// Common skeleton props shared between Skeleton and SkeletonGroup
interface CommonSkeletonProps {
    effect  ? : "pulse" | "wave" | "none";
    animate ? : boolean;
}

// Context to share common properties
const SkeletonContext = createContext<CommonSkeletonProps>({
    effect  : "wave",
    animate : true,
});

// Props specific to individual Skeleton elements
interface SkeletonCustomProps extends CommonSkeletonProps {
    variant ? : "line" | "circle" | "block";
    width   ? : string | number;
    height  ? : string | number;
    shape   ? : ShapeTypes;
}

// Props specific to SkeletonGroup
interface SkeletonGroupCustomProps extends CommonSkeletonProps {
    repeat    ? : number;
    direction ? : "vertical" | "horizontal";
    spacing   ? : SpacingTypes;
}

export type SkeletonElementType = HTMLDivElement;
export type SkeletonProps =
    Omit<CommonAndHTMLProps<SkeletonElementType>, keyof SkeletonCustomProps>
    & SkeletonCustomProps;
export type SkeletonGroupProps =
    Omit<CommonAndHTMLProps<SkeletonElementType>, keyof SkeletonGroupCustomProps>
    & SkeletonGroupCustomProps;

export const Skeleton = React.forwardRef((
    {
        variant = "line",
        width,
        height,
        shape,
        effect : localEffect,
        ...props
    }: SkeletonProps, ref: React.Ref<SkeletonElementType>) => {
    // Get shared properties from group context
    const groupContext = useContext(SkeletonContext);

    const effectiveEffect = localEffect || groupContext.effect;

    let classNames = [];

    if (variant) {
        classNames.push(`variant-${variant}`);
    }

    if (shape) {
        classNames.push(`shape-${shape}`);
    }

    if (effectiveEffect) {
        classNames.push(`effect-${effectiveEffect}`);
    }

    // Handle circle variant dimensions
    const computedWidth  = width || "100%";
    const computedHeight = variant === "circle"
        ? (typeof width === "number" ? `${width}px` : width) || height || "100%"
        : height;

    const style = {
        width       : computedWidth,
        height      : computedHeight,
        aspectRatio : variant === "circle" ? "1 / 1" : "auto",
        ...props.style,
    };

    return (
        <Element
            as="div"
            data-skeleton
            ref={ref}
            classNames={classNames}
            style={style}
            {...props}
        />
    );
});

export const SkeletonGroup = React.forwardRef((
    {
        effect = "wave",
        spacing = "small",
        animate = true,
        repeat = 1,
        direction = "vertical",
        children,
        classNames = [],
        ...props
    }: SkeletonGroupProps, ref: React.Ref<SkeletonElementType>) => {

    const groupClassNames = [
        `direction-${direction}`,
        effect && `effect-${effect}`,
        ...classNames,
    ];

    if (spacing) {
        groupClassNames.push(`spacing-${spacing}`);
    }

    return (
        <SkeletonContext.Provider value={{ effect, animate }}>
            <Element
                as="div"
                ref={ref}
                data-skeleton-group
                classNames={groupClassNames}
                {...props}
            >
                {Array(repeat).fill(children).map((child, index) => (
                    React.cloneElement(child as React.ReactElement, {
                        key: index
                    })
                ))}
            </Element>
        </SkeletonContext.Provider>
    );
});
