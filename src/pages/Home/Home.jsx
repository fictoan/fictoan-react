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
    `    
    <button className="shape-rounded bg-red text-white shadow-soft">
        Click me!
    </button>
    `;

class Home extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN Framework"
    }

    render() {
        return (
            <div>
                <Row className="padded-content margin-top-small">
                    <Portion className="whole">
                        {/*<h2 className="margin-bottom-small">React+FICTOAN</h2>*/}
                        {/*<h5 className="weight-400 margin-bottom-tiny">Simple, modular components for building responsive interfaces in React. Style easily with functional CSS.</h5>*/}

                        <Highlight {...defaultProps} code={exampleCode} language="jsx" theme={undefined}>
                            {({className, style, tokens, getLineProps, getTokenProps}) => (
                                <pre className={`margin-bottom-fixed ${className}`} style={style}>
                                    {tokens.map((line, i) => (
                                        <div {...getLineProps({line, key: i})}>
                                            {line.map((token, key) => (
                                                <span {...getTokenProps({token, key})} />
                                            ))}
                                        </div>
                                    ))}
                                </pre>
                            )}
                        </Highlight>

                        <button className="shape-rounded bg-blue text-white shadow-soft">
                            Click me!
                        </button>
                    </Portion>
                </Row>

                <Row className="padded-content">
                    <Portion className="two-thirds">
                        {/*<h6 className="weight-600">Intuitive class names</h6>*/}
                        {/*<p>Simple, straightforward naming convention that just makes intuitive sense.</p>*/}
                        <div className="margin-bottom-small">s</div>

                        <Form className="margin-bottom-tiny">
                            <FormUnit>
                                <InputField type="email" className="validate-this" required />
                                <InputLabel value="Email 1" helpText="Enter your work email" />
                            </FormUnit>

                            <FormUnit>
                                <InputField required />
                                <InputLabel value="Email 2" helpText="Enter your personal email" />
                            </FormUnit>

                            <FormGroup>
                                <FormUnit>
                                    <InputField type="email" required />
                                    <InputLabel value="First name" helpText="Huh" />
                                </FormUnit>

                                <FormUnit>
                                    <InputField required />
                                    <InputLabel value="Last name" />
                                </FormUnit>
                            </FormGroup>

                            <Button className="shape-rounded bg-red text-white shadow-hard" value="Cancel"/>
                        </Form>

                    </Portion>
                </Row>
            </div>
        );
    }
}

export default Home
