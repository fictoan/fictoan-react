import React, { ReactNode, PureComponent } from "react";

import { HandleEvents } from "src/utils/EventHandler";
import { createClassName } from "src/utils/classNames";

interface InfoPanelProps {
    className?: string;
    open?: boolean;
    onClickOutsideCallback?: Function;
    checkOnClickOutside?: boolean;
    content?: ReactNode;
    renderContentOnOpen?: () => ReactNode;
}

interface InfoPanelState {
    open: boolean;
}

class InfoPanel extends PureComponent<InfoPanelProps, InfoPanelState> {
    static defaultProps = {
        className: "",
        checkOnClickOutside: true
    };

    constructor(props: Readonly<InfoPanelProps>) {
        super(props);
        this.state = {
            open: props.open || false
        };
    }

    componentDidUpdate({ open }: Readonly<InfoPanelProps>): void {
        if (open !== this.props.open) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                open: this.props.open
            });
        }
    }

    openInfoPanel = () => {
        this.setState({
            open: true
        });
    };

    closeInfoPanel = () => {
        this.setState({
            open: false
        });
    };

    onClickOutside = (): void => {
        const { checkOnClickOutside, onClickOutsideCallback } = this.props;

        if (checkOnClickOutside) {
            this.closeInfoPanel();
            if (onClickOutsideCallback) {
                onClickOutsideCallback();
            }
        }
    };

    renderContent = () => {
        const { content, renderContentOnOpen } = this.props;
        return renderContentOnOpen ? renderContentOnOpen() : content;
    };

    render() {
        const { children, className } = this.props;
        const { open } = this.state;

        const infoPanelProps = {
            className: createClassName([
                "info-panel",
                open && "open",
                className
            ]),
            onClickOutsideCallback: this.onClickOutside
        };

        const content = !!open && this.renderContent();

        return (
            <>
                <div onClick={this.openInfoPanel}>{children}</div>
                {content && (
                    <HandleEvents {...infoPanelProps}>{content}</HandleEvents>
                )}
            </>
        );
    }
}

export default InfoPanel;
