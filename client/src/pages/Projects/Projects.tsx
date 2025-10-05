import React from 'react'
import styles from './Projects.module.css'
import gettyImages from '../../assets/projects/gettyimages.jpg'
import music from '../../assets/projects/music.jpg'
import taskManager from '../../assets/projects/taskmanager.jpg'
import tenzie from '../../assets/projects/tenzie.jpg'
import { motion } from "framer-motion"
import PageTitle from '../../components/PageTitle/PageTitle'
function Projects() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate = {{y:0, opacity:1}}
      transition ={{ duration:0.6, ease:"easeOut"}}
    >
      <PageTitle title='Projects' />
    <div className={styles.projects_wrapper}>
      <h1>Projects</h1>
      <p>A curated selection of my recent work, highlighting my expertise in software development</p>
      <div className={styles.projects_container}>
        <div className={styles.project}>
          <div className={styles.image_container}>
            <a href="https://bekhzodallaev.github.io/getty-images/" target='_blank' rel='noreferrer' >
              <img src={gettyImages} alt="" />
            </a>
          </div>
          <h3>Getty Images</h3>
          <p>Getty Images helps find any images globally.</p>
        </div>
        
        <div className={styles.project}>
          <div className={styles.image_container}>
            <a href="https://github.com/bekhzodallaev/Music-App" target='_blank' rel='noreferrer'>
            <img src={music} alt="" />
            </a>
          </div>
          <h3>Music App</h3>
          <p>Music app allows you upload music and listen.</p>
        </div>
        
        <div className={styles.project}>
          <div className={styles.image_container}>
            <a href="https://github.com/bekhzodallaev/Task-Manager" target='_blank' rel='noreferrer'>
            <img src={taskManager} alt="" />
            </a>
          </div>
          <h3>Task Manager</h3>
          <p>Task Manager is a good choice to manage your tasks wisely.</p>
        </div>
        
        <div className={styles.project}>
          <div className={styles.image_container}>
            <a href="https://github.com/bekhzodallaev/Tenzie-game" target='_blank' rel='noreferrer'>
            <img src={tenzie} alt="" />
            </a>
          </div>
          <h3>Tenzie Game</h3>
          <p>Tenzie Game creates an exciting atmosphere to spend your quality time.Lets try and see how it works</p>
           </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Projects