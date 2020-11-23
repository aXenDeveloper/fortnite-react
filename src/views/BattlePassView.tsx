import React, { useState, useEffect } from 'react';
import LoadingView from './LoadingView';
import { configAPI } from '../config';
import { withTranslation, WithTranslation } from 'react-i18next';

interface BattlePassViewType extends WithTranslation {
	t(el: string): string;
	lang: string;
}

const BattlePassView = ({ t, lang }: BattlePassViewType) => {
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		document.title = 'Fortnite | Battle Pass';

		try {
			setLoading(true);

			fetch(`${configAPI.gateway}https://fortniteapi.io/v1/battlepass?lang=${lang}&season=current`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: configAPI.key
				}
			})
				.then(res => res.json())
				.then(res => {
					console.log(res);
					setLoading(false);
				});
		} catch (err) {
			console.error(err);
		}
	}, [lang]);

	return (
		<div className='container'>
			<h1>{t('nav_battlepass')}</h1>

			{loading ? <LoadingView /> : <div>BattlePassView</div>}
		</div>
	);
};

export default withTranslation()(BattlePassView);
