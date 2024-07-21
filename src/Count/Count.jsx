import React from 'react';
import styles from './Count.module.css'
import CountUp from 'react-countup';
import {  animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const statistics = [
    { value: 121, description: 'increase in impressions' },
    { value: 115, description: 'increase in brand awareness' },
    { value: 100, description: 'increase in followers' },
    { value: 30, description: 'increase in engagement' },
    { value: 9.12, description: 'ROAS generated' },
    { value: 10, description: 'overachievement of targeted ' },
];

const StatItem = ({ value, description }) => {
    

    return (
        <div className={styles.statItem}>
            <animated.div>
                <CountUp start={0} end={value} duration={2.75} suffix="%" />
            </animated.div>
            <div className={styles.description}>{description}</div>
        </div>
    );
};

const Count = () => {

const navigate =useNavigate();
const handelRequest=()=>{
    navigate('/request')
}
    return (
        <div className={styles.statisticsSection}>
            <div className={styles.container}>
                <div className={styles.rightSidee}>
                    <h2>WHY OUR CLIENTS LOVE US</h2>
                    <button onClick={handelRequest} className={styles.callButton}>REQUEST A CALL</button>
                </div>
                <div className={styles.leftSidee}>

                    <div className={styles.stats}>
                        {statistics.map((stat, index) => (
                            <StatItem key={index} value={stat.value} description={stat.description} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Count;