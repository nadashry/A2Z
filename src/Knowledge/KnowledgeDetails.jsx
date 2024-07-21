import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Knowledge.module.css'
import CardDetailsTwo from '../ResoursePages/CardDetailsTwo';
const KnowledgeDetails = () => {
    const { id } = useParams()
    const pageContent = {
        1: {

            image: '/images/Social Media.svg',
            title: 'Download Your Free 6-Months Social Media Calendar',
            description: 'Our Social Media Calendar is designed to empower your online presence and make content planning easier.We’ve done the work so you don’t have to stress, grab our Ultimate Social Media Calendar for 2024 today.',
        },
        2: {

            image: '/images/Facebook checklist.svg',
            title: 'Access Your Free Buyer Persona Template for Crafting Tailored Marketing Strategies.',
            description: 'We understand the importance of knowing your audience inside and out! That’s why we’ve created this template to help you build detailed buyer personas and boost your marketing strategy',
        },
        3: {

            image: '/images/Facebook checklist.svg',
            title: 'Download Your Free Comprehensive SEO Checklist for Optimizing Online Visibility.',
            description: 'Boost your website’s search engine rankings with our SEO Checklist Template. This guide will help you optimize your website for better search engine visibility and organic traffic.',
        },
        4: {

            image: '/images/SEO Checklist.svg',
            title: 'Grab Your Free Facebook Ads Checklist for Maximizing Advertising Success.',
            description: 'Welcome to the ultimate guide for mastering Facebook Advertising! Whether you’re an expert marketer or just starting, our “Complete Facebook Advertising Checklist” will help you achieve outstanding results with your campaigns.',
        },
        5: {

            image: '/images/Brand design Checklist.svg',
            title: 'Free Fownload: 5 Easy Steps to a Creative Brand Design',
            description: 'Learn to build a standout brand with our 5-step infographic guide. It’s quick, simple, and effective for anyone.',
        },
    };
    const content = pageContent[id]
    return (
        <div>
             <div className={styles.detailscontainer}>
            <div className={styles.detailsimg}>
                <img src={content.image} alt={content.title} />
            </div>
            <div className={styles.detailspart}>
                <h1 className={styles.detailsheading}>{content.title}</h1>
                <p className={styles.detailsparagraph}>{content.description}</p>
            </div> 
            
        </div>
        {id === '3' && (
                <div className={styles.specialSection}>
                    <h2>Why You Need an SEO Checklist:</h2>
                    <div className={styles.cardsContainer}>
                        <div className={styles.cards}>
                            <img src='/images/SEO Icons-1.svg' alt='Higher Rankings' />
                            <h3>Higher Rankings:</h3>
                            <p>Achieve better positions in search engine results pages (SERPs) by ensuring your website meets essential SEO criteria.</p>
                        </div>
                        <div className={styles.cards}>
                            <img src='/images/SEO Icons-2.svg' alt='Increased Organic Traffic' />
                            <h3>Increased Organic Traffic:</h3>
                            <p>Improve your website’s visibility to the right audience and watch your organic traffic grow.</p>
                        </div>
                        <div className={styles.cards}>
                            <img src='/images/SEO Icons-3.svg' alt='Simplified SEO' />
                            <h3>Simplified SEO:</h3>
                            <p>Our checklist simplifies the complex world of SEO into actionable steps, making it accessible to beginners and valuable for experts.</p>
                        </div>
                    </div>
                </div>
            )}



{id === '2' && (
                <div className={styles.specialSection}>
                
                    <div className={styles.cardsContainer}>
                        <div className={styles.cards}>
                            <div className={styles.circlenumber}>1</div>
                            <h3>Enhanced Targeting:</h3>
<p>Stop wasting time and resources on broad marketing efforts. With buyer personas, you can tailor your messaging to your ideal customers.</p>                        </div>
                        <div className={styles.cards}>
                            <div className={styles.circlenumber}>2</div>
                            <h3>Improved ROI:</h3>
<p>When you understand your audience better, you start creating content and campaigns that resonate. This means better engagement, higher conversion rates, and ultimately, a better return on investment.</p>                        </div>
                        <div className={styles.cards}>
                        <div className={styles.circlenumber}>3</div>
                            <h3>Streamlined Marketing:</h3>
<p>Our template is designed to save you time! No more starting from scratch with every campaign. Use our template to build personas quickly and efficiently.</p>                        </div>
                    </div>
                </div>
            )}


            {id ==='1' &&(
                <div className={styles.containerid1}>
                    <div>
                        <img src='/images/Social media-get ready icon.svg' alt='/'/>
                    </div>
                    <div className={styles.containerheadid1}>
                        <h4>What You'll Get Out of This:</h4>
                        <ul>
                            <li>Clear Steps</li>
                            <li>Innovative Ideas</li>
                            <li>
                            Effective Improvements
                            </li>
                            <li>Proven Techniques</li>
                            
                        </ul>
                    </div>
                </div>
            )}
            {id ==='4' &&(
                <div className={styles.containerid4}>
                    <div>
                        <img src='/images/SEO Checklist.svg' alt='/' />
                    </div>
                    <div className={styles.containerheadid1}>
                        <h4>Why You Need This Checklist</h4>
                        <p>Facebook Advertising can be complex, but with our step-by-step checklist, you’ll be able to:</p>
                        <ul>
                            <li>Plan</li>
                            <li>Ideas</li>
                            <li>
                            Budget
                            </li>
                            <li>Design</li>
                            
                        </ul>
                    </div>
                </div>
            )}
            <CardDetailsTwo /> 
        </div>
       
    )
}

export default KnowledgeDetails