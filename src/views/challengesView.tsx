import React, { useState, useEffect } from 'react';
import Tabs from '../components/Tabs';
import LoadingView from './LoadingView';
import { configAPI } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

type ChallengesViewsType = {
	t(el: string): string;
};

const ChallengesViews = ({ t }: ChallengesViewsType): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		document.title = 'Fortnite | Challenges';
		getAPI();
	}, []);

	const getAPI = async () => {
		try {
			setLoading(true);

			await fetch(
				`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=${i18n.language}`,
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
					setItems(Object.values(res.weeks));
					setLoading(false);
				});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container'>
			<h1>{t('challenges_title_week')}</h1>

			{loading ? (
				<LoadingView />
			) : (
				<Tabs>
					{items.map(
						(el: any, index: any): JSX.Element => (
							<div
								key={el.name}
								data-label={index}
								data-label_title={el.name}>
								<ul className='challenges_week'>
									{el.challenges.map((e: any) => (
										<li
											key={e.quest_id}
											className='challenges_week_item'>
											<div className='challenges_week_item_title'>
												<h3>
													{e.title} (
													{e.progress_total})
												</h3>
												{e.party_assist && (
													<div className='challenges_week_item_title:assist'>
														<FontAwesomeIcon
															icon={faUsers}
														/>{' '}
														{t('challenges_assist')}
													</div>
												)}
											</div>
											<span>
												{t('challenges_reward')}: {e.xp}
												xp
											</span>
										</li>
									))}
								</ul>
							</div>
						)
					)}
				</Tabs>
			)}
		</div>
	);
};

export default withTranslation()(ChallengesViews);
