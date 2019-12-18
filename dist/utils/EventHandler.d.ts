import React, { PureComponent, ReactElement, RefObject, HTMLProps } from "react";
interface Props extends HTMLProps<HTMLDivElement> {
    onClickInsideCallback?: Function;
    onClickOutsideCallback?: Function;
}
export declare class HandleEvents extends PureComponent<Props> {
    componentRef: RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onMouseDown: (event: React.MouseEvent<Element, MouseEvent>) => void;
    render(): ReactElement;
}
export {};
