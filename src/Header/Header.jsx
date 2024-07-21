import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate=useNavigate();
    const handelClick =()=>{
        navigate('/startnow')
    }
    return (
        <div className={styles.header}>
            <div className={styles.part1}>
                <h1 className={styles.head1}>Helping You</h1>
                <br />
                <h1 className={styles.head2}>GROW <span className={styles.btrr}>Better</span> </h1>
                <div className={styles.square}></div>
                <div className={styles.square2}></div>
                <div className={styles.square3}></div>
                <div className={styles.square4}></div>


            </div>
            <div className={styles.part2}>
                <p className={styles.paragf}>
                    We transform the way companies market, sell,
                    <br /> and service their customers across the MENA region
                </p>
            </div>

            <div className={styles.part3}>
                <button onClick={handelClick}>Start Now</button>

            </div>

            <div>
                <img className={styles.image} src="/images/Helping-you-grow-better-2048x2048.png" alt='' />
            </div>
        </div>
    )
}

export default Header

