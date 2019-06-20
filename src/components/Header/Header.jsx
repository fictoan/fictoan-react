import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Row from '../Row/Row';
import Portion from '../Portion/Portion';

class Header extends React.PureComponent {
    render() {
        return (
            <Row className="docs-header bg-white shadow-mild vertically-centre-items">
                <Portion className="whole horizontal vertically-centre-items">
                    <div className="menu-toggle" onClick={this.props.onMenuBtnClick}>
                        <h6 className="weight-400">&mdash;</h6>
                        <h6 className="weight-400">&ndash;</h6>
                    </div>
                </Portion>
            </Row >
        )
    }
}

Header.propTypes = {
    // eslint-disable-next-line react/no-typos
    onMenuBtnClick: PropTypes.function,
}

export default Header
