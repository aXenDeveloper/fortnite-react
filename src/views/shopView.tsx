import React, { useState, useEffect } from 'react';
import LoadingView from './LoadingView';
import { configAPI } from '../config';

type ShopViewType = {
	lang: string;
};

const ShopView = ({ lang }: ShopViewType): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(true);

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
					setLoading(false);
				});
		} catch (err) {
			console.error(err);
		}
	}, [lang]);

	return <>{loading ? <LoadingView /> : <div>Test</div>}</>;
};

export default ShopView;
