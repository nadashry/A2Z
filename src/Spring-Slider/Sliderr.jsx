import React from 'react';
import styles from './Slider.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

const clients = [
    { name: 'MARINA HOME', logo: '/images/nutty.png' },
    { name: 'INFINITI', logo: '/images/Annakheel.png' },
    { name: 'RENAULT', logo: '/images/MINDWARE.png' },
    { name: 'QIIB', logo: '/images/mood-lounge.png' },
    { name: 'NISSAN', logo: '/images/amorino.png' },
    { name: 'Alfardan Properties', logo: '/images/asmakhrealstate.png' },
];

const Sliderr = () => {
    return (
        <div className={styles.sliders}>
            <h2 className={styles.labels}>OUR CLIENTS</h2>
            <Slider {...sliderSettings}>
                {clients.map((client, index) => (
                    <div key={index} className={styles.logo}>
                        <img src={client.logo} alt={client.name} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Sliderr;
