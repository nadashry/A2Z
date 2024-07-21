import React from 'react'
import styles from './Reports.module.css'
import CardReports from './CardReports'
const Rports = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div>
                    <h1 className={styles.hone}>Reports</h1>
                    <p className={styles.paragraph}>Gain valuable insights into the digital landscape with A2Z Media’s comprehensive reports,<br/> providing you with in-depth analysis and trends shaping the marketing world.</p>
                </div>
                <div className={styles.imag}>
                    <img src='/images/Reports.svg' alt='/' />
                </div>
            </div>
            <CardReports/>
        </div>
    )
}

export default Rports
