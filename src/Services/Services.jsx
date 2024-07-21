import React from 'react'
import styles from './Services.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Services = () => {
    const navigatate=useNavigate();
    const handelService=()=>{
        navigatate('/agency');
    }
    return (
        <div>

            <h1 className={styles.heading}>Our Services</h1>
            <div className={styles.leftSide}>
                <img className={styles.img2} src='/images/Execution-Icon.svg' alt='/' />
                <div>
                    <h1 className={styles.marketing}>Our Marketing<br />
                        Agency Services:</h1>
                    <p className={styles.description}>Take your brand to the next level across the MENA region with our<br /> comprehensive services including developing brands, managing<br /> online reputations, designing and developing websites and mobile <br />applications, and launching effective digital campaigns. Our<br /> exceptional track record of delivering results is a testament to our<br /> clients’ satisfaction.</p>
                </div>
            </div>

            <div className={styles.rightSide}>

                <img className={styles.img} src='/images/Our-Marketing-Agency-Services-2048x2048.png' alt='/' />
            </div>
<Link className={styles.link} onClick={handelService} to='/agency'>Explor our service</Link>
        </div>
    )
}

export default Services
