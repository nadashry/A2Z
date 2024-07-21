import React, { useState } from 'react'
import styles from './Job.module.css'
import ImageCard from './ImageCard';
const cards = [
  {
    id: 1,
    image: '/images/elie-academy-2-2.webp',
    title: 'Completion',
    description: 'Upon successful completion of the internship program, interns will receive a certificate of completion and may have the opportunity to be considered for a fulltime job opportunity.'
  },
  {
    id: 2,
    image: '/images/Elie-academy-svg.webp',
    title: 'Onboarding',
    description: 'During the onboarding phase of the internship, new interns will receive an introduction to A2Z Media and the digital marketing industry. This will include a tour of the office'
  },
  {
    id: 3,
    image: '/images/Annakheel.png',
    title: 'Training',
    description: 'The training phase of the internship will focus on building the interns’ skills and knowledge in digital marketing. This may include learning about SEO, social media marketing'
  }
  ,
  {
    id: 4,
    image: '/images/amorino.png',
    title: 'Project work',
    description: 'During the project work phase of the internship, interns will have the opportunity to work on real-world projects alongside the team. This will give them the chance to apply'
  }
  ,
  {
    id: 5,
    image: '/images/close-up-people-speaking-radio.webp',
    title: 'Mentorship',
    description: 'Throughout the internship, interns will receive ongoing mentorship and support from experienced team members. This will include one-on-one meetings, feedback sessions, and '
  }
];
const Job = () => {

  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.image} src='/images/eCommerce-Product-Page-Optimization.webp' alt='/' />
        </div>
        <div>
          <h2 className={styles.heading2}>
            Thrive in a Dynamic Digital Marketing Environment</h2>
          <h1 className={styles.heading}>
            AT A2Z MEDIA
          </h1>
          <p>Join our team of experts and work on exciting projects that push the boundaries of digital marketing. Apply now to become a part of A2Z Media.</p>
        </div>
      </div>
      <div className={styles.hvalues}>
        <h1 className={styles.values}>
          Our Values
        </h1>
        <p className={styles.values2}>The Principles That Drive Our Work & Relationships</p>
      </div>
      <div className={styles.threecontainer}>
        <p>We believe that learning is a lifelong journey. We are committed to continuously acquiring new knowledge and skills and expanding our understanding of our work and industries. We offer a range of workshops and opportunities for our team to take on new challenges and further develop their expertise. By investing in learning, we can stay up-to-date with the latest best practices and technologies and adapt to changes in our industry.</p>
        <p>We are committed to consistently producing high-quality work. We strive to meet and exceed the expectations of our customers, clients, and team members. To support this value, we focus on key areas such as time management, problem solving, quality assurance, discipline, and commitment. By delivering excellent work, we can establish trust and credibility with our stakeholders and ensure that we are meeting their needs.</p>
        <p>We believe in creating value for all stakeholders, including our customers, clients, team, and the wider community. To support this value, we prioritize communication, emotional intelligence, feedback, curiosity, and respect. By creating value, we can contribute to the success and well-being of our stakeholders and foster long-term relationships with them.</p>
      </div>

      <h1 className={styles.values3}>Program Structure</h1>
      <div className={styles.container2}>
        {cards.map(card => (
          <ImageCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <h1 className={styles.values3}>More About The Program</h1>
      <p className={styles.para}>This program is designed to provide interns with the opportunity to work on exciting projects and gain valuable real-world experience before entering the workforce. All expenses related to the internship, including the use of a laptop, will be covered by A2Z Media. Upon successful completion of the internship, interns will receive a certificate of completion from A2Z Media.</p>

      <div className={styles.para1}>
        <p>To be eligible for the internship, applicants must:</p>
        <ul>
          <li>Be computer literate in standard software applications</li>
          <li>Have a demonstrated keen interest in the work of A2Z Media and a personal commitment to the company’s ideals</li>
          <li>Have the ability to interact successfully with individuals of different cultural backgrounds and beliefs, and a willingness to accommodate differing opinions and views</li>
        </ul>
       
        <p>The internship will last for a duration of three months on a full-time basis, with the possibility of extension in exceptional circumstances for a maximum of six months. Interns will work under the supervision of a staff member in the department or office to which they are assigned and will be required to use their own laptop for the duration of the internship.</p>
      
      <p>
      Upon acceptance of the internship, candidates will be required to sign a statement acknowledging and accepting the terms of the internship. This includes the understanding that the internship is not a paid position and that all expenses related to the internship, including the use of a laptop, will be covered by A2Z Media. Interns are also responsible for any costs arising from accidents or illness incurred during the internship.</p>
     
     <p>For interns who excel during the internship program, A2Z Media may offer a full-time employment opportunity upon completion of the program.</p>
      </div>

    </>
  )
}

export default Job
