import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Cardreports.module.css'
const CardReports = () => {
const cardData =[
    {
        id:1,
        image:'/images/Reports -Qatar.svg',
        heading:'Report',
        description:'Embracing Digital Evolution: Navigating the Changing Marketing Landscape in Qatar'
    },
    {
        id:2,
        image:'/images/Reports-KSA.svg',
        heading:'Report',
        description:'Tailored Digital Marketing Solutions for Small Businesses in the UAE'
    },
    {
        id:3,
        image:'/images/Reports-UAE.svg',
        heading:'Report',
        description:'Strategies for Boosting Brand Visibility in KSA'
    },
];
const navigate=useNavigate();
const handerlCardReport=(id)=>{
    navigate(`/reportss/${id}`)
}
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card)=>(
<div key={card.id} className={styles.card} onClick={()=>handerlCardReport(card.id)} >
<img src={card.image} alt={card.heading}/>
<h2>{card.heading}</h2>
<p>{card.description}</p>
</div>
      ))}
    </div>
  )
}

export default CardReports
