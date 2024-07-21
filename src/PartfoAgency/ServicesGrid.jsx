import React from 'react'
import styles from './PartfoAgency.module.css'
import PartfoAgency from './PartfoAgency';
const services = [

    { title: 'Market Research and Analysis', description: 'Diving into market trends and customer behaviors.' },
    { title: 'Competitive Intelligence', description: 'Gaining a strategic edge with insights on competitors.' },
    { title: 'Customer Insights', description: 'Crafting strategies aligned with customer preferences.' },
    { title: 'Data Analytics and Reporting', description: 'Transforming data into strategic intelligence.' },
    { title: 'Marketing Technology Stack and Strategy Identification', description: 'Choosing the right tools and strategies for your marketing needs.' },
    { title: 'Marketing Work Execution Optimization', description: 'Maximizing campaign performance.' },
];
const ServicesGrid = () => {
    return (
        <>
        <h1 className={styles.heading}>STRATEGIC INTELLIGENCE</h1>
        <div className={styles.container}>
            
            <div className={styles.img}>
                <img src='/images/Services-Strategic Intekkigence.svg' alt="/" />
            </div>

            <div className={styles.servicesGrid}>
                {services.map(( service) => (
                    <PartfoAgency  title={service.title} description={service.description} />
                ))}
            </div>
        </div>
        </>
    )
}

export default ServicesGrid