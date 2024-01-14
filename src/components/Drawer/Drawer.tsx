import React, { useState, useEffect } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import "./drawer.css";

export interface DrawerCustomProps {
    position              : "top" | "right" | "bottom" | "left";
    openWhen            ? : boolean;
    closeWhen           ? : () => void;
    closeOnClickOutside ? : boolean;
    isDismissable       ? : boolean;
}

export type DrawerElementType = HTMLDivElement;
export type DrawerProps = Omit<CommonAndHTMLProps<DrawerElementType>, keyof DrawerCustomProps> &
    DrawerCustomProps;

export const Drawer = React.forwardRef(
    (
        {
            openWhen,
            children,
            closeWhen,
            closeOnClickOutside,
            padding,
            position,
            bgColor,
            bgColour,
            isDismissable = true,
            ...props
        }: DrawerProps,
        ref: React.Ref<DrawerElementType>
    ) => {
        const [shouldRender, setShouldRender] = useState(openWhen);

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

        return shouldRender ? (
            <>
                <Element<DrawerElementType>
                    as="div"
                    data-drawer
                    ref={ref}
                    classNames={classNames}
                    onAnimationEnd={onAnimationEnd}
                    {...props}
                >
                    {openWhen && closeOnClickOutside && (
                        <Element
                            as="div"
                            className={`rest-of-page-overlay ${openWhen ? "visible" : ""}`}
                            onClick={closeDrawer}
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

export default Drawer;
