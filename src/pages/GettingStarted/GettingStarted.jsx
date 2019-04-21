import React from 'react'

import { Row, Portion } from '../../assets/fictoan/fictoan'


class GettingStarted extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "Getting started with FICTOAN"
    }

    render() {
        return (
            <div>
                <Row className="double-padding margin-top-small">
                    <Portion className="whole">
                        <h2 className="margin-bottom-fixed">Getting started</h2>
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default GettingStarted
