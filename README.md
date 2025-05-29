# 🚀 Bekhzod Allaev's Portfolio Website

This is my personal portfolio website, built as a **full-stack web application** using:

✅ **Frontend**: React  
✅ **Backend**: Node.js & Express  
✅ **Database**: PostgreSQL (or MongoDB)

The site showcases my skills, projects, blog posts, and allows visitors to contact me and download my CV.  

---

## 🌟 Features

- **Home/About**: Introduction and background information  
- **Projects**: Dynamic list of my featured projects  
- **Blog**: My technical posts and tutorials, with interactive code examples  
- **Contact**: Contact form for visitors to send me messages  
- **Download CV**: Downloadable PDF of my resume  
- **Admin functionality** (optional): Secure blog post creation and editing  
- **Code Runner** (optional): Execute code examples in blog posts (using Piston API or sandbox)

---

## 🛠️ Technologies

| Layer      | Tech Stack                         |
|------------|------------------------------------|
| Frontend   | React, React Router, Tailwind CSS (or CSS/Sass), Axios |
| Backend    | Node.js, Express, REST API, JWT |
| Database   | PostgreSQL / MongoDB               |
| Dev Tools  | Docker (optional), Git, CI/CD pipelines, Vercel/Render |
| Code Editor| Monaco Editor / CodeMirror (for interactive blog code) |

---

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/bekhzodallaev/Portfolio-site/
cd portfolio-site


## 🛠️ Development

## Client
cd client
npm install
npm start        # Starts React app on http://localhost:3000


## Server

cd server
npm install
cp .env.example .env # Update with your DB connection and settings
npm run dev          # Starts Express server on http://localhost:5000
