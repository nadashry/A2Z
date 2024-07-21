import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PartThAgency from './PartThAgency';

import styles from './PartThAgency.module.css';

const cardData = [
    {
        id: 1,
        image: '/images/Website services-1-digital paid media-2.webp',
        heading: 'Digital Paid Media',
        description: 'We run campaigns that increase your ROI',
    },
    {
        id: 2,
        image: '/images/Website services-10-public relations-1.webp',
        heading: 'Mobile App Development',
        description: 'We help you do more business with your mobile application',
    },
    {
        id: 3,
        image: '/images/Website services-11-activations management-1.webp',
        heading: 'Brand Design and Logo Design',
        description: 'WIt’s more than just your logo and brand name',
    },
    {
        id: 4,
        image: '/images/Website services-12-CRM Establishment -1.webp',
        heading: 'Web Development',
        description: 'It is all about usability, expandability',
    },
    {
        id: 5,
        image: '/images/Website services-2-web development-1.webp',
        heading: 'Social Media Marketing',
        description: 'Every challenge is unique, as is our approach',
    },
    {
        id: 6,
        image: '/images/Website services-3-social media marketing-1.webp',
        heading: 'Activations Management',
        description: 'We add a WOW factor that keeps people buzzing around',
    },
    {
        id: 7,
        image: '/images/Website services-7-seo management-1.webp',
        heading: 'Public Relations',
        description: 'We tell your brand story and achievements',
    },
    {
        id: 8,
        image: '/images/Website services-4-Brand design-1-2.jpg',
        heading: 'CRM Establishment',
        description: 'EBuilding and sustaining customer relationships.',
    },
    {
        id: 9,
        image: '/images/Website services-5-sms campaign-1.webp',
        heading: 'Influencer Marketing',
        description: 'People don’t buy products; they buy stories and relationships',
    },
];

const OneCard = () => {
   

    return (
        <>
            <div>
                <h1 className={styles.cardHeading}>OUR SERVICES IN THE MENA REGION</h1>
                <div className={styles.cardContainer}>
                    {cardData.map((card) => (
                        <PartThAgency
                            key={card.id}
                            image={card.image}
                            heading={card.heading}
                            description={card.description}
                            card={card}
                            id={card.id}
                        />
                    ))}
                </div>
                
            </div>
        </>
    );
};

export default OneCard;

