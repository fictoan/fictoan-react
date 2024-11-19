// FRAMEWORK ===========================================================================================================
import React, { useState, useEffect, useRef, RefObject } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Div } from "../Element/Tags";

// STYLES ==============================================================================================================
import "./drawer.css";

// HOOKS ===============================================================================================================
import { useClickOutside } from "../../hooks/UseClickOutside";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

// prettier-ignore
export interface DrawerCustomProps {
    position              : "top" | "right" | "bottom" | "left";
    size                ? : SpacingTypes;
    openWhen            ? : boolean;
    closeWhen           ? : () => void;
    closeOnClickOutside ? : boolean;
    isDismissible       ? : boolean;
    showOverlay         ? : boolean;
    label               ? : string;
}

export type DrawerElementType = HTMLDivElement;
export type DrawerProps = Omit<CommonAndHTMLProps<DrawerElementType>, keyof DrawerCustomProps> & DrawerCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            label,
            ...props
        }: DrawerProps,
        ref: React.Ref<DrawerElementType>
    ) => {
        const [shouldRender, setShouldRender] = useState(openWhen);

        const drawerRef = useRef(null);
        const effectiveRef = (ref || drawerRef) as RefObject<HTMLDivElement>;

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

        if (size) {
            classNames.push(size);
        }

        const closeDrawer = () => closeWhen?.();

        useClickOutside(effectiveRef, closeOnClickOutside ? closeDrawer : () => {});

        const handleKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === 'Escape' && isDismissible) {
                closeDrawer();
            }
        };

        return shouldRender ? (
            <>
                <Element<DrawerElementType>
                    as="div"
                    data-drawer
                    ref={effectiveRef}
                    classNames={classNames}
                    onAnimationEnd={onAnimationEnd}
                    onKeyDown={handleKeyDown}
                    role="dialog"
                    aria-modal="true"
                    aria-label={label || "Drawer"}
                    tabIndex={-1}
                    {...(closeOnClickOutside ? { onClick: closeDrawer } : {})}
                    {...props}
                >
                    {openWhen && showOverlay && (
                        <Div
                            className={`rest-of-page-overlay ${openWhen ? "visible" : ""}`}
                            aria-hidden="true"
                        />
                    )}

                    <Element
                        as="div"
                        className="drawer-content-wrapper"
                        padding={padding}
                        bgColor={bgColor}
                        bgColour={bgColour}
                        role="document"
                    >
                        {isDismissible && (
                            <button
                                className="dismiss-button"
                                onClick={closeDrawer}
                                aria-label="Close drawer"
                                tabIndex={0}
                            />
                        )}
                        {children}
                    </Element>
                </Element>
            </>
        ) : null;
    }
);
