import React from "react";

import { Element } from "../Element/Element";
import { ColourPropTypes, CommonAndHTMLProps } from "../Element/constants";

import "./drawer.css";

// prettier-ignore
export interface DrawerCustomProps {
    position              : "top" | "right" | "bottom" | "left";
    isOpen              ? : boolean;
    onCloseCallback     ? : () => void;
    closeOnClickOutside ? : boolean;
    isDismissable       ? : boolean;
}

export type DrawerElementType = HTMLDivElement;
export type DrawerProps = Omit<CommonAndHTMLProps<DrawerElementType>, keyof DrawerCustomProps> &
    DrawerCustomProps;

export const Drawer = React.forwardRef(
    (
        {
            isOpen,
            children,
            onCloseCallback,
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
        let classNames: string[] = [];

        if (isOpen) {
            classNames.push("open");
        }

        if (position) {
            classNames.push(position);
        }

        const closeBottomDrawer = () => {
            if (onCloseCallback) {
                onCloseCallback();
            }
        };

        return (
            !!isOpen && (
                <>
                    <Element<DrawerElementType>
                        as="div"
                        data-drawer
                        ref={ref}
                        classNames={classNames}
                        {...props}
                    >
                        <Element
                            as="div"
                            classNames={[...classNames, `rest-of-page-overlay`]}
                            onClick={() => {
                                if (closeOnClickOutside) closeBottomDrawer();
                            }}
                        />

                        <Element
                            as="div"
                            className="drawer-content-wrapper"
                            padding={padding}
                            bgColor={bgColor}
                            bgColour={bgColour}
                        >
                            {isDismissable && (
                                <Element
                                    as="div"
                                    className="dismiss-button"
                                    onClick={closeBottomDrawer}
                                    role="button"
                                />
                            )}
                            {children}
                        </Element>
                    </Element>
                </>
            )
        );
    }
);
