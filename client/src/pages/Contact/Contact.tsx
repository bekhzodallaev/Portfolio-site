import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from "./Contact.module.css";
import instagramLogo from "../../assets/contact/instagram.png";
import telegramLogo from "../../assets/contact/telegram.png";
import linkedinLogo from "../../assets/contact/linkedin.png";
import githubLogo from "../../assets/contact/github.png";
import { motion } from "framer-motion";
import PageTitle from '../../components/PageTitle/PageTitle';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_uv29szc', 
    TEMPLATE_ID: 'template_loer4ts', 
    PUBLIC_KEY: 'iAEJv03htbhIwGCYC' 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      console.log('Sending email via EmailJS...');
      
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time:new Date().toLocaleString(),
          reply_to: formData.email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setStatus({ 
        type: 'success', 
        message: "Message sent successfully! I'll get back to you within 24 hours." 
      });
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        type: 'error', 
        message: "Failed to send message. Please try again or contact me directly via email." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <PageTitle title='Contact'/>
      <div className={styles.contact_wrapper}>
        <h1>Get in Touch</h1>
        <p>I'm always open to discussing new projects, creative ideas,
          or just a friendly chat. Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
        
        <div className={styles.contact_body}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label><br/>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder='Your name' 
              required 
              value={formData.name}
              onChange={handleChange}
            /><br/>
            
            <label htmlFor="email">Email</label><br/>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder='Your email' 
              required 
              value={formData.email}
              onChange={handleChange}
            /><br/>
            
            <label htmlFor="message">Message</label><br/>       
            <textarea 
              name="message" 
              id="message" 
              rows={10} 
              cols={50} 
              required 
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message...'
            ></textarea>
            
            <button 
              className={styles.submit_btn} 
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            
            {status && (
              <div 
                style={{ 
                  marginTop: '1rem',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: status.type === 'success' ? '#f0fff0' : '#fff0f0',
                  color: status.type === 'success' ? 'green' : 'red',
                  border: `1px solid ${status.type === 'success' ? 'green' : 'red'}`
                }}
              >
                {status.message}
              </div>
            )}
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
  );
}

export default Contact;