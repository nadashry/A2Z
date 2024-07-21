import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Blog.module.css'
const BlogDetails = () => {
    const { id } = useParams()
    const pageContent = [
        {
            id: 1,
            image: '/images/close-up-people-speaking-radio.webp',
            title: 'HOW TO START A PODCAST IN 2024: A COMPLETE GUIDE FOR MARKETING EXPERTS',
        },
        {
            id: 2,
            image: '/images/startup-ceo-attends-business-meeting-videocall-connection-using-online-videoconference-call-explain-company-solution-development-company-entrepreneur-open-office-tripod-shot_482257-67912.webp',
            title: 'DIGITAL MARKETING STRATEGIES IN THE MENA REGION: WHAT WORKS WHERE?',
        },
        {
            id: 3,
            image: '/images/front-view-woman-working-as-photographer_23-2150506094.webp',
            title: 'THE ESSENTIALS OF LIFESTYLE PHOTOGRAPHY FOR EFFECTIVE CONTENT MARKETING',
        },
        {
            id: 4,
            image: '/images/google search campaigns.webp',
            title: 'WHO iS SEEING YOUR ADS? OPTIMIZING SEARCH CAMPAIGNS IN QATAR',
        },
        {
            id: 5,
            image: '/images/eCommerce-Product-Page-Optimization.webp',
            title: 'SEO FOR E-COMMERCE: OPTIMIZING PRODUCT PAGES TO BOOST SALES',
        },
        {
            id: 6,
            image: '/images/HOW NANO-INFLUENCERS ARE SHAPING BRAND STRATEGIES IN KSA.webp',
            title: 'HOW NANO-INFLUENCERS ARE SHAPING BRAND STRATEGIES IN KSA',
        },
    ];
    const content = pageContent[id]
    return (
        <div>
            <div className={styles.detailscontainer}>
                <div >
                    <img className={styles.detailsimg} src={content.image} alt={content.title} />
                </div>
                <div className={styles.detailspart}>
                    <h1 className={styles.detailsheading}>{content.title}</h1>
                </div>
                <div className={styles.threeimg}>
<img src='/images/Facebook.svg' alt='/'/>
<img src='/images/Twitter.svg' alt='/'/>
<img src='/images/Linkedin.svg' alt='/'/>
</div>
            </div>


            <p className={styles.descriptiondetails}>Did you know that 44% of online shoppers start their buying journey with a search engine? This staggering statistic highlights the importance of having well-optimized product pages. In the competitive<br/> world of e-commerce, optimizing your product pages for SEO can be the difference between a sale and a missed opportunity. Let's dive into the essential<br/> strategies to boost your e-commerce sales through effective SEO.</p>
<div>
    
</div>


        </div>

    )
}

export default BlogDetails