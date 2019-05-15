import React from 'react'
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

import {
    Header,
    PageWithSidebar,
    ContentWrapper,
    SidebarWrapper,
    SidebarItem,
    SidebarItemText,
    SidebarItemIcon
} from './assets/fictoan/fictoan'

// import { HashLink as Link } from "react-router-hash-link";

import Home from './pages/Home/Home'
import GettingStarted from './pages/GettingStarted/GettingStarted'

class App extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <div>
                <Router>

                    <PageWithSidebar>
                        <SidebarWrapper>
                            <Link to="/">
                                <SidebarItem>
                                    <SidebarItemIcon>
                                        <svg viewBox="0 0 24 24">
                                            <polygon
                                                className="fill-hue"
                                                points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" />
                                            <polygon
                                                className="fill-hue"
                                                points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" />
                                        </svg>
                                    </SidebarItemIcon>
                                    <SidebarItemText>Home</SidebarItemText>
                                </SidebarItem>
                            </Link>

                            <Link to="/getting-started">
                                <SidebarItem>
                                    <SidebarItemIcon>
                                        <svg viewBox="0 0 24 24">
                                            <polygon
                                                className="fill-hue"
                                                points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" />
                                            <polygon
                                                className="fill-hue"
                                                points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" />
                                        </svg>
                                    </SidebarItemIcon>
                                    <SidebarItemText>Getting started</SidebarItemText>
                                </SidebarItem>
                            </Link>

                            <SidebarItem>
                                <SidebarItemIcon>
                                    <svg viewBox="0 0 24 24">
                                        <polygon
                                            className="fill-hue"
                                            points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" />
                                        <polygon
                                            className="fill-hue"
                                            points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" />
                                    </svg>
                                </SidebarItemIcon>
                                <SidebarItemText>Home</SidebarItemText>
                            </SidebarItem>

                            <SidebarItem>
                                <SidebarItemIcon>
                                    <svg viewBox="0 0 24 24">
                                        <polygon
                                            className="fill-hue"
                                            points="20 21 14 21 14 14 10.04 14 9.92 21 4 21 4 9 12 4 20 9 20 21" />
                                        <polygon
                                            className="fill-hue"
                                            points="21.23 11.29 12 5.75 2.77 11.29 1.23 8.71 12 2.25 22.77 8.71 21.23 11.29" />
                                    </svg>
                                </SidebarItemIcon>
                                <SidebarItemText>Home</SidebarItemText>
                            </SidebarItem>
                        </SidebarWrapper>

                        <ContentWrapper>
                            <Header onMenuBtnClick={this.onMenuBtnClick}/>
                            <Switch>
                                <Route exact path='/' component={ Home }/>
                                <Route exact path='/getting-started' component={ GettingStarted }/>
                            </Switch>
                        </ContentWrapper>
                    </PageWithSidebar>
                </Router>
            </div>
        );
    }
}

export default App
