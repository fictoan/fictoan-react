import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent";
import { createClassName } from "src/utils/classNames";

interface PortionProps extends Omit<HTMLProps<HTMLDivElement>, 'width'> {
    width?: {
        mobile?: string;
        tabletLandscape?: string;
        tabletPortrait?: string;
        desktop?: string;
    }
}

const Portion = ({ width, className, ...props }: PortionProps) => {
    const classNames = [className];
    if (width) {
        if (width.mobile) {
            classNames.push(`${width.mobile}-on-mobile`);
        }
        if (width.tabletLandscape) {
            classNames.push(`${width.tabletLandscape}-on-tab-ls`);
        }
        if (width.tabletPortrait) {
            classNames.push(`${width.tabletPortrait}-on-tab-pt`);
        }
        if (width.desktop) {
            classNames.push(width.desktop);
        }
    } else {
        classNames.push("whole");
    }

    return <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="portion"
        className={createClassName(classNames)}
        {...props}
    />
};

export default Portion;
