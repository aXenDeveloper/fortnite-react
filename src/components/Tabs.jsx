import React, { useState } from 'react';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }

    return (
        <div className="block_list">
            <ul className="block_list_nav">
                {children.map(el => (
                    <li key={el.props.label} onClick={e => handleClick(e, el.props.label)} className={el.props.label === activeTab ? "block_list_nav:current" : ""}>
                        {el.props.label_title}
                    </li>
                ))}
            </ul>

            {children.map(el => {
                if (el.props.label === activeTab) {
                    return <div key={el.props.label} className="block_list_content">{el}</div>
                }
                return "";
            })}
        </div>
    )
};

export default Tabs;