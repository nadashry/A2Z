import React from 'react'
import styles from './Academy.module.css'
const Consltant = () => {

    return (
        <>
        <div className={styles.container2}>

            <div className={styles.horizontalLine}>
            </div>
            <div><h1 className={styles.head}>Why consult with Elie?</h1>
            <p className={styles.description}>If you’re looking to jump ahead past the trials and tribulations of running a marketing practice or have a business problem that you need solution for, then<br/> a consultation from Elie Charbel is what you might need.</p>
            <button className={styles.btn}>BOOK FOR FREE SESSION</button>
        </div>
        
        <div className={styles.imgContainer}>
<img src='/images/elie-academy-2-2.webp' alt='/'/>
<img src='/images/why-consult-2-new.webp' alt='/'/>
<img src='/images/why-consult-4-new.webp' alt='/'/>
        </div>
        
        </div>
            
        
        </>
    )
}

export default Consltant
