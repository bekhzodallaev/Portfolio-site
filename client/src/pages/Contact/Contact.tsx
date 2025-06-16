
import React from 'react'
import styles from "./Contact.module.css"
import instagramLogo from "../../assets/contact/instagram.png"
import telegramLogo from "../../assets/contact/telegram.png"
import linkedinLogo from "../../assets/contact/linkedin.png"
import githubLogo from "../../assets/contact/github.png"

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <h1>Get in Touch</h1>
      <p>I'm always open to discussing new projects, creative ideas,
        or just a friendly chat. Feel free to reach out, and I'll get back to you as soon as possible.
      </p>
      <div className={styles.contact_body}>
         <form action="" method="post">
         <label htmlFor="name">First name</label><br/>
        <input type="text" id="name" name="name" placeholder='Your name' required/><br></br>
          
        <label htmlFor="email">First name</label><br/>
        <input type="email" id="email" name="email" placeholder='Your email' required/><br></br>
          
        <label htmlFor="message">Message</label><br/>       
        <textarea name="message" id="message" rows={10} cols={50} required></textarea>
        <button  className={styles.submit_btn}>Send Message</button>
        </form>
        <div className={styles.contact_links}>
          <a href="https://www.linkedin.com/in/bekallaev/" target='_blank' rel="noopener">
            <img src={linkedinLogo} alt="" />
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/bekhzodallaev/" target='_blank' rel="noopener">
            <img src={githubLogo} alt="" />
            <span>Github</span>
          </a>
          <a href="https://t.me/icebreaker0210" target='_blank' rel="noopener">
            <img src={telegramLogo} alt="" />
            <span>Telegram</span>
          </a>
           <a href="https://www.instagram.com/behzodallaev/" target='_blank' rel="noopener">
            <img src={instagramLogo} alt="" />
            <span>Instagram</span>
          </a>
        </div>
     </div>
    </div>
  )
}

export default Contact