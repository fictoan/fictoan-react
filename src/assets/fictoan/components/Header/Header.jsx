import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Row, Portion } from '../../fictoan';

class Header extends React.PureComponent {
    render() {
        return (
            <Row className="docs-header bg-white shadow-mild vertically-centre-items">
                <Portion className="whole horizontal vertically-centre-items">
                    <div className="menu-toggle" onClick={this.props.onMenuBtnClick}>
                        <h6 className="weight-400">&mdash;</h6>
                        <h6 className="weight-400">&ndash;</h6>
                    </div>

                    <Link to="/" className="header-logo vertically-centre-items">
                        {/*<img className="App-logo margin-right-fixed" alt="FICTOAN" />*/}
                        <h6>FICTOAN</h6>
                    </Link>
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
