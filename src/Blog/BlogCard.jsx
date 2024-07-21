import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const BlogCard = ({ id, image, title, description }) => {
    return (
        <Link to={`/blog/${id}`} className={styles.cardLink}>
            <div className={styles.card}>
                <img className={styles.cardImage} src={image} alt={title} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
