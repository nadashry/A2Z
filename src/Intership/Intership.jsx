import React, { useState } from 'react';
import styles from './Intership.module.css';
import Sidebar from './Slider';
import Content from './Content';
const contentData = [
  {
    id: 'software-engineer',
    label: 'Software Engineer Intern',
    content: [
      { type: 'h1', text: 'Software Engineer Intern' },
      { type: 'p', text: 'Our software engineering team is looking for a driven and passionate intern to join us in developing and maintaining high-quality software applications. As a software engineer intern, you will have the opportunity to work on real projects and gain valuable experience in the industry.' },
      { type: 'h2', text: 'Expectations:' },
      { type: 'ul', items: [
          'Have a passion for solving complex technical problems',
          'Be willing to learn and continuously improve your skills',
          'Have a strong work ethic and be able to work well in a team environment'
        ]
      },
      { type: 'h2', text: 'Requirements:' },
      { type: 'ul', items: [
          'Currently pursuing a degree in computer science, software engineering, or a related field',
          'Proficiency in at least one programming language (e.g. Java, C++, Python)',
          'Familiarity with software development tools and processes (e.g. Git, Agile)'
        ]
      },
      { type: 'h2', text: 'Responsibilities:' },
      { type: 'ul', items: [
          'Work with the software engineering team to develop, test, and maintain software applications',
          'Assist in the design and implementation of new features and functionality',
          'Contribute to code reviews and design discussions'
        ]
      }
    ]
  },
  {
    id: 'graphic-designer',
    title: 'Graphic Designer Intern',
    content: [
      { type: 'h1', text: 'Graphic Designer Intern' },
      { type: 'p', text: 'Our graphic design team is seeking a talented and creative intern to join us in creating visually stunning marketing materials and brand assets. As a graphic designer intern, you will have the opportunity to work on exciting projects and learn from experienced designers.' },
      { type: 'h2', text: 'Expectations:' },
      { type: 'ul', items: [
          'Have a strong visual aesthetic and attention to detail',
          'Be able to take creative direction and feedback',
          'Have excellent communication and collaboration skills'
        ]
      },
      { type: 'h2', text: 'Requirements:' },
      { type: 'ul', items: [
          'Currently pursuing a degree in graphic design, visual communication, or a related field',
          'Proficiency in design software (e.g. Adobe Creative Suite)',
          'Portfolio of design work'
        ]
      },
      { type: 'h2', text: 'Responsibilities:' },
      { type: 'ul', items: [
          'Assist the graphic design team in the creation of visual assets for marketing campaigns and brand materials',
          'Collaborate with team members on design concepts and ideas',
          'Create and edit graphics for social media, websites, emails, and other marketing channels'
        ]
      }
    ]
  },
  {
    id: 'content-creator',
    title: 'Content Creator Intern',
    content: [
      { type: 'h1', text: 'Content Creator Intern' },
      { type: 'p', text: 'Our content team is seeking a skilled and motivated intern to join us in creating engaging written and visual content for our marketing campaigns. As a content creator intern, you will have the opportunity to work on a variety of projects and develop your writing and editorial skills.' },
      { type: 'h2', text: 'Expectations:' },
      { type: 'ul', items: [
          'Have strong writing skills and a passion for creating engaging content',
          'Be able to take creative direction and feedback',
          'Have excellent communication and collaboration skills'
        ]
      },
      { type: 'h2', text: 'Requirements:' },
      { type: 'ul', items: [
          'Currently pursuing a degree in English, journalism, marketing, or a related field<l/li>',
          'Experience in writing and editing content',
          'Portfolio of writing samples'
        ]
      },
      { type: 'h2', text: 'Responsibilities:' },
      { type: 'ul', items: [
          'Assist the content team in the creation of written and visual content for marketing campaigns and brand materials',
          'Collaborate with team members on content ideas and concepts',
          'Write and edit blog posts, social media posts, website content, and other marketing materials'
        ]
      }
    ]
  },
  {
    id: 'paid-media-executive',
    title: 'Paid Media Executive Intern',
    content: [
      { type: 'h1', text: 'Paid Media Executive Intern' },
      { type: 'p', text: 'Our paid media team is looking for a driven and analytical intern to join us in developing and executing paid media campaigns for our clients. As a paid media executive intern, you will have the opportunity to learn from experienced professionals and gain hands-on experience in the industry.' },
      { type: 'h2', text: 'Expectations:' },
      { type: 'ul', items: [
        'Have a strong understanding of paid media strategy and tactics',
        'Be able to take creative direction and feedback',
        'Have excellent communication and collaboration skills'
        ]
      },
      { type: 'h2', text: 'Requirements:' },
      { type: 'ul', items: [
        'Bachelor’s degree in marketing, advertising, or a related field',
        'Experience in paid media planning and execution (e.g. Google Ads, Facebook Ads)',
        'Proficiency in paid media tools and platforms'
        ]
      },
      { type: 'h2', text: 'Responsibilities:' },
      { type: 'ul', items: [
          'Work with the paid media team to develop and execute paid media campaigns for clients',
'Assist in the creation of media plans and budgets',
'Monitor and analyze campaign performance and provide recommendations for optimization',
'Collaborate with team members on paid media strategies and tactics',
'Learn and stay up-to-date on paid media industry trends and best practices',
'Communicate effectively with clients and team members to ensure successful campaign execution'
        ]
      }
    ]
  },
  {
    id: 'data-specialist',
    title: 'Data Specialist Intern',
    content: [
      { type: 'h1', text: 'Data Specialist Intern' },
      { type: 'p', text: 'The overall objective of the Data Specialist is to support the data team in creating campaign reports and managing the digital department’s data..' },
      { type: 'h2', text: 'Expectations:' },
      { type: 'ul', items: [
        'problem-solving skills',
        'Strong analytical skills',
        'Excellent communication skills'
        ]
      },
      { type: 'h2', text: 'Requirements:' },
      { type: 'ul', items: [
        'Bachelor’s degree in a relevant field.',
        'Experience with Google data studio and other data visualization tools.',
        'Strong analytical and problem-solving skills.',
        'Ability to work independently and as part of a team.',
        'Excellent communication and interpersonal skills.'
        ]
      },
      { type: 'h2', text: 'Responsibilities:' },
      { type: 'ul', items: [
        'Support the data team in creating Google data (Looker) studio reports and managing the department’s data.',
        'Ensure data accuracy and integrity across all campaigns and reporting.',
        'Collaborate with internal teams to develop, implement and optimize data strategies and processes.',
        'Continuously monitor and analyze data to optimize performance and make recommendations to the team and clients.',
        'Identify key trends, insights, and opportunities to improve the effectiveness of campaigns.',
        'Proactively identify and troubleshoot issues with data and reporting.',
        'Stay up-to-date on the latest developments in data and analytics.',
        'Meet regularly with other teams to ensure data is being used effectively and efficiently.',
        'Ensure timely delivery of data reports to clients.'
        ]
      }
    ]
  },
];

const Intership = () => {
  const [activeTab, setActiveTab] = useState(contentData[0].id);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <img className={styles.image} src='/images/eCommerce-Product-Page-Optimization.webp' alt='/' />
        </div>
        <div className={styles.part2}>
          <h2 className={styles.heading2}>Jumpstart Your</h2>
          <h1 className={styles.heading}>CAREER JOURNEY</h1>
          <p>Now accepting applications for<br/>2023 Internships</p>
        </div>
      </div>

      <div className={styles.container2}>
        <div>
          <img className={styles.images} src='/images/Internship.svg' alt='/'/>
        </div>
        <div className={styles.headingcontainer}>
          <h1 className={styles.heading}>When And Where</h1>
          <p>Are you a recent university graduate looking for ways to gain practical experience and build your resume before entering the workforce?</p>
          <p>A2Z Media’s internship program may be the perfect fit for you. This opportunity allows you to work with a reputable company and gain valuable hands-on experience in your field.</p>
          <p>All associated costs will be covered, making it an attractive option for those looking to gain real-world experience before starting their career. If you’re a recent graduate and interested in taking the first steps towards a successful career, consider applying for A2Z Media’s internship program.</p>
        </div>
      </div>
      <h1 className={styles.value}>Choose Your Role</h1>
      <div className={styles.container4}>
        
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <Content data={contentData.find(item => item.id === activeTab)} />
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
    </div>
  );
}

export default Intership;
