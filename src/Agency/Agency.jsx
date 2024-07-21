import React from 'react'
import styles from './Agency.module.css'
import ParttoAgency from '../ParttoAgency/ParttoAgency'
import PartThAgency from '../PartThAgency/PartThAgency'
import OneCard from '../PartThAgency/OneCard'
import PartfoAgency from '../PartfoAgency/PartfoAgency'
import ServicesGrid from '../PartfoAgency/ServicesGrid'
const Agency = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.rightSide}>
<h1 className={styles.heading}>YOUR PARTNER <br/>

IN STRATEGIC MARKETING<br/>

SUCCESS<br/>
</h1>
<p className={styles.para}>Customized & Integrated Marketing Plans Across The MENA Region</p>
<button className={styles.btn}>Check Out Services</button>
      </div>
      <div className={styles.leftSide}>
<img className={styles.image} src='/images/Service page-Your partner in strategic Marketing Success.svg' alt='/'/>
      </div>
    
    </div>

    <ParttoAgency/>
    {/* <PartThAgency/> */}
    <OneCard/>
    <ServicesGrid/>
   
    </>
  )
}

export default Agency
