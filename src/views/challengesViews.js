import React, { Component } from 'react';
import { configAPI } from '../config';

export default class challengesViews extends Component {

    getAPI = async () => {
        try {
            const API = await fetch(`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=en`, {
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

    componentDidMount() {
        this.getAPI();
    }

    render() {
        return (
            <div>
                challenges
            </div>
        );
    };
};