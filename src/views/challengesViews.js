import React, { Component } from 'react';
import { configAPI } from '../config';
import i18n from '../i18n';

class ChallengesViews extends Component {

    componentDidMount() {
        document.title = 'Fortnite | Challenges';
        this.getAPI();
    }

    getAPI = async () => {
        try {
            const API = await fetch(`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=${i18n.language}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': configAPI.key
                }
            });
            const data = await API.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                challenges
            </div>
        );
    };
};

export default ChallengesViews;