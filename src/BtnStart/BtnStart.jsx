import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import styles from './BtnStart.module.css'
const BtnStart = () => {
    const [date, setDate] = useState(new Date());
    const [duration, setDuration] = useState('30 mins');
    const [availableTimes, setAvailableTimes] = useState(['12:00 pm', '12:30 pm']);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        const day = newDate.getDate();
        let newDuration = '30 mins';
        let newAvailableTimes = ['12:00 pm', '12:30 pm'];
        if (day >= 1 && day <= 10) {
            newDuration = '45 mins';
            newAvailableTimes = ['9:00 am', '10:00 am', '11:00 am','11:30 am'];
        } else if (day > 10 && day <= 20) {
            newDuration = '60 mins';
            newAvailableTimes = ['1:00 pm', '2:00 pm', '3:00 pm','4:50 am'];
        } else {
            newDuration = '30 mins';
            newAvailableTimes = ['4:00 pm', '5:00 pm','5:20 am','10:40 am'];
        }

        setDuration(newDuration);
        setAvailableTimes(newAvailableTimes);
    };
    return (
        <div className={styles.allContainer}>
            <div className={styles.container}>
                <div className={styles.rightSide}>
                    <img src='/images/Asset-1.svg' alt='/' />
                </div>
                <div className={styles.leftSide}>
                    <div><h1 className={styles.heading}>Request a Marketing Proposal From A2Z Media</h1></div>


                    <div><h4 className={styles.smheading}>Connect with Our Experts Today!</h4></div>
                    <p className={styles.description}>Submit your request now, and our dedicated team will reach out to you within the next 24 hours to discuss your unique marketing needs. Let's start crafting your success story together!</p>

                </div>
            </div>
            <h1 className={styles.booking}>Book a meeting to discuss your marketing requirements</h1>
            <div className={styles.calendarContainer}>
                
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                />
                <h2>{date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
                <div className={styles.meetingInfo}>
                    <h3>Meeting duration</h3>
                    <p>{duration}</p>
                    <h3>What time works best?</h3>
                    <p>Showing times for {date.toDateString()}</p>
                    <p>Africa/Cairo</p>
                    {availableTimes.map((time, index) => (
                        <button key={index} className={styles.timeButton}>{time}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BtnStart
