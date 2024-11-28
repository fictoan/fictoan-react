// FRAMEWORK ===========================================================================================================
import React, { createContext, useContext } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";

// STYLES ==============================================================================================================
import "./skeleton.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps, ShapeTypes, SpacingTypes } from "../Element/constants";

// Common skeleton props shared between Skeleton and SkeletonGroup
interface CommonSkeletonProps {
    effect       ? : "pulse" | "wave" | "none";
    animate      ? : boolean;
    loadingLabel ? : string; // Accessible label for loading state
}

// Context to share common properties
const SkeletonContext = createContext<CommonSkeletonProps>({
    effect    : "wave",
    animate   : true,
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

// COMPONENTS //////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Skeleton = React.forwardRef((
    {
        variant = "line",
        width,
        height,
        shape,
        effect: localEffect,
        loadingLabel,
        ...props
    }: SkeletonProps, ref: React.Ref<SkeletonElementType>) => {
    // Get shared properties from group context
    const groupContext = useContext(SkeletonContext);

    const effectiveEffect = localEffect || groupContext.effect;
    const effectiveLabel = loadingLabel || groupContext.loadingLabel || "Loading...";

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
    const computedWidth = width || "100%";
    const computedHeight = variant === "circle"
        ? (typeof width === "number" ? `${width}px` : width) || height || "100%"
        : height;

    const style = {
        width: computedWidth,
        height: computedHeight,
        aspectRatio: variant === "circle" ? "1 / 1" : "auto",
        ...props.style,
    };

    return (
        <Element
            as="div"
            data-skeleton
            ref={ref}
            classNames={classNames}
            style={style}
            role="progressbar"
            aria-busy="true"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={effectiveLabel}
            aria-label={effectiveLabel}
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
        loadingLabel = "Loading content...",
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
        <SkeletonContext.Provider value={{ effect, animate, loadingLabel }}>
            <Element
                as="div"
                ref={ref}
                data-skeleton-group
                classNames={groupClassNames}
                role="alert"
                aria-busy="true"
                aria-label={loadingLabel}
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
