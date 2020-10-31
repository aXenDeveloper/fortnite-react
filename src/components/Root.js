import React, { Component } from 'react';
import HomeView from '../views/homeView';
import i18n from '../i18n';
import ChallengesView from '../views/challengesViews';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Lang from './Lang';

class Root extends Component {

    changeLanguage = lng => {
        i18n.changeLanguage(lng);
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Lang changeLanguage={this.changeLanguage} />

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