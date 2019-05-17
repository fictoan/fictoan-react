import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

import {
    Row,
    Portion, Card,
} from '../../assets/fictoan/fictoan'


//  SAMPLE CODES  /////////////////////////////////////////////////////////////////////////////////////////////////////
const egEqualWidthColumns =
    `<Row>
    <Portion>...</Portion>
    <Portion>...</Portion>
    <Portion>...</Portion>
</Row>`;


const egUnequalWidthColumns =
    `<Row>
    <Portion className="one-ninth">...</Portion>
    <Portion className="three-fourteenths">...</Portion>
    <Portion className="two-tenths">...</Portion>
    <Portion className="four-thirteenths">...</Portion>
    <Portion className="two-twelfths">...</Portion>
</Row>`;


const egMixedWidthColumns =
    `<Row>
    <Portion className="one-sixth">...</Portion>
    <Portion">...</Portion>
    <Portion>...</Portion>
</Row>`;


const egBreakpoints =
    `<Row>
    <Portion className="one-sixth one-fourth-on-tab-ls one-third-on-tab-pt half-on-mobile">...</Portion>
</Row>`;


const egTurnOffResponsiveness =
    `<Row className="retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile">
    <Portion>...</Portion>
</Row>`;


const egLargeGutters =
    `<Row className="large-gutters">
    <Portion>...</Portion>
</Row>`;


const egSmallGutters =
    `<Row className="small-gutters">
    <Portion>...</Portion>
</Row>`;


const egNoGutters =
    `<Row className="no-gutters">
    <Portion>...</Portion>
</Row>`;


const egPaddedContent =
    `<Row className="content-padding-tiny">...</Row>
<Row className="content-padding-small">...</Row>
<Row className="content-padding-medium">...</Row>
<Row className="content-padding-large">...</Row>
<Row className="content-padding-huge">...</Row>`;







//  LAYOUT  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
class Colour extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN Framework"
    }

    render() {
        return (
            <div id="page-layout">
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-green">Colour</h2>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h3>Grid setup</h3>
                    </Portion>

                    <Portion className="whole">
                        <p>FICTOAN uses a 16–column grid system. Setting up your columns is simple— add a <code>Row</code> parent with as many <code>Portion</code> children as you need.</p>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-20 no-margin" />
                    </Portion>
                </Row>

                {/*  Equal-width columns  =========================================================================  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h5>Equal-width columns</h5>
                        <p>Add as many <code>Portion</code> divs you need, they’ll occupy equal space on the row. Two will occupy 50% each, three will take up 33.33% each, four– 25% each, and so on.</p>
                    </Portion>

                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egEqualWidthColumns} language="markup" theme={undefined}>
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

                <Row className="margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">Portion</Portion>
                    <Portion className="bg-slate-40">Portion</Portion>
                    <Portion className="bg-slate-20">Portion</Portion>
                </Row>


                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
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


                {/*  ORANGE  ========================================================================================  */}
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



                {/*  AMBER  ========================================================================================  */}
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





            </div>
        );
    }
}

export default Colour
