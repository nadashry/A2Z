import React from 'react';
import styles from './RealImage.module.css';
import { Link, useNavigate } from 'react-router-dom';

const HoverImage = ({ defaultImage, text, hoverImage }) => {
  return (
    <div className={styles.container}>
      <img src={defaultImage} alt={text} className={styles.defaultImage} />
      <img src={hoverImage} alt={text} className={styles.hoverImage} />
    </div>
  );
}

const RealImage = () => {
  const navigate = useNavigate();

  const handleService = () => {
    navigate('/academy');
  };

  return (
    <>
      <div className={styles.rightSide}>
        <div className={styles.gridContainer}>
          <HoverImage
            defaultImage='/images/Icon-13.svg'
            hoverImage='/images/images.jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-14.svg'
            hoverImage='/images/وظائف-عمل-من-المنزل-1024x1024.jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-3.svg'
            hoverImage='/images/images (4).jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-4.svg'
            hoverImage='/images/images (3).jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-6.svg'
            hoverImage='/images/images (2).jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-2.svg'
            hoverImage='/images/images (1).jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-11.svg'
            hoverImage='/images/images (8).jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-10.svg'
            hoverImage='/images/images (7).jpeg'
            text='image'
          />
          <HoverImage
            defaultImage='/images/Icon-9.svg'
            hoverImage='/images/images (6).jpeg'
            text='image'
          />
        </div>
      </div>
      <div className={styles.leftSide}>
        <img className={styles.img2} src='/images/Consultancy-Icon.svg' alt='/' />
        <div>
          <h1 className={styles.marketing}>Our Marketing<br />Consultancy Services:</h1>
          <p className={styles.description}>Our consultation services are here to provide the expertise<br />you require and the solutions to help you overcome the hurdles<br />of managing a marketing practice. Let us guide you towards success<br />and help you navigate through any obstacles you may encounter.</p>
        </div>
        <Link className={styles.link} onClick={handleService} to='/academy' >Request to call</Link>
      </div>
    </>
  );
}

export default RealImage;
