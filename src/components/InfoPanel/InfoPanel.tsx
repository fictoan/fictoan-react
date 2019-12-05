import React, { ReactNode, PureComponent } from "react";

import { createClassName } from "src/utils/classNames";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface InfoPanelProps extends BaseAndHTMLProps<HTMLDivElement> {
    open?: boolean;
    width?: "tiny" | "small" | "medium" | "large" | "huge";
}

const InfoPanel = ({ open, width, className, ...props }: InfoPanelProps) => {
    const classNames = [className];

    if (open) {
        classNames.push("open");
    }

    if (width) {
        classNames.push(width);
    }

    return <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="info-panel"
        className={createClassName(classNames)}
        {...props}
    />
};

export default InfoPanel;
