import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

import {
    Row,
    Portion,
    Form,
    FormUnit,
    FormGroup,
    InputField,
    InputLabel,
    Button,
} from '../../assets/fictoan/fictoan'

const exampleCode =
    `<button className="shape-rounded bg-blue text-white shadow-hard">
    Click me!
</button>`;

class Home extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN Framework"
    }

    render() {
        return (
            <div>
                <Row className="content-padding-tiny content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="margin-bottom-small">FICTOAN, Reactised.</h2>
                        <h5 className="weight-400 margin-bottom-fixed">Simple, modular components for quickly building responsive interfaces in React. Style easily with <code>className</code>, like so—</h5>

                        <pre className="full-width">
                            <Highlight {...defaultProps} code={exampleCode} language="jsx" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`margin-bottom-fixed ${className}`} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({line, key: i})}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({token, key})} />
                                                ))}
                                            </div>
                                        ))}
                                    </code>
                                )}
                            </Highlight>
                        </pre>

                        <button className="shape-rounded bg-blue text-white shadow-hard">
                            Click me!
                        </button>
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default Home
