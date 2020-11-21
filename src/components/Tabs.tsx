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
				{children.map((el: any) => (
					<li
						key={el.props['data-label']}
						onClick={e => handleClick(e, el.props['data-label'])}
						className={`block_list_nav_item${
							el.props['data-label'] === activeTab
								? ' block_list_nav_item:current'
								: ''
						}`}>
						{el.props['data-label_title']}
					</li>
				))}
			</ul>

			{children.map(el => {
				if (el.props['data-label'] === activeTab) {
					return (
						<div
							key={el.props['data-label']}
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
