import React from "react";

import { Element } from "../Element/Element";
import { ColourPropTypes, CommonAndHTMLProps } from "../Element/constants";

import { BottomDrawerStyled } from "./BottomDrawer.styled";

// prettier-ignore
export interface BottomDrawerCustomProps {
    isOpen              ? : boolean;
    onCloseCallback     ? : () => void;
    overlayOpacity      ? : number;
    overlayColour       ? : ColourPropTypes;
    overlayColor        ? : ColourPropTypes;
    closeOnClickOutside ? : boolean;
    isDismissable       ? : boolean;
}

export type BottomDrawerElementType = HTMLDivElement;
export type BottomDrawerProps = Omit<CommonAndHTMLProps<BottomDrawerElementType>, keyof BottomDrawerCustomProps> &
    BottomDrawerCustomProps;

export const BottomDrawer = React.forwardRef(
    (
        {
            isOpen,
            children,
            onCloseCallback,
            closeOnClickOutside,
            padding,
            bgColor,
            bgColour,
            isDismissable = true,
            ...props
        }: BottomDrawerProps,
        ref: React.Ref<BottomDrawerElementType>
    ) => {
        let classNames = [];

        if (isOpen) {
            classNames.push("open");
        }

        const closeBottomDrawer = () => {
            if (onCloseCallback) {
                onCloseCallback();
            }
        };

        return (
            !!isOpen && (
                <>
                    <Element<BottomDrawerElementType>
                        as={BottomDrawerStyled}
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
                            className="bottom-drawer-content-wrapper"
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
