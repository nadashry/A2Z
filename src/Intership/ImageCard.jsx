import React from 'react';
import styles from './Intership.module.css';

const ImageCard = ({ image, title, description }) => {
    return (
        <div 
            className={styles.imageCard} 
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ImageCard;

