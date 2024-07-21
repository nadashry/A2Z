import React from 'react';
import styles from './Intership.module.css';

const Sidebar = ({ setActiveTab, activeTab }) => {
    const tabs = [
        { id: 'software-engineer', label: 'Software Engineer Intern' },
        { id: 'graphic-designer', label: 'Graphic Designer Intern' },
        { id: 'content-creator', label: 'Content Creator Intern' },
        { id: 'paid-media-executive', label: 'Paid Media Executive Intern' },
        { id: 'data-specialist', label: 'Data Specialist Intern' }
    ];

    return (
        <div className={styles.sidebar}>
            {tabs.map(tab => (
                <div
                    key={tab.id}
                    className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
