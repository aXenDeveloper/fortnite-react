import React, { useState, useEffect } from 'react';
import LoadingView from './LoadingView';
import { configAPI } from '../config';
import { withTranslation, WithTranslation } from 'react-i18next';

interface ShopViewType extends WithTranslation {
	t(el: string): string;
	lang: string;
}

const ShopView = ({ t, lang }: ShopViewType): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(true);
	const [itemDaily, setItemDaily] = useState<never[]>([]);

	useEffect(() => {
		document.title = 'Fortnite | Shop';

		try {
			setLoading(true);

			fetch(`${configAPI.gateway}https://fortniteapi.io/v1/shop?lang=${lang}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: configAPI.key
				}
			})
				.then(res => res.json())
				.then(res => {
					console.log(res);
					setItemDaily(res.daily);
					setLoading(false);
				});
		} catch (err) {
			console.error(err);
		}
	}, [lang]);

	return (
		<div className='container'>
			<h1>{t('nav_shop')}</h1>

			{loading ? (
				<LoadingView />
			) : (
				<>
					{itemDaily.map((el: any) => (
						<div key={el.id}>
							<img src={el.image} alt={el.name} />
						</div>
					))}

					{itemDaily.map((el: any) => (
						<div key={el.id}>
							<img src={el.full_background} alt={el.name} />
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default withTranslation()(ShopView);
