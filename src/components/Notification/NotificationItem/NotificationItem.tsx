// FRAMEWORK ===========================================================================================================
import React, { useState, useEffect, SyntheticEvent } from "react";

// FICTOAN =============================================================================================================
import { Div } from "../../Element/Tags";
import { Element } from "../../Element/Element";

// STYLES ==============================================================================================================
import "./notification-item.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export interface NotificationItemCustomProps {
    kind             ? : "info" | "warning" | "error" | "success";
    showWhen           : boolean;
    isDismissible    ? : boolean;
    closeWhen          : () => void;
    secondsToShowFor ? : number;
    title            ? : string;
    description      ? : string;
}

export type NotificationItemElementType = HTMLDivElement;
export type NotificationItemProps =
    Omit<CommonAndHTMLProps<NotificationItemElementType>, keyof NotificationItemCustomProps>
    & NotificationItemCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const NotificationItem = React.forwardRef(
    (
        {
            showWhen,
            closeWhen,
            kind = "info",
            children,
            isDismissible,
            secondsToShowFor,
            title,
            description,
            ...props
        }: NotificationItemProps,
        ref: React.Ref<NotificationItemElementType>,
    ) => {
        let classNames: string[]          = [];
        const [ isVisible, setIsVisible ] = useState<boolean>(showWhen);

        useEffect(() => {
            if (showWhen) {
                setIsVisible(true);
            }

            const timer = showWhen
                ? setTimeout(() => {
                    closeWhen();
                }, (secondsToShowFor ?? 8) * 1000) // Default value is 8 seconds
                : undefined;

            return () => {
                timer && clearTimeout(timer);
            };
        }, [ showWhen, secondsToShowFor, closeWhen ]);

        if (kind) {
            classNames.push(kind);
        }

        if (isDismissible) {
            classNames.push("dismissible");
        }

        const onDismissClick = (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            closeWhen();
        };

        const handleKeyDown = (event: React.KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                closeWhen();
            }
        };

        const onTransitionEnd = () => {
            if (!showWhen) setIsVisible(false);
        };

        // Map notification types to ARIA roles
        const roleMap = {
            info    : "status",
            warning : "alert",
            error   : "alert",
            success : "status",
        };

        return (
            isVisible && (
                <Element<NotificationItemElementType>
                    as="div"
                    data-notification-item
                    ref={ref}
                    classNames={[ ...classNames, !showWhen ? "dismissed" : "" ]}
                    onTransitionEnd={onTransitionEnd}
                    role={roleMap[kind]}
                    aria-live={kind === "error" || kind === "warning" ? "assertive" : "polite"}
                    aria-atomic="true"
                    aria-label={title}
                    {...props}
                >
                    <div id={`notification-content-${props.id}`}>
                        {children}
                        {description && <span className="sr-only">{description}</span>}
                    </div>

                    {isDismissible && (
                        <Div
                            className="dismiss-button"
                            onClick={onDismissClick}
                            onKeyDown={handleKeyDown}
                            aria-label="Dismiss notification"
                            tabIndex={0}
                        >
                            <span className="sr-only">Close notification</span>
                        </Div>
                    )}
                </Element>
            )
        );
    },
);
