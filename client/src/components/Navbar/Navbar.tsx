import React from 'react'
import styles from './Navbar.module.css'
import codingLogo from '../../assets/coding.png';
import { NavLink} from 'react-router-dom';
import profilePicture from '../../assets/Profile.jpg'

function Navbar() {
  return (
      <div className={styles.navbar_wrapper}>
          <div className={styles.navbar_name}>
              <div className={styles.parent_logo}>
               <img src={codingLogo} alt="Coding Logo" className={styles.codingLogo} />
              </div>
              <h2>Bekhzod Allaev</h2>
          </div> 
          <nav>
        <ul>
          <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `${styles.link_styles} ${isActive ? styles.active_link : ''}`
    }
  >
    Home
  </NavLink>
</li>

<li>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      `${styles.link_styles} ${isActive ? styles.active_link : ''}`
    }
  >
    About
  </NavLink>
</li>

<li>
  <NavLink
    to="/projects"
    className={({ isActive }) =>
       `${styles.link_styles} ${isActive ? styles.active_link : ''}`
    }
  >
    Projects
  </NavLink>
</li>

<li>
  <NavLink
    to="/blog"
    className={({ isActive }) =>
       `${styles.link_styles} ${isActive ? styles.active_link : ''}`
    }
  >
    Blog
  </NavLink>
</li>

<li>
  <NavLink
    to="/contact"
     className={({ isActive }) =>`${styles.link_styles} ${isActive ? styles.active_link : ''}`
    }
  >
    Contact
  </NavLink>
</li>

< li className={styles.download_btn}>
  <a href="../../assets/BekhzodAllaevCV0.pdf" className={styles.link_styles} download>
    Download CV
  </a>
</li>
              </ul>
              <div className={styles.profile_picture}>
                  <img src={profilePicture} alt="profile picture" />
              </div>
          </nav>

    </div>
  )
}
export default Navbar