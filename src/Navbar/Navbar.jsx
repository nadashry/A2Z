import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const handelButton = () => {
        navigate('/startnow')
    }
    const handelReports = () => {
        navigate('/reports')
    }
    const handelKnowledge = () => {
        navigate('/knowledge')
    }
    const handelBlog = () => {
        navigate('/blog')
    }
    const handelJob = () => {
        navigate('/job')
    }
    const handelIntership = () => {
        navigate('/intership')
    }
    const [visible, setVisible] = useState(false);
    const [isvisible, setIsVisible] = useState(false);
    const [issvisible, setIssVisible] = useState(false);
    const handleMouseEnter = () => {
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };
    const handleMouseEnterr = () => {
        setIsVisible(true);
    };

    const handleMouseLeavee = () => {
        setIsVisible(false);
    };
    const handleMouseEnterrr = () => {
        setIssVisible(true);
    };

    const handleMouseLeaveee = () => {
        setIssVisible(false);
    };
    return (
        <div className={styles.navbar}>
            <div className={styles.partoneNavbar}>
                <img className={styles.image} src='/images/A2Z-Logo-Black-1.svg' alt='A2Z Logo' />
            </div>

            <div className={styles.parttwoNavbar}>
                <ul className={styles.navbarMenu}>
                    <li
                        onMouseEnter={handleMouseEnterr}
                        onMouseLeave={handleMouseLeavee}

                        className={styles.navbarItem}><a href="#about">About Us</a>
                        {isvisible && (
                            <div className={styles.dropdown}>
                                <ul>
                                    <li>Our Story</li>
                                    <li>Recognized Expertise</li>
                                    <li>+100 Team</li>
                                    <li>Esteemed Clients</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li


                        className={styles.navbarItem}><a href="#services">Services</a></li>
                    <li
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={styles.navbarItem}
                    >
                        <a href="#resources">Resources</a>
                        {visible && (
                            <div className={styles.dropdown}>
                                <ul>
                                    <li onClick={handelBlog}>Blogs</li>
                                    <li onClick={handelKnowledge}>Knowledge Hub</li>
                                    <li onClick={handelReports}>Reports</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li


                        className={styles.navbarItem}><a href="#press-releases">Press Releases</a></li>
                    <li
                        className={styles.navbarItem}><a href="#case-studies">Case Studies</a></li>
                    <li
                        onMouseEnter={handleMouseEnterrr}
                        onMouseLeave={handleMouseLeaveee}
                        className={styles.navbarItem}
                    >
                        <a href="#resources">Career</a>
                        {issvisible && (
                            <div className={styles.dropdown}>
                                <ul>
                                    <li onClick={handelJob}>job vacanies</li>
                                    <li onClick={handelIntership}>intership </li>

                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>

            <div className={styles.partthreeNavbar}>
                <div className={styles.navbarButton}>
                    <button onClick={handelButton}>REQUEST A PROPOSAL</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

