import React, { useState, useEffect } from 'react';
import Tabs from '../components/Tabs';
import LoadingView from './LoadingView';
import { configAPI } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { withTranslation, WithTranslation } from 'react-i18next';

interface ChallengesViewsType extends WithTranslation {
	t(el: string): string;
	lang: string;
}

const ChallengesViews = ({ t, lang }: ChallengesViewsType): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [challengesWeek, setChallengesWeek] = useState([]);

	useEffect(() => {
		document.title = 'Fortnite | Challenges';

		try {
			setLoading(true);

			fetch(`${configAPI.gateway}https://fortniteapi.io/v1/challenges?season=current&lang=${lang}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: configAPI.key
				}
			})
				.then(res => res.json())
				.then(res => {
					console.log(res);
					setChallengesWeek(Object.values(res.weeks));
					setLoading(false);
				});
		} catch (err) {
			console.error(err);
		}
	}, [lang]);

	return (
		<div className='container'>
			<h1>{t('challenges_title_week')}</h1>

			{loading ? (
				<LoadingView />
			) : (
				<Tabs>
					{challengesWeek.map(
						(elNav: any, index: number): JSX.Element => (
							<div key={elNav.name} data-label={index} data-label_title={elNav.name}>
								<ul className='challenges_week'>
									{elNav.challenges.map((item: any) => (
										<li key={item.quest_id} className='challenges_week_item'>
											<div className='challenges_week_item_title'>
												<h3>
													{item.title} ({item.progress_total})
												</h3>
												{item.party_assist && (
													<div className='challenges_week_item_title:assist'>
														<FontAwesomeIcon icon={faUsers} /> {t('challenges_assist')}
													</div>
												)}
											</div>
											<span>
												{t('challenges_reward')}: {item.xp}
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
