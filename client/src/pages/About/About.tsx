import React from 'react'
import styles from './About.module.css'
import typescriptIcon from "../../assets/technologies/typescript.png"
import reactIcon  from "../../assets/technologies/react.png"
import gitIcon  from "../../assets/technologies/git.png"
import postgresqlIcon  from "../../assets/technologies/postgresql.png"
import dockerIcon  from "../../assets/technologies/docker.png"
import expressIcon from '../../assets/technologies/express.png'
import nestIcon from '../../assets/technologies/nestjs.png'
import nodeIcon from '../../assets/technologies/nodejs.png'
import internXperi from "../../assets/intern-xperi.jpg"
import student42 from "../../assets/Student-42.jpg";
import { motion } from "framer-motion"

function About() {
  return (
     <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className={styles.about_wrapper}>
      <h1>About Me</h1>
      <p>My name is Bekhzod, a self-taught software engineer from Uzbekistan, currently living in Warsaw, Poland.
        I started as a self-learner at the student dormitory, diving into JavaScript and web
        development. Over time, I expanded my skills to include modern
        frameworks, backend development, and database management.
      </p>
      <p>I got my first commercial experience as a web engineer intern at <strong> Xperi Inc</strong> after five months of learning web development. Since then, I have worked at different companies, gaining as much experience as possible. </p>
      <div className={styles.intern_photo}>
         <img src={internXperi} alt="Internship at Xperi Photo" className={styles.intern_photo} />
      </div>
      <p className={styles.comment}>My first day at Xperi as a Web Engineer Intern</p>

      <p>
       To further strengthen my skills, I joined <strong>42 Warsaw</strong> — an innovative peer-to-peer programming school where I worked on real-world coding projects and learned through collaboration and problem-solving. This experience expanded my knowledge, sharpened my problem-solving skills, and taught me how to approach challenges with creativity and discipline.
      </p>
      <div className={styles.warsaw42}>
        <img src={student42} alt="42 Warsaw Photo" />
      </div>
      <p className={styles.comment}>Graduation day at 42 as a Piscine student</p>
       <p>
        Currently, I focus on building responsive and scalable applications
        using React, Node.js, and Typescript. I enjoy creating solutions that
        are both efficient and enjoyable for users, while keeping code clean
        and maintainable.
      </p>
      <p className={styles.tech_text}>
  Here are some of the key technologies I enjoy working with and continue to explore:
</p>
      <div className={styles.technologies_container}>
        <div className={styles.tech_type}>
          <div>
            <img src={typescriptIcon} alt="" />
          </div>
          <p>Typescript</p>
        </div>
        <div className={styles.tech_type}>
          <div>
            <img src={reactIcon} alt="" />
          </div>
          <p>React</p>
        </div>
        <div className={styles.tech_type}>
          <div>
             <img src={nodeIcon} alt="" />
          </div>
          <p>Node.js</p>
        </div>
        <div className={styles.tech_type}>
          <div>
            <img src={postgresqlIcon} alt="" />
          </div>
          <p>PostgreSQL</p>
        </div>
        <div className={styles.tech_type}>
          <div>
            <img src={gitIcon} alt="" />
          </div>
          <p>Git</p>
        </div>
        <div className={styles.tech_type}>
          <div>
           <img src={expressIcon} alt="" />
          </div>
          <p>Express.js</p>
        </div>
        <div className={styles.tech_type}>
          <div>
           <img src={dockerIcon} alt="" />
          </div>
          <p>Docker</p>
        </div>  <div className={styles.tech_type}>
          <div>
            <img src={nestIcon} alt="" />
          </div>
          <p>Nest.js</p>
        </div>

      </div>
    </div>

    </motion.div>
  )
}

export default About