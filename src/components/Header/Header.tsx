import React, { ReactEventHandler, HTMLProps } from "react";
// import { Link } from 'react-router-dom'

import Row from "../Row/Row";
import Portion from "../Portion/Portion";

type HeaderProps = HTMLProps<HTMLDivElement> & {
    onMenuBtnClick: ReactEventHandler;
};

class Header extends React.PureComponent<HeaderProps, {}> {
    render() {
        return (
            <Row className="docs-header bg-white shadow-mild vertically-centre-items">
                <Portion className="whole horizontal vertically-centre-items">
                    <div
                        className="menu-toggle"
                        onClick={this.props.onMenuBtnClick}
                    >
                        <h6 className="weight-400">&mdash;</h6>
                        <h6 className="weight-400">&ndash;</h6>
                    </div>
                </Portion>
            </Row>
        );
    }
}

export default Header;
