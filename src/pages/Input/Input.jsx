import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

import {
    Row,
    Portion,
    Card,
    HRule
} from '../../assets/fictoan/fictoan'


//  SAMPLE CODES  /////////////////////////////////////////////////////////////////////////////////////////////////////
const egColourUsage=
    `// Background
<div className="bg-yellow-60"></div>
 
// Text
<h3 className="text-green-80">Hello</h3>
 
// Border
<button className="border-indigo">Click me</button>
 
// Fill and stroke
<svg className="fill-green stroke-amber-60">
    <circle cx="12" cy="12" r="4"/>
</svg>
`;

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
class Input extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN — Colours"
    }

    render() {
        return (
            <div id="page-layout">
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-hue">Input</h2>
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

export default Input
