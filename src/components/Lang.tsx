import React from 'react';
import i18n from '../i18n';

type LangType = {
	changeLanguage(lng: string): void;
};

const Lang = ({ changeLanguage }: LangType): JSX.Element => (
	<select
		onChange={e => changeLanguage(e.target.value)}
		defaultValue={i18n.language}>
		<option value='en'>English</option>
		<option value='pl'>Polish</option>
	</select>
);

export default Lang;
