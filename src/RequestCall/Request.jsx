import React, { useState } from 'react'
import styles from './Request.module.css'
const Request = () => {
    const [formDtat, setFormData] = useState({
        fullName: '',
        email: "",
        phoneNumber: '',
        officeLocation: '',
        message: '',

    });
    const [errors, setErrors] = useState({});
    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formDtat, [name]: value });
    };
    const validate = () => {
        let tempErrors = {};
        tempErrors.fullName = formDtat.fullName ? "" : "this field is required ";
        tempErrors.email = formDtat.email ? "" : "this field is required ";
        tempErrors.phoneNumber = formDtat.phoneNumber ? "" : "this field is required ";
        tempErrors.officeLocation = formDtat.officeLocation ? "" : "this field is required ";
        tempErrors.message = formDtat.message ? "" : "this field is required ";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '')
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formDtat);
            alert("Form submitted successfully!");
        
        }
    };
    return (
        <div className={styles.formContainer}>
            
            <div className={styles.officeInfo}>
                
                <div className={styles.office}>
                    <div><h2>QATAR</h2></div>
                    <div><p>Lusail, Doha, Qatar</p>
                    <p>PO BOX 24520</p>
                    <p>+974 3057 7555</p></div>
                </div>
                <div className={styles.office}>
                    <div><h2>KSA</h2></div>
                    <div><p>Second Floor, Office 208</p>
                    <p>Building 2675, Makkah </p>
                    <p>Al Sulaimaniyah</p>
                    <p>Saudi Arabia</p>
                    <p>+966 53 557 1667</p></div>
                </div>
                <div className={styles.office}>
                    <div><h2>LEBANON</h2></div>
                    <div><p>Badaro 5393, 1st Floor</p>
                    <p>Badaro, Lebanon</p>
                    <p>+961 1 383 183</p></div>
                </div>
            </div>
            <form className={styles.contactForm} onSubmit={handelSubmit}>
            <h1>CONTACT US</h1>
                <div className={styles.formGroup}>
                    <label htmlFor='fullName'>Full Name*</label>
                    <input type='text' name="fullName" id='fullName' value={formDtat.fullName} onChange={handelChange} />
                    {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
                </div>


                <div className={styles.formGroup}>
                    <label htmlFor='email'>Email*</label>
                    <input type='email' name="email" id='email' value={formDtat.email} onChange={handelChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="role">I am a</label>
                    <select
                        id="role"
                        name="role"
                        value={formDtat.role}
                        onChange={handelChange}
                    >
                        <option value="">Please Select</option>
                        <option value="client">Client</option>
                        <option value="partner">Partner</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formDtat.phoneNumber}
                        onChange={handelChange}
                    />
                    {errors.phoneNumber && <p className={styles.error}>{errors.phoneNumber}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="officeLocation">Office Location*</label>
                    <select
                        id="officeLocation"
                        name="officeLocation"
                        value={formDtat.officeLocation}
                        onChange={handelChange}
                    >
                        <option value="">Please Select</option>
                        <option value="qatar">Qatar</option>
                        <option value="ksa">KSA</option>
                        <option value="lebanon">Lebanon</option>
                    </select>
                    {errors.officeLocation && <p className={styles.error}>{errors.officeLocation}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">Message*</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formDtat.message}
                        onChange={handelChange}
                    ></textarea>
                    {errors.message && <p className={styles.error}>{errors.message}</p>}
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>

            </form>

        </div>
    )
}

export default Request