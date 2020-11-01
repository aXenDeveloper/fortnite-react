import React from 'react';
import i18n from '../i18n';

const Lang = () => {
    const language = (lng) => {
        i18n.changeLanguage(lng);
        // window.location.reload();
    }

    return (
        <select onChange={e => language(e.target.value)} name="lang" defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="pl">Polish</option>
        </select>
    )
};

export default Lang;