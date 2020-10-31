import React from 'react';
import i18n from '../i18n';

const Lang = ({ changeLanguage }) => {
    return (
        <select onChange={e => changeLanguage(e.target.value)} name="lang" defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="pl">Polish</option>
        </select>
    )
};

export default Lang;