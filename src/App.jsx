import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home/Home'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;