import React from 'react'
import styles from './Projects.module.css'
import gettyImages from '../../assets/projects/gettyimages.jpg'
import music from '../../assets/projects/music.jpg'
import taskManager from '../../assets/projects/taskmanager.jpg'
import tenzie from '../../assets/projects/tenzie.jpg'

function Projects() {
  return (
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
          <p>Music app allows you upload music and listen.Lets make your music listening more enjoyable</p>
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
  )
}

export default Projects