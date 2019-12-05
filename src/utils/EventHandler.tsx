import React, {
    PureComponent,
    ReactElement,
    RefObject,
    createRef,
    HTMLProps
} from "react";

interface Props extends HTMLProps<HTMLDivElement> {
    onClickInsideCallback?: Function;
    onClickOutsideCallback?: Function;
}

export class HandleEvents extends PureComponent<Props> {
    componentRef: RefObject<HTMLDivElement> = createRef();

    componentDidMount(): void {
        // @ts-ignore
        document.addEventListener("mousedown", this.onMouseDown);
    }

    componentWillUnmount(): void {
        // @ts-ignore
        document.removeEventListener("mousedown", this.onMouseDown);
    }

    onMouseDown = (event: React.MouseEvent): void => {
        const { onClickInsideCallback, onClickOutsideCallback } = this.props;
        if (this.componentRef) {
            // @ts-ignore
            if (this.componentRef.current.contains(event.target)) {
                if (onClickInsideCallback) onClickInsideCallback();
            } else if (onClickOutsideCallback) onClickOutsideCallback();
        }
    };

    render(): ReactElement {
        const {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onClickOutsideCallback,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onClickInsideCallback,
            ...props
        } = this.props;
        return <div ref={this.componentRef} {...props} />;
    }
}
