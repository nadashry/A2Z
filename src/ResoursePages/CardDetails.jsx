import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetailOne from './CardDetailOne';
import styles from './CardDetails.module.css'
import CardDetailsTwo from './CardDetailsTwo';
const cardData = [
    {
        id: 1,
        image: '/images/KSA Report.svg',
        heading: 'Boost Your Brand Visibility in KSA with Our Free Report!',
        description: 'Our comprehensive report provides important insights and marketing strategies to help you boost your brand’s presence in this highly lucrative market.'
    },
    {
        id: 2,
        image: '/images/Qatar Report.svg',
        heading: 'Unlock the Secrets of Digital Marketing Success in Qatar',
        description: 'Get Your Free PDF Report on the Latest Trends and Strategies Driving Qatar’s Digital Marketing Landscape'
    },
    {
        id: 3,
        image: '/images/UAE Report.svg',
        heading: 'Tailored Digital Marketing Solutions for Small Businesses in the UAE',
        description: 'Are you a small business owner in the United Arab Emirates (UAE) looking to thrive in the digital age? Check how tailored digital marketing strategies can help you succeed in today’s competitive landscape.'
    },
];
const CardDetails = () => {
    const { id } = useParams();
    const card = cardData.find(card => card.id === parseInt(id))
    if (!card) {
        return <div>Card not found</div>;
    }
    return (
        <div>
            <div className={styles.main}>
                <div><img src={card.image} className={styles.imgg} alt={card.heading} /></div>
                <div className={styles.mainlabel}> <h1>{card.heading}</h1>
                    <p>{card.description}</p></div>

            </div>
            <CardDetailOne />
            <CardDetailsTwo/>
        </div>
    )
}

export default CardDetails
