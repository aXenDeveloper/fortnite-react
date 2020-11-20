import React, { useState, useEffect } from 'react';
import LoadingView from './LoadingView';
import { configAPI } from '../config';
import i18n from '../i18n';

const ShopView = (): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		document.title = 'Fortnite | Shop';
		// API();
	}, []);

	const API = async () => {
		try {
			setLoading(true);

			await fetch(
				`${configAPI.gateway}https://fortniteapi.io/v1/shop?lang=${i18n.language}`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: configAPI.key
					}
				}
			)
				.then(res => res.json())
				.then(res => {
					console.log(res);
					setLoading(false);
				});
		} catch (err) {
			console.error(err);
		}
	};

	return <>{loading ? <LoadingView /> : <div>Test</div>}</>;
};

export default ShopView;
