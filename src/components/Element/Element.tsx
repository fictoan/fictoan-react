import React from "react";

import { BaseElement } from "./BaseElement";
import { ElementProps } from "./constants";

export const Element = React.forwardRef(
    <K extends {}>({ as: Component, ...props }: ElementProps<K>, ref: React.LegacyRef<HTMLElement>) => {
        return <BaseElement<K> as={Component} ref={ref} {...props} />;
    }
) as <K extends {}>(props: ElementProps<K> & { ref?: React.LegacyRef<HTMLElement> }) => React.ReactElement;
