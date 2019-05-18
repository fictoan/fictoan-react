import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

import {
    Row,
    Portion
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
class Layout extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN Framework"
    }

    render() {
        return (
            <div id="page-layout">
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-hue">Layout</h2>
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


                {/*  Unequal-width columns  =======================================================================  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h5>Unequal-width columns</h5>
                        <p>Add a class to the <code>Portion</code>, in fractions, starting with <code>whole</code>, and all the way to <code>fifteen-sixteenths</code>.</p>
                    </Portion>

                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egUnequalWidthColumns} language="markup" theme={undefined}>
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

                <Row className="margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60 retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="one-ninth bg-slate-20">1/9</Portion>
                    <Portion className="three-fourteenths bg-slate-40">3/14</Portion>
                    <Portion className="two-tenths bg-slate-20">2/10</Portion>
                    <Portion className="four-thirteenths bg-slate-40">4/13</Portion>
                    <Portion className="two-twelfths bg-slate-20">2/12</Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>


                {/*  Mixed-width columns  =========================================================================  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h5>Mixed-width columns</h5>
                        <p>You cdd classes to just some of the <code>Portion</code>s, and the others will distribute the remaining space amongst themselves.</p>
                    </Portion>

                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egMixedWidthColumns} language="markup" theme={undefined}>
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

                <Row className="margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60 retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile">
                {/*<Row className="margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60retain-layout-always">*/}
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="one-sixth bg-slate-20">1/6</Portion>
                    <Portion className="bg-slate-40">Portion</Portion>
                    <Portion className="bg-slate-20">Portion</Portion>
                </Row>



                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>


                {/*  Responsive helpers  //////////////////////////////////////////////////////////////////////////  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h3>Responsiveness</h3>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <h5>Breakpoints</h5>
                        <p>Use these class suffixes to manipulate <code>Portion</code> widths across devices.</p>
                    </Portion>

                    <Portion className="one-fourth no-padding-bottom">
                        <p className="weight-600 no-margin-bottom">Mobile</p>
                        <p className="no-margin-bottom">Less than 600px</p>
                        <code>-mobile</code>
                    </Portion>

                    <Portion className="one-fourth no-padding-bottom">
                        <p className="weight-600 no-margin-bottom">Tab portrait</p>
                        <p className="no-margin-bottom">601px to 900px</p>
                        <code>-tab-pt</code>
                    </Portion>

                    <Portion className="one-fourth no-padding-bottom">
                        <p className="weight-600 no-margin-bottom">Tab landscape</p>
                        <p className="no-margin-bottom">901px to 1200px</p>
                        <code>-tab-ls</code>
                    </Portion>

                    <Portion className="one-fourth no-padding-bottom">
                        <p className="weight-600 no-margin-bottom">Desktop</p>
                        <p className="no-margin-bottom">1201px and up</p>
                        <code>-desktop</code>
                    </Portion>

                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egBreakpoints} language="markup" theme={undefined}>
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
                    <Portion className="one-sixth one-fourth-on-tab-ls one-third-on-tab-pt half-on-mobile bg-slate-40">
                        <p className="hide-on-tab-ls hide-on-tab-pt hide-on-mobile">I’m 1/6 on desktop.</p>
                        <p className="show-only-on-tab-ls">I’m 1/4 on tab-ls.</p>
                        <p className="show-only-on-tab-pt">I’m 1/3 on tab-pt.</p>
                        <p className="show-only-on-mobile">I’m 1/2 on mobile.</p>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>


                {/*  Turn off Responsiveness  =====================================================================  */}
                <Row className="content-padding-large">
                    <Portion className="whole">
                        <h5>Turn off responsiveness</h5>
                        <p>By default, all <code>Portions</code> become 100% width on mobile. But you can turn off this behaviour, again with classes for the <code>Row</code>.</p>
                    </Portion>

                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egTurnOffResponsiveness} language="markup" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`${className}`} style={style}>
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
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>


                {/*  Visibility  ==================================================================================  */}
                <Row className="content-padding-large">
                    <Portion className="whole">
                        <h5>Visibility across breakpoints</h5>
                        <p>Add any combination of these below classes to any element to show or hide across the breakpoints defined above.</p>
                    </Portion>

                    <Portion className="half half-on-tab-ls half-on-tab-pt half-on-mobile">
                        <code className="margin-bottom-fixed">hide-on-desktop</code>
                        <code className="margin-bottom-fixed">hide-on-tab-ls</code>
                        <code className="margin-bottom-fixed">hide-on-tab-ls</code>
                        <code className="margin-bottom-fixed">hide-on-mobile</code>
                    </Portion>

                    <Portion className="half half-on-tab-ls half-on-tab-pt half-on-mobile">
                        <code className="margin-bottom-fixed">show-only-on-desktop</code>
                        <code className="margin-bottom-fixed">show-only-on-tab-ls</code>
                        <code className="margin-bottom-fixed">show-only-on-tab-ls</code>
                        <code className="margin-bottom-fixed">show-only-on-mobile</code>
                    </Portion>
                </Row>


                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>


                {/*  Gutters - Default  //////////////////////////////////////////////////////////////////////////  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h3>Gutters</h3>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <h5>Default gutter sizing</h5>
                        <p>The <code>Portion</code> component comes with padding, which doubles up as the gutter for the grid layout. By default, this is 3x the <code>$measureFixed</code> variable, which comes to 24px.</p>
                    </Portion>
                </Row>

                <Row className="margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-40">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>


                {/*  Gutters - Large  //////////////////////////////////////////////////////////////////////////  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h5>Large gutters</h5>
                        <p>Add <code>large-gutters</code> class to the <code>Row</code> parent to increase gutter width.</p>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egLargeGutters} language="markup" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`${className}`} style={style}>
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

                <Row className="margin-all-tiny large-gutters shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-40">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>



                {/*  Gutters - Small  //////////////////////////////////////////////////////////////////////////  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h5>Small gutters</h5>
                        <p>Add <code>small-gutters</code> class to the <code>Row</code> parent to decrease gutter width.</p>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egSmallGutters} language="markup" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`${className}`} style={style}>
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


                <Row className="margin-all-tiny small-gutters shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-40">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>



                {/*  Gutters - None  //////////////////////////////////////////////////////////////////////////  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h5>No gutters</h5>
                        <p>Add <code>no-gutters</code> class to the <code>Row</code> parent to remove gutter width.</p>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egNoGutters} language="markup" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`${className}`} style={style}>
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


                <Row className="margin-all-tiny no-gutters shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row.large-gutters</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-40">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>




                {/*  Padding - Default  //////////////////////////////////////////////////////////////////////////  */}
                <Row className="content-padding-large">
                    <Portion className="whole no-padding-bottom">
                        <h3>Content padding</h3>
                        <p>The <code>Portion</code> by default takes up the full width of the parent <code>Row</code>. You can add padding to the left and right sides to centre the content.</p>
                    </Portion>

                    <Portion className="whole no-padding-bottom">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egPaddedContent} language="markup" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`${className}`} style={style}>
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

                <Row className="content-padding-tiny margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-small margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-medium margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-large margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-huge margin-all-tiny shape-rounded shadow-soft bg-slate-20 border-slate-60">
                    <Portion className="whole bg-slate-60">Row</Portion>
                    <Portion className="bg-slate-20">
                        <p>Portion</p>
                        <div className="full-width padding-all-tiny bg-amber-40 border-amber-60">Content</div>
                    </Portion>
                </Row>

                <Row className="content-padding-large">
                    <Portion className="whole">
                        <hr className="bg-slate-40 margin-top-tiny margin-bottom-tiny" />
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default Layout
