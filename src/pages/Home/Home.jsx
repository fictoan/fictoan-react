import React from 'react'

import { Row, Portion, Header, PageWithSidebar, ContentWrapper, SidebarWrapper, SidebarItem, SidebarItemText, SidebarItemIcon } from '../../assets/fictoan/fictoan'

import { HashLink as Link } from "react-router-hash-link";

class Home extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <div>
                <Header onMenuBtnClick={this.onMenuBtnClick} />

                <PageWithSidebar>
                    <SidebarWrapper>
                        <SidebarItem>
                            <SidebarItemIcon>
                                <svg viewBox="0 0 24 24">
                                    <polygon points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" className="fill-thunder-cloud" />
                                    <polygon points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" className="fill-faded-ming" />
                                </svg>
                            </SidebarItemIcon>
                            <SidebarItemText>Home</SidebarItemText>
                        </SidebarItem>

                        <SidebarItem>
                            <SidebarItemIcon>
                                <svg viewBox="0 0 24 24">
                                    <polygon points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" className="fill-thunder-cloud" />
                                    <polygon points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" className="fill-faded-ming" />
                                </svg>
                            </SidebarItemIcon>
                            <SidebarItemText>Getting started</SidebarItemText>
                        </SidebarItem>

                        <SidebarItem>
                            <SidebarItemIcon>
                                <svg viewBox="0 0 24 24">
                                    <polygon points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" className="fill-thunder-cloud" />
                                    <polygon points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" className="fill-faded-ming" />
                                </svg>
                            </SidebarItemIcon>
                            <SidebarItemText>Home</SidebarItemText>
                        </SidebarItem>

                        <SidebarItem>
                            <SidebarItemIcon>
                                <svg viewBox="0 0 24 24">
                                    <polygon points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" className="fill-thunder-cloud" />
                                    <polygon points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" className="fill-faded-ming" />
                                </svg>
                            </SidebarItemIcon>
                            <SidebarItemText>Home</SidebarItemText>
                        </SidebarItem>
                    </SidebarWrapper>

                    <ContentWrapper>
                        <Row className="double-padding margin-top-small">
                            <Portion className="whole">
                                <h2 className="margin-bottom-fixed">React+FICTOAN</h2>
                            </Portion>
                        </Row>
                    </ContentWrapper>
                </PageWithSidebar>
            </div>
        );
    }
}

export default Home
