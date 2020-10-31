import React, { Component } from 'react';
import HomeView from '../views/HomeView';
import ChallengesView from '../views/ChallengesViews';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';

class Root extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />

                <main>
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route path="/challenges" component={ChallengesView} />
                    </Switch>
                </main>

            </BrowserRouter>
        );
    }
};

export default Root;