import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";



import {Row, Portion} from '../../assets/fictoan/fictoan'
import Form from "../../assets/fictoan/components/Form/Form";
import FormUnit from "../../assets/fictoan/components/Form/Components/FormUnit/FormUnit";
import InputField from "../../assets/fictoan/components/Form/Components/InputField/InputField";
import InputLabel from "../../assets/fictoan/components/Form/Components/InputLabel/InputLabel";

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
                    <Portion className="half">
                        {/*<h6 className="weight-600">Intuitive class names</h6>*/}
                        {/*<p>Simple, straightforward naming convention that just makes intuitive sense.</p>*/}
                        <div className="margin-bottom-small">s</div>

                        <Form>
                            <FormUnit>
                                <InputField type="email" required />
                                <InputLabel value="Enter something, bro" help="Enter your work email" />
                            </FormUnit>

                            <FormUnit>
                                <InputField required />
                                <InputLabel value="Enter" help="Enter your personal email" />
                            </FormUnit>
                        </Form>

                    </Portion>
                </Row>
            </div>
        );
    }
}

export default Home
