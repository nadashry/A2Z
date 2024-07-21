import React from 'react';
import styles from './Knowledge.module.css';
import KnowledgeCard from './KnowledgeCard';

const Knowledge = () => {
    const cardsData = [
        {
            id: 1,
            image: '/images/Knowledge Hub-SEO Checklist.svg',
            title: 'Comprehensive Social Media Calendar for Optimal Engagement',
            description: 'Download Your Free 6-Months Social Media Calendar',
        },
        {
            id: 2,
            image: '/images/Knowledge Hub-Brand design Checklist.svg',
            title: 'Buyer Persona Template for Precision Marketing',
            description: 'Get to know your target audience',
        },
        {
            id: 3,
            image: '/images/Knowledge Hub-Buyer Persona.svg',
            title: 'The Comprehensive SEO Checklist for Optimal Website Visibility',
            description: 'Download the checklist to skyrocket your visibility organically',
        },
        {
            id: 4,
            image: '/images/Knowledge Hub-Facebook Checklist.svg',
            title: 'Complete Facebook Advertising Checklist',
            description: 'the ultimate guide for mastering Facebook Advertising!',
        },
        {
            id: 5,
            image: '/images/Knowledge Hub-Social Media.svg',
            title: 'Easy Steps to a Creative Brand Design',
            description: 'A quick and simple  5-step infographic guide to build a unique brand image',
        },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div>
                    <img className={styles.image} src='/images/Knowledge Hub.svg' alt='/' />
                </div>
                <div>
                    <h1 className={styles.head}>Knowledge Hub</h1>
                    <p className={styles.paragraph}>
                        Enhance your marketing strategies with our downloadable
                        <br />
                        resources crafted to equip you with impactful tools and
                        <br />
                        strategies for a successful online presence.
                    </p>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {cardsData.map(card => (
                    <KnowledgeCard
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Knowledge;
