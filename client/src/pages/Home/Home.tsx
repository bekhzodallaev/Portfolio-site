import React from 'react'
import styles from './Home.module.css';
import ProfileImage from '../../assets/Profile.jpg'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import PageTitle from '../../components/PageTitle/PageTitle';

function Home() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate = {{y:0, opacity:1}}
      transition ={{ duration:0.6, ease:"easeOut"}}
    >
      <PageTitle title='Home - Bekhzod Allaev' />
       <div className={styles.home_wrapper}>
      <div className={styles.parent_wrapper}>
          <div className={styles.left_side}>
        <img src={ProfileImage} alt="Profile" className={styles.main_image} />
      </div>
      <div className={styles.right_side}>
        <p> Bekhzod Allaev </p>
        <p> Software Engineer</p>
      </div>
        </div>
       <q>I'm dedicated to crafting clean and efficient code that brings ideas to life.</q>
        <div className={styles.links_container}>
          <a href="https://github.com/bekhzodallaev" className={styles.btn} target='_blank' rel="noreferrer noopener"> My Work</a>
          <NavLink to="/about" className={styles.btn}> About Me </NavLink>
          <NavLink to="/blog" className={styles.btn}>Read Blog </NavLink>
        </div>
    </div> 
     </motion.div>
  )
}
export default Home