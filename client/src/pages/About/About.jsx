import React from 'react'
import styles from './About.module.css'
import devIcon from '../../assets/skills/code .png'
import collabIcon from '../../assets/skills/collaboration.png'
import databaseIcon from '../../assets/skills/database.png'
import debugIcon from '../../assets/skills/debug.png'
import serverIcon from '../../assets/skills/servers.png'
import typescriptIcon from "../../assets/technologies/typescript.png"
import reactIcon  from "../../assets/technologies/react.png"
import gitIcon  from "../../assets/technologies/git.png"
import postgresqlIcon  from "../../assets/technologies/postgresql.png"
import dockerIcon  from "../../assets/technologies/docker.png"
import expressIcon from '../../assets/technologies/express.png'
import nestIcon from '../../assets/technologies/nestjs.png'
import nodeIcon from '../../assets/technologies/nodejs.png'
  
function About() {
  return (
    <div className={styles.about_wrapper}>
      <h1>About Me</h1>
      <p>I’m a software engineer with a passion for building robust and scalable web applications. My background
        in computer science and software development allows me to approach problems from a holistic perspective,
        ensuring that the solutions I develop are both efficient and maintainable. I’m proficient in a variety
        of programming languages and frameworks, and I’m always eager to learn new technologies and stay
        up-to-date with the latest industry trends.
      </p>
      <h1>Skills</h1>
      <div className={styles.skills_container}>
        <div className={styles.skill}>
          <img src={devIcon} alt="" />
          <h3>Full-stack Development</h3>
          <p>Building end-to-end web applications</p>
        </div>
          <div className={styles.skill}>
          <img src={databaseIcon} alt="" />
          <h3>Database Management</h3>
          <p>Designing and managing databases</p>
        </div>
          <div className={styles.skill}>
          <img src={serverIcon} alt="" />
          <h3>Debugging and Testing</h3>
          <p>Identifying and resolving software issues</p>
        </div>
          <div className={styles.skill}>
          <img src={debugIcon} alt="" />
          <h3>System Design</h3>
          <p>Desiging scalable and reliable systems</p>
        </div>
          <div className={styles.skill}>
          <img src={collabIcon} alt="" />
          <h3>Collaboration</h3>
          <p>Working effectively in teams</p>
        </div>
      </div>
      <h1>Technologies</h1>
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
  )
}

export default About