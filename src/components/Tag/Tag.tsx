import React from "react";
import { Element } from "../Element/Element";
import { Text, TextProps } from "../Typography/Text";

import { TagStyled } from "./Tag.styled";

export type TagElementType = HTMLDivElement;
export type TagProps = TextProps;

export const Tag = React.forwardRef(
    (
        {
            isSans,
            isSerif,
            isMono,
            size = "small",
            weight = "600",
            align,
            textColour,
            textColor,
            children,
            ...props
        }: TagProps,
        ref: React.Ref<TagElementType>
    ) => {
        const textProps = {
            isSans,
            isSerif,
            isMono,
            size,
            weight,
            align,
            textColour: textColour || textColor,
        };

        return (
            <Element<TagElementType> as={TagStyled} ref={ref} color={textProps.textColour} {...props}>
                <Text margin="none" {...textProps}>
                    {children}
                </Text>
            </Element>
        );
    }
);
