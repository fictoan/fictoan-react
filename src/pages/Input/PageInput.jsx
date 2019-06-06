import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

import {
    Row,
    Portion,
    Card,
    HRule,
    Form,
    FormGroup,
    FormUnit,
    InputField,
    TextArea,
    InputLabel,
    FileUpload
} from '../../assets/fictoan/fictoan'
import RadioButton from "../../assets/fictoan/components/Form/RadioGroup/RadioButton";
import RadioGroup from '../../assets/fictoan/components/Form/RadioGroup/RadioGroup';


//  SAMPLE CODES  /////////////////////////////////////////////////////////////////////////////////////////////////////
const egColourScheme=
    `// Primary colour
$colorHue : $colorAmber; //#fcb83b
 
// Derived colours
$colorTint     : lighten($colorHue, 36%);
$colorShade    : darken($colorHue, 56%);
$colorAnalogue : complement($colorHue);
$colorAccent   : adjust-hue($colorHue, -216deg);
`;





//  LAYOUT  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
class PageInput extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "Input elements — FICTOAN"
    }

    render() {
        return (
            <div id="page-layout">
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-hue">Input</h2>
                    </Portion>
                </Row>

                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <Card className="padding-all-tiny shape-rounded shadow-soft">
                            <h6 className="margin-bottom-tiny">A sample form</h6>

                            <Form>
                                <FormGroup>
                                    <FormUnit>
                                        <InputField required />
                                        <InputLabel
                                            value="First name"
                                            helpText="As on your passport"
                                        />
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField required />
                                        <InputLabel
                                            value="Last name"
                                            helpText="As on your passport"
                                        />
                                    </FormUnit>
                                </FormGroup>

                                <FormUnit>
                                    <InputField
                                        className="validate-this"
                                        type="email" />
                                    <InputLabel
                                        value="New email ID"
                                        helpText="Your work email"
                                        errorText="That’s not an email, bro."
                                    />
                                </FormUnit>

                                <FormUnit>
                                    <InputField
                                        type="email" value="name@company.com" readonly />
                                    <InputLabel
                                        value="Current email ID"
                                    />
                                </FormUnit>

                                <FormGroup>
                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="State"/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="Country"/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="ZIP"/>
                                    </FormUnit>
                                </FormGroup>

                                <FormUnit>
                                    <TextArea rows="4" />
                                    <InputLabel
                                        value="Bio"
                                        helpText="Tell us about yourself"
                                    />
                                </FormUnit>

                                <FormUnit>
                                    <FileUpload/>
                                    <InputLabel
                                        value="Upload photo"
                                        helpText="Max size 2mb"
                                    />
                                </FormUnit>

                                <FormUnit>
                                    <RadioGroup defaultSelected="cat" options={[{id:'cat',value:'cat'},{id:'dog',value:'dogs'}]} onChange={(selected)=>console.log("I changed!",selected)} />
                                </FormUnit>
                            </Form>
                        </Card>
                    </Portion>
                </Row>


                <Row className="content-padding-large">
                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egColourScheme} language="scss" theme={undefined}>
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
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default PageInput
