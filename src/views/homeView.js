import React from 'react';
import { withTranslation } from 'react-i18next';
import Tabs from './Tabs';

const HomeView = ({ t }) => {
    document.title = "Fortnite"

    return (
        <div className="container">
            <h1>{t('Welcome to React')}</h1>


            <Tabs>
                <div label="Tab 1">
                    test1
                </div>
                <div label="Tab 2">
                    test2
                </div>
                <div label="Tab 3">
                    test3
                </div>
            </Tabs>

        </div>
    );
};

export default withTranslation()(HomeView);