import React, { useState } from 'react'
import styles from './CardDetails.module.css'
const CardDetailOne = () => {

    return (
        <>


            <div className={styles.container} >
                <div>
                    <h1 className={styles.heading}>What you’ll learn</h1>
                    <p>This report includes proven marketing strategies and case <br />studies about successful campaigns in Saudi Arabia. Get to<br /> know the market, discover how to increase your brand <br />visibility in the market, engage with your audience and use social<br /> media to your advantage.</p>
                </div>
                <div>
                    <img className={styles.img} src='/images/KSA-what youll learn Icon.svg' alt='/' />
                </div>
            </div>
           

        
        </>


    )
}

export default CardDetailOne
