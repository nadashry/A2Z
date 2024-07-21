import React from 'react'
import styles from './NotFound.module.css'
const NotFound = () => {
    return (
        <div>
            <h1 className={styles.heading}>404 - Not Found</h1>
            <p className={styles.para}>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default NotFound
