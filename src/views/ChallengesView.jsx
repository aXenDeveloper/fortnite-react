import React, { useState, useEffect } from 'react';
import { configAPI } from '../config';
import Tabs from '../components/Tabs';
import i18n from '../i18n';
import LoadingView from './LoadingView';

const ChallengesViews = () => {

    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        document.title = 'Fortnite | Challenges';
        getAPI();
    }, []);


    const getAPI = async () => {
        try {
            setLoading(true);
            const API = await fetch(`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=${i18n.language}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': configAPI.key
                }
            });
            const data = await API.json();
            console.log(data);

            setItems(Object.values(data.weeks));
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="container">
                <h1>Test</h1>

                {loading ? <LoadingView /> : (
                    <Tabs>
                        {items.map((el, index) => (

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

export default ChallengesViews;