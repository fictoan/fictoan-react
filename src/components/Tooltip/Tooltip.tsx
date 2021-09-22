import React, { useState } from "react";
import { Card, CardProps } from "../Card/Card";

import { TooltipStyled } from "./Tooltip.styled";

export interface TooltipCustomProps {
    label: string;
    position?: "top" | "bottom" | "left" | "right";
    children?: React.ReactNode;
}

export type TooltipElementType = HTMLDivElement;
export type TooltipProps = Omit<CardProps, keyof TooltipCustomProps> & TooltipCustomProps;

export const Tooltip = React.forwardRef(
    ({ label, position = "bottom", children, ...props }: TooltipProps, ref: React.Ref<TooltipElementType>) => {
        const [appear, setAppear] = useState<boolean>(false);

        const show = () => {
            setAppear(true);
        };

        const hide = () => {
            setAppear(false);
        };

        return (
            <TooltipStyled onMouseOver={show} onMouseOut={hide}>
                {label && appear && (
                    <Card className={`tooltip ${position}`} paddingLeft="nano" paddingRight="nano" borderColor="transparent" ref={ref} {...props}>
                        {label}
                    </Card>
                )}
                {children}
            </TooltipStyled>
        );
    }
);
