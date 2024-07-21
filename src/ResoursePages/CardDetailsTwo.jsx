import React, { useState } from 'react'
import styles from './CardDetails.module.css'
const CardDetailsTwo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        websiteUrl: '',
        officeLocation: '',
        industry: '',
        numberOfEmployees: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
  return (
    <div>
         <div className={styles.part2}><h1>Download the report here</h1>
                <p>Don’t miss out on utilizing the marketing strategies<br />
                    to increase your brand’s visibility.</p></div>
       <div>
                <form className={styles.registrationForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>First Name*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Last Name*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Job Title*</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Company Name*</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Phone Number*</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Website URL*</label>
                        <input
                            type="text"
                            name="websiteUrl"
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Office Location</label>
                        <select
                            name="officeLocation"
                            value={formData.officeLocation}
                            onChange={handleChange}
                        >
                            <option value="">Please Select</option>
                            <option value="Location 1">Location 1</option>
                            <option value="Location 2">Location 2</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Industry*</label>
                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Please Select</option>
                            <option value="Industry 1">Industry 1</option>
                            <option value="Industry 2">Industry 2</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Number of Employees</label>
                        <input
                            type="text"
                            name="numberOfEmployees"
                            value={formData.numberOfEmployees}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className={styles.registerButton}>Register</button>
                </form>
            </div>
    </div>
  )
}

export default CardDetailsTwo
