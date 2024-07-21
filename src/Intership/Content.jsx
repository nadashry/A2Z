import React from 'react';
import styles from './Intership.module.css';

const Content = ({ data }) => {
    return (
        <div className={styles.content}>
            {data.content.map((item, index) => {
                switch (item.type) {
                    case 'h1':
                        return <h1 key={index}>{item.text}</h1>;
                    case 'h2':
                        return <h2 key={index}>{item.text}</h2>;
                    case 'p':
                        return <p key={index}>{item.text}</p>;
                    case 'ul':
                        return (
                            <ul key={index}>
                                {item.items.map((listItem, idx) => (
                                    <li key={idx}>{listItem}</li>
                                ))}
                            </ul>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default Content;

