import React, { useState, useEffect, useRef, RefObject } from "react";

import { Element } from "../Element/Element";
import { Div } from "../Element/Tags";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

import { useClickOutside } from "../../hooks/UseClickOutside";

import "./drawer.css";

export interface DrawerCustomProps {
    position              : "top" | "right" | "bottom" | "left";
    size                ? : SpacingTypes;
    openWhen            ? : boolean;
    closeWhen           ? : () => void;
    closeOnClickOutside ? : boolean;
    isDismissible       ? : boolean;
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
            size,
            bgColor,
            bgColour,
            isDismissible = true,
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

        if (size) {
            classNames.push(size);
        }

        return shouldRender ? (
            <>
                <Element<DrawerElementType>
                    as="div"
                    data-drawer
                    ref={effectiveRef}
                    classNames={classNames}
                    onAnimationEnd={onAnimationEnd}
                    {...(closeOnClickOutside ? { onClick: closeDrawer } : {})}
                    {...props}
                >
                    {openWhen && showOverlay && (
                        <Div className={`rest-of-page-overlay ${openWhen ? "visible" : ""}`} />
                    )}

                    <Element
                        as="div"
                        className="drawer-content-wrapper"
                        padding={padding}
                        bgColor={bgColor}
                        bgColour={bgColour}
                    >
                        {isDismissible && (
                            <button className="dismiss-button" onClick={closeDrawer} />
                        )}
                        {children}
                    </Element>
                </Element>
            </>
        ) : null;
    }
);
