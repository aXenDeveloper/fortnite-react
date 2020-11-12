import React from 'react';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

const Nav = ({ t }) => (
    <nav className="header_nav">
        <ul>
            <li>
                <Link to="/">{t('nav_home')}</Link>
            </li>
            <li>
                <Link to="/shop">{t('nav_shop')}</Link>
            </li>
            <li>
                <Link to="/challenges">{t('nav_challenges')}</Link>
            </li>
        </ul>
    </nav>
);

export default withTranslation()(Nav);