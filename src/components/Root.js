import React, { Component } from 'react';
import HomeView from '../views/HomeView';
import ChallengesView from '../views/ChallengesView';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import i18n from '../i18n';
import Lang from './Lang';

class Root extends Component {
    state = {
        lang: i18n.language
    }

    changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        this.setState({
            lang: i18n.language
        })
    }

    render() {
        return (
            <BrowserRouter>
                <header className="header">
                    <div className="container">
                        <div className="header_logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>

                        <Nav />

                        <Lang changeLanguage={this.changeLanguage} />
                    </div>
                </header>


                <main>
                    <Switch>
                        <Route exact path="/" component={HomeView} />
                        <Route path="/challenges" component={() => <ChallengesView />} />
                    </Switch>
                </main>

            </BrowserRouter>
        );
    };
};

export default Root;