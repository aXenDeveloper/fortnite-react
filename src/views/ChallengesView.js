import React, { Component } from 'react';
import { configAPI } from '../config';
import Tabs from '../components/Tabs';
import i18n from '../i18n';
import LoadingView from './LoadingView';

class ChallengesViews extends Component {
    state = {
        loading: false,
        items: []
    }

    componentDidMount() {
        document.title = 'Fortnite | Challenges';
        this.getAPI();
    }

    getAPI = async () => {
        try {
            this.setState({
                loading: true
            });
            const API = await fetch(`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=${i18n.language}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': configAPI.key
                }
            });
            const data = await API.json();
            console.log(data);


            this.setState({
                items: Object.values(data.weeks),
                loading: false
            })
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Test</h1>

                {this.state.loading ? <LoadingView /> : (
                    <Tabs>
                        {this.state.items.map((el, index) => (

                            <div key={el.name} label={index} label_title={el.name}>
                                {el.challenges.map(e => (
                                    <div key={e.quest_id}>
                                        {e.title}
                                    </div>
                                ))}
                            </div>

                        ))}
                    </Tabs>
                )}
            </div>
        )
    };
};

export default ChallengesViews;