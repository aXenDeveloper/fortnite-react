import React, { useEffect, useState } from 'react';
import { configAPI } from '../config';
import i18n from '../i18n';

const ChallengesViews = () => {

    document.title = 'Fortnite | Challenges';

    useEffect(() => {
        getAPI();
    }, []);

    const [items, setItems] = useState([]);


    const getAPI = async () => {
        try {
            const API = await fetch(`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=${i18n.language}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': configAPI.key
                }
            });
            const data = await API.json();
            console.log(data);


            setItems(Object.values(data.weeks));
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            {items.map(el => (
                <div>
                    {el.name}
                </div>
            ))}
        </div>
    );
};

export default ChallengesViews;