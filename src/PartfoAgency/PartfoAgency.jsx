import React from 'react'
import styles from './PartfoAgency.module.css'
const PartfoAgency = ({ title, description }) => {
    return (
        <div className={styles.serviceCard}>
<h2 className={styles.serviceTitle}>{title} &rarr;</h2>
<p className={styles.serviceDescription}>{description}</p>
        </div>
    )
}

export default PartfoAgency