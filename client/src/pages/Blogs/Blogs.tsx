import styles from './Blogs.module.css'
import posts from '../../static/posts.json'
import leftArrow from '../../assets/blogs/arrow.png'
import rightArrow from '../../assets/blogs/right.png'
import { Link } from 'react-router-dom'

function Blogs() {

  return (
    <div className={styles.blogs_wrapper}>
      <h1>Blog Posts</h1>
      <p>Explore my thoughts on technology, industry trends and best practices</p>
      <input type="text" placeholder='Search blog posts' />

      <ul className={styles.query_examples}>
        <li>All</li>
        <li>Technical Tutorials</li>
        <li>System Design</li>
        <li>Career Growth</li>
        <li>Tech Comparisons</li>
      </ul>
      <div className={styles.post_wrapper}> 
        {
          posts.map((post) => (
            <div className={styles.post_container} id={post.id}>
          <div className={styles.img_container}>
            <img src={post.image} alt="" />
              </div>
              <h2>{post.title}</h2>
              <p>{post.short_description}</p>
              <Link to={`/blog/${post.id}`} className={styles.details_btn}>Read more...
              </Link>
         </div>
          ))
        }
      </div>
      <div className={styles.carousel_wrapper}>
        <ul>
          <li className={styles.leftArrow}>
            <img src={leftArrow} alt="" />
          </li>
          <li className={styles.active}>1</li>
          <li>2</li>
          <li>4</li>
          <li>.....</li>
          <li>10</li>
          <li className={styles.rightArrow}>
            <img src={rightArrow} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Blogs