import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import PostDetails from './pages/PostDetails/PostDetails';
import Login from './pages/Admin/Login/Login';
function App() {
  return (
  <div className="App">
      <Navbar /> {/* Include Navbar at the top level */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/blog/:id' element={<PostDetails />} />
        <Route path='/admin/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
