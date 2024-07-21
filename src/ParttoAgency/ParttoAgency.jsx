import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './ParttoAgency.module.css'

const ParttoAgency = () => {
    const [isVideoVisible, setVideoVisible] = useState(false);

    const handleThumbnailClick = () => {
        setVideoVisible(!isVideoVisible);
    };
    return (
        <div className={styles.container1}>
            <div><h1 className={styles.heading1}>WHY CHOOSE US</h1>
                <h1 className={styles.heading2}>We're not just about<br /> ideas; we're about<br /> making ideas happen.
                </h1>
                <p className={styles.para1}>Building your brand, managing your online presence, designing &<br /> developing your websites and mobile applications, and launching<br /> digital campaigns that are not just optimized but also ahead of <br />the curve.</p></div>
            <div>
                <div className={styles.videoContainer}>
                    {!isVideoVisible && (
                        <div>
                            <img
                                className={styles.imgg}
                                src="/images/WE PLAN-01-2.webp"
                                alt="Click to play video"
                                id="videoThumbnail"
                                onClick={handleThumbnailClick}
                            />
                            <div className={styles.playButton} onClick={handleThumbnailClick}><FontAwesomeIcon icon={faPlayCircle} size='3x' /></div>
                        </div>
                    )}
                    {isVideoVisible && (
                        <iframe
                            width="600"
                            height="400"
                            src="https://www.youtube.com/embed/zNaqE3A7_SQ"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video"
                        ></iframe>
                    )}
                </div>
            </div>
        </div>

    )
}

export default ParttoAgency
