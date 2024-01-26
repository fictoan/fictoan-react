import React, { useState, useEffect, useRef, RefObject } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

import { useClickOutside } from "../../hooks/UseClickOutside";

import "./drawer.css";

export interface DrawerCustomProps {
    position              : "top" | "right" | "bottom" | "left";
    width               ? : SpacingTypes;
    openWhen            ? : boolean;
    closeWhen           ? : () => void;
    closeOnClickOutside ? : boolean;
    isDismissable       ? : boolean;
    showOverlay         ? : boolean;
}

export type DrawerElementType = HTMLDivElement;
export type DrawerProps = Omit<CommonAndHTMLProps<DrawerElementType>, keyof DrawerCustomProps> &
    DrawerCustomProps;

export const Drawer = React.forwardRef(
    (
        {
            children,
            openWhen,
            closeWhen,
            closeOnClickOutside,
            padding,
            position,
            width,
            bgColor,
            bgColour,
            isDismissable = true,
            showOverlay = false,
            ...props
        }: DrawerProps,
        ref: React.Ref<DrawerElementType>
    ) => {
        const [shouldRender, setShouldRender] = useState(openWhen);

        const drawerRef = useRef(null);
        const effectiveRef  = (ref || drawerRef) as RefObject<HTMLDivElement>; // Fallback to external ref if provided, otherwise use local ref

        useEffect(() => {
            if (openWhen) {
                setShouldRender(true);
            }
        }, [openWhen]);

        const onAnimationEnd = () => {
            if (!openWhen) {
                setShouldRender(false);
            }
        };

        let classNames = ["drawer"];
        if (position) {
            classNames.push(position);
        }

        if (openWhen) {
            classNames.push("open");
        } else if (shouldRender) {
            classNames.push("close");
        }

        const closeDrawer = () => {
            if (closeWhen) {
                closeWhen();
            }
        };

        useClickOutside(effectiveRef, closeOnClickOutside ? closeDrawer : () => {});

        if (width) {
            classNames.push(width);
        }

        return shouldRender ? (
            <>
                <Element<DrawerElementType>
                    as="div"
                    data-drawer
                    ref={effectiveRef}
                    classNames={classNames}
                    onAnimationEnd={onAnimationEnd}
                    {...props}
                >
                    {openWhen && showOverlay && (
                        <Element
                            as="div"
                            className={`rest-of-page-overlay ${openWhen ? "visible" : ""}`}
                            {...(closeOnClickOutside ? { onClick: closeDrawer } : {})}
                        />
                    )}

                    <Element
                        as="div"
                        className="drawer-content-wrapper"
                        padding={padding}
                        bgColor={bgColor}
                        bgColour={bgColour}
                    >
                        {isDismissable && (
                            <button className="dismiss-button" onClick={closeDrawer} />
                        )}
                        {children}
                    </Element>
                </Element>
            </>
        ) : null;
    }
);
