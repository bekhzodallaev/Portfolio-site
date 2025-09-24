import React from 'react'
import styles from "./Footer.module.css"
function Footer() {
    const year = new Date().getFullYear();
  return (
      <div className={styles.footer}>
          <p>@ {year} bekhzodall.com</p>
    </div>
  )
}

export default Footer