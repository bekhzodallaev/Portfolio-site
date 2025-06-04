import React from 'react'
import styles from './Home.module.css';
import ProfileImage from '../../assets/Profile.jpg'
import { ReactTyped } from 'react-typed';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
      <div className={styles.home_wrapper}>
      <div className={styles.left_side}>
        <img src={ProfileImage} alt="main_image" className={styles.main_image} />
      </div>
      <div className={styles.right_side}>
        <h1>
          <ReactTyped
            strings={[
            "Hi! I'm Bekhzod, a Software Engineer"
            ]}
            typeSpeed={100}
            showCursor
          />
        </h1>
        <h1></h1>
        <p>I'm dedicated to crafting clean and efficient code that brings ideas to life. Let's build something amazing together!</p>
       <a href="https://github.com/bekhzodallaev" className={styles.btn} target='_blank'>View My Work</a>
      </div>
    </div> 
  )
}
export default Home