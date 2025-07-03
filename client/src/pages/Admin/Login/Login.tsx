import React from 'react'
import styles from './Login.module.css'

function Login() {
  return (
      <div className={styles.login_wrapper}>
          <h1>Welcome back</h1>
          <form action="" method="post">
              <label htmlFor="username">Username</label><br />
              <input type="text" id='username' placeholder='Enter your username' required/> <br /> <br />
              
              <label htmlFor="username">Password</label><br />
              <input type="text" id='username' placeholder='Enter your password' required /> <br /> <br />
              
              <button>Log in</button>
          </form>
    </div>
  )
}

export default Login