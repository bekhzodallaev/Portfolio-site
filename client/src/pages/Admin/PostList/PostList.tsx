import React from 'react'
import styles from "./PostList.module.css"
import posts from "../../../static/posts.json"
function PostList() {
  return (
    <div className={styles.postlist_wrapper}>
      <h1>Posts</h1>
      <div className={styles.table_wrapper}> 
        
         <table>
        <thead>
          <tr>
            <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}> {/* Assuming each post has a unique 'id' */}
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>
                <a href="#">Edit</a> | <a href="#">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
       </table>
       </div>
    </div>
  )
}

export default PostList