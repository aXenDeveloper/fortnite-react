import React, { useState, MouseEvent } from 'react';

type TabsType = {
	children: JSX.Element[];
};

const Tabs = ({ children }: TabsType): JSX.Element => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const handleClick = (e: MouseEvent, newActiveTab: number): void => {
		e.preventDefault();
		setActiveTab(newActiveTab);
	};

	return (
		<div className='block_list'>
			<ul className='block_list_nav'>
				{children.map(el => (
					<li
						key={el.props.label}
						onClick={e => handleClick(e, el.props.label)}
						className={
							el.props.label === activeTab
								? 'block_list_nav:current'
								: ''
						}>
						{el.props.label_title}
					</li>
				))}
			</ul>

			{children.map(el => {
				if (el.props.label === activeTab) {
					return (
						<div
							key={el.props.label}
							className='block_list_content'>
							{el}
						</div>
					);
				}
				return '';
			})}
		</div>
	);
};

export default Tabs;
