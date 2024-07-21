import React from 'react';
import styles from './Blog.module.css';
import BlogCard from './BlogCard';

const Blog = () => {
    const cardsData = [
        {
            id: 1,
            image: '/images/close-up-people-speaking-radio.webp',
            title: 'HOW TO START A PODCAST IN 2024: A COMPLETE GUIDE FOR MARKETING EXPERTS',
            description: 'Imagine reaching your audience whenever and wherever they are, speaking directly into their ears with content that resonates.',
        },
        {
            id: 2,
            image: '/images/startup-ceo-attends-business-meeting-videocall-connection-using-online-videoconference-call-explain-company-solution-development-company-entrepreneur-open-office-tripod-shot_482257-67912.webp',
            title: 'DIGITAL MARKETING STRATEGIES IN THE MENA REGION: WHAT WORKS WHERE?',
            description: 'The MENA region presents a unique landscape for digital marketing, characterized by diverse cultures, languages, and economic',
        },
        {
            id: 3,
            image: '/images/front-view-woman-working-as-photographer_23-2150506094.webp',
            title: 'THE ESSENTIALS OF LIFESTYLE PHOTOGRAPHY FOR EFFECTIVE CONTENT MARKETING',
            description: 'In an era where authenticity reigns supreme, lifestyle photography stands out as a game-changer in content marketing. It’s not',
        },
        {
            id: 4,
            image: '/images/google search campaigns.webp',
            title: 'WHO iS SEEING YOUR ADS? OPTIMIZING SEARCH CAMPAIGNS IN QATAR',
            description: 'Did you know that Qatar has one of the highest internet penetration rates in the world? With around 99% of the population online,',
        },
        {
            id: 5,
            image: '/images/eCommerce-Product-Page-Optimization.webp',
            title: 'SEO FOR E-COMMERCE: OPTIMIZING PRODUCT PAGES TO BOOST SALES',
            description: 'importance of having well-optimized product pages. In the competitive world of e-commerce, optimizing your product pages',
        },
        {
            id: 6,
            image: '/images/HOW NANO-INFLUENCERS ARE SHAPING BRAND STRATEGIES IN KSA.webp',
            title: 'HOW NANO-INFLUENCERS ARE SHAPING BRAND STRATEGIES IN KSA',
            description: 'What if you could transform your brand’s message into a trusted recommendation from a friend? In the Kingdom of Saudi',
        },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div>
                    <img className={styles.image} src='/images/Our Blogs.svg' alt='/' />
                </div>
                <div>
                    <h1 className={styles.head}>OUR BLOGS</h1>
                    <p className={styles.paragraph}>
                    Don’t miss out on our blogs for a chance to stay updated on interesting topics.
                    </p>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {cardsData.map(card => (
                    <BlogCard
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

export default Blog;
