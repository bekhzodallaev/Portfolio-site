
import React, { useState } from 'react'
import styles from "./Contact.module.css"
import instagramLogo from "../../assets/contact/instagram.png"
import telegramLogo from "../../assets/contact/telegram.png"
import linkedinLogo from "../../assets/contact/linkedin.png"
import githubLogo from "../../assets/contact/github.png"
import { motion } from "framer-motion"


function Contact() {

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: ''
    }
  );
   
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<any | null>(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const API_URL = process.env.REACT_APP_API_URL || "https://portfolio-site-k7n9.onrender.com/api/contact";
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
  
    try {
      const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.contact_wrapper}>
      <h1>Get in Touch</h1>
      <p>I'm always open to discussing new projects, creative ideas,
        or just a friendly chat. Feel free to reach out, and I'll get back to you as soon as possible.
      </p>
      <div className={styles.contact_body}>
         <form onSubmit={handleSubmit}>
         <label htmlFor="name"> Full Name</label><br/>
        <input type="text" id="name" name="name" placeholder='Your name' required value={formData.name} rel="noreferrer noopener "  onChange={handleChange}/><br></br>
          
        <label htmlFor="email">Email</label><br/>
          <input type="email" id="email" name="email" placeholder='Your email' required value={formData.email} rel="noreferrer noopener" onChange={handleChange}
          /><br></br>
          
        <label htmlFor="message">Message</label><br/>       
        <textarea name="message" id="message" rows={10} cols={50} required value={formData.message} rel="noreferrer noopener" onChange={handleChange}></textarea>
          <button className={styles.submit_btn} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
        </form>
        <div className={styles.contact_links}>
          <a href="https://www.linkedin.com/in/bekallaev/" target='_blank' rel="noreferrer noopener">
            <img src={linkedinLogo} alt="Linkedin logo" />
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/bekhzodallaev/" target='_blank' rel="noreferrer noopener">
            <img src={githubLogo} alt="Github logo" />
            <span>Github</span>
          </a>
          <a href="https://t.me/webdevdaily" target='_blank' rel="noreferrer noopener">
            <img src={telegramLogo} alt="Telegram logo" />
            <span>Telegram</span>
          </a>
           <a href="https://www.instagram.com/behzodallaev/" target='_blank' rel="noreferrer noopener">
            <img src={instagramLogo} alt="Instagram logo" />
            <span>Instagram</span>
          </a>
        </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Contact