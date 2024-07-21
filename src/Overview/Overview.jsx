import React from 'react'
import styles from './Overview.module.css'

const Overview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.horizontalLine}>
            </div>
            <div><h1 className={styles.head}>OVERVIEW</h1>
            </div>
            <div className={styles.mainflex}>
                <div className={styles.partone}>
                    <p>
                        I am offering myself as a resource to provide personalized coaching sessions. Through these sessions, you can address and overcome the mental obstacles that are hindering your ability to reach your full potential. Instead of settling for the amount clients are willing to pay you, you can start earning the amount you truly deserve.
<br/>
                        If you’re wondering what knowledge or insights I possess that you don’t, the answer is nothing. In that case, it may not be necessary for you to book this session. You can go ahead and proceed in your own way, making the same mistakes I made. You may miss out on significant opportunities, oversell to uninterested clients, and find yourself stuck without making progress.
                    </p>
                </div>
                <div className={styles.parttwo}>
                    <p>
                        However, when you find yourself unsatisfied with the results you hoped for and feeling stagnant, it might be worth considering an alternative approach.<br/>

                        With over 15 years of running a successful design business, generating over $40 million in combined gross billings, and launching a second business that has experienced a 200% revenue growth year after year, I bring practical knowledge and expertise to the table. Furthermore, my experience of being coached for over 10 years adds a unique perspective. I not only understand the mindset of a creative entrepreneur, but also possess insights on how to pivot, overcome objections, and succeed in the most competitive markets
                    </p>
                </div>
            </div>
<img className={styles.image} src='/images/pennn.webp' alt='/'/>

        </div>
    )
}

export default Overview