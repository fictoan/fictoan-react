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
class Colour extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN — Colours"
    }

    render() {
        return (
            <div id="page-layout">
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-hue">Colour</h2>
                    </Portion>
                </Row>


                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h3>Colour scheme</h3>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <p>FICTOAN uses a HSL-based colour system, and you should, too. You can read why <a HRuleef="https://sujansundareswaran.com/blog/why-hsl-is-better-than-hex-and-rgb">here ↗</a>.</p>

                        <p>An yellow-ish orange serves as the primary hue. Rich black for text, and a mild tint of the primary hue for backgrounds. Comes with one complementary colour and one accent. All colours are manipulations of the primary hue, as you can see below.</p>
                    </Portion>
                </Row>

                <Row className="content-padding-large small-gutters">
                    <Portion className="one-fifth no-padding-bottom">
                        <Card className="bg-hue padding-all-fixed padding-top-tiny"/>
                    </Portion>

                    <Portion className="one-fifth no-padding-bottom">
                        <Card className="bg-shade padding-all-fixed padding-top-tiny"/>
                    </Portion>

                    <Portion className="one-fifth no-padding-bottom">
                        <Card className="bg-tint padding-all-fixed padding-top-tiny"/>
                    </Portion>

                    <Portion className="one-fifth no-padding-bottom">
                        <Card className="bg-analogue padding-all-fixed padding-top-tiny"/>
                    </Portion>

                    <Portion className="one-fifth no-padding-bottom">
                        <Card className="bg-accent padding-all-fixed padding-top-tiny"/>
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


                <Row className="content-padding-large">
                    <Portion className="whole">
                        <HRule className="primary" />
                    </Portion>
                </Row>

                {/*  Equal-width columns  =========================================================================  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h3>List of colours</h3>
                        <p>Below is the full list of colours available in FICTOAN. Use one of the below prefixes, pick a colour and you’re good to go.</p>
                    </Portion>

                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egColourUsage} language="markup" theme={undefined}>
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


                {/*  RED  ========================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-red-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  SALMON  =====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-salmon-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>salmon-10</p>
                    </Portion>
                </Row>



                {/*  ORANGE  =====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>orange-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-orange-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  AMBER  ======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>amber-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-amber-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  YELLOW  =====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>yellow-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-yellow-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  PISTACHIO  ==================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pistachio-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pistachio-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  GREEN  ======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>green-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-green-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  TEAL  =======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>teal-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-teal-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  CYAN  =======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>cyan-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-cyan-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>



                {/*  SKY  ========================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>sky-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-sky-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  BLUE  =======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>blue-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-blue-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  INDIGO  =====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>indigo-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-indigo-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  VIOLET  =====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>violet-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-violet-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  PURPLE  =====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>purple-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-purple-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  PINK  =======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>pink-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-pink-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>





                {/*  CRIMSON  ====================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>crimson-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-crimson-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  BROWN  ======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>brown-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-brown-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  SLATE  ======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>slate-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-slate-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  GREY  =======================================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-90 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-90</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-80 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-80</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-70 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-70</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-60 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-60</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-50 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-50</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-40 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-40</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-30 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-30</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-20 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>grey-20</p>
                    </Portion>
                    <Portion className="one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-grey-10 margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>red-10</p>
                    </Portion>
                </Row>


                {/*  BLACK and WHITE  ============================================================================  */}
                <Row className="margin-all-tiny no-gutters">
                    <Portion className="one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-black margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>black</p>
                    </Portion>
                    <Portion className="one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card className="bg-white margin-bottom-fixed padding-all-fixed padding-top-tiny" />
                        <p>white</p>
                    </Portion>
                    <Portion className="one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                        <Card id="transparent-card" className="bg-transparent margin-bottom-fixed padding-all-fixed padding-top-tiny no-border" />
                        <p>transparent</p>
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default Colour
