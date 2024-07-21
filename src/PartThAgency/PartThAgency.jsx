import React from 'react';
import styles from './PartThAgency.module.css';
import { Link } from 'react-router-dom';

const PartThAgency = ({ image, heading, description,id, card }) => {
    return (
        <>
        <Link
            to={{
                pathname: `/card/${id}`,
                state: { card }
            }}
            className={styles.cardLink}
        >
            
            <div className={styles.card}>
                <img src={image} alt={heading} className={styles.images} />
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            </Link>
        </>
    );
};

export default PartThAgency;
