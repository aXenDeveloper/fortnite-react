import React from 'react';
import { withTranslation } from 'react-i18next';

const homeView = ({ t }) => {
    return (
        <div>
            <h1>{t('Welcome to React')}</h1>
        </div>
    );
};

export default withTranslation()(homeView);