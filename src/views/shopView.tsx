import React, { useEffect } from 'react';
import { configAPI } from '../config';
import i18n from '../i18n';

const ShopView = (): JSX.Element => {
	useEffect(() => {
		document.title = 'Fortnite | Shop';
		API();
	}, []);

	const API = async () => {
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
			});
	};

	return <div>Sklep</div>;
};

export default ShopView;
