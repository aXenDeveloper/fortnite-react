import React, { useState } from 'react';
import HomeView from '../views/HomeView';
import ShopView from '../views/ShopView';
import ChallengesView from '../views/ChallengesView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import Lang from './Lang';

const Root = (): JSX.Element => {
	const [lang, setLang] = useState<string>(i18n.language);

	const changeLanguage = (lng: string): void => {
		i18n.changeLanguage(lng);
		setLang(i18n.language);
	};

	return (
		<BrowserRouter>
			<header className='header'>
				<div className='container'>
					<div className='header_logo'>
						<Link to='/'>
							<img src={logo} alt='Logo' />
						</Link>
					</div>

					<Nav />

					<Lang changeLanguage={changeLanguage} />
				</div>
			</header>

			<main>
				<Switch>
					<Route exact path='/' component={HomeView} />
					<Route path='/shop' component={() => <ShopView lang={lang} />} />
					<Route path='/challenges' component={() => <ChallengesView lang={lang} />} />
				</Switch>
			</main>
		</BrowserRouter>
	);
};

export default Root;
