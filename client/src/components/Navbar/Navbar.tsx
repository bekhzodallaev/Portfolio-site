import React, {useState} from 'react'
import styles from './Navbar.module.css'
import codingLogo from '../../assets/coding.png';
import { NavLink} from 'react-router-dom';
import downloadIcon from '../../assets/file_download.svg'

function Navbar() {

  const [toggle, setToggle] = useState(false);
  
  return (
      <div className={styles.navbar_wrapper}>
          <NavLink to="/" className={styles.navbar_name}>
            <div className={styles.parent_logo}>
           <img src={codingLogo} alt="Coding Logo" className={styles.codingLogo} />
            </div>
           <h2>Bekhzod Allaev</h2>
          </NavLink>

          <nav>
        <ul className={`${styles.navlink_container} ${toggle ? styles.active : ''}`}>
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
            <a href="/assets/BekhzodAllaevCV0.pdf" className={styles.link_styles} download>
              <p>Resume</p>
            <img src={downloadIcon} alt="" />
              
  </a>
</li>
              </ul>
        <div className={styles.hamburger_container} >
          <input type="checkbox" id='menu_checkbox' className={styles.menu_checkbox}
            checked={toggle}
            onChange={() => setToggle(prev => !prev)}
          />
          <label htmlFor="menu_checkbox" className={styles.nav_label}>
            <div></div>
            <div></div>
            <div></div>
          </label>
       </div>
          </nav>
    </div>
  )
}
export default Navbar