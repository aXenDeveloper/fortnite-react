import React from 'react';
import { withTranslation } from 'react-i18next';
import Tabs from '../components/Tabs';

const HomeView = ({ t }) => {
    document.title = "Fortnite"

    return (
        <div className="container">
            <h1>{t('Welcome to React')}</h1>


            <Tabs>
                <div label={0} label_title="Tab 1">
                    test1
                </div>
                <div label={1} label_title="Tab 2">
                    test2
                </div>
                <div label={2} label_title="Tab 3">
                    test3
                </div>
            </Tabs>

        </div>
    );
};

export default withTranslation()(HomeView);