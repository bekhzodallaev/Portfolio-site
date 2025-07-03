import React from 'react';
import styles from './Post.module.css';
import PropTypes from 'prop-types';

interface PostProps {
    title: string,
    date: string,
    post_content: string,
    image:string
        
}
function Post({ title, date, post_content, image }:PostProps) {
  return (
    <div className={styles.post_wrapper}>
      <h1>{title}</h1>
      <p className={styles.text_date}>Published on {date}</p>
          {image ? (
              <div className={styles.img_container}>
             <img src={image} alt={`Image for post titled ${title}`} />
              </div>
      ) : (
        <p>No image was found</p>
      )}
      <p>{post_content}</p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Post;
