import React, { useState } from 'react';
import styles from './login.module.css'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Invalid password. It should contain at least 6 characters, including at least one uppercase letter, one lowercase letter, and one digit.'
      );
      return;
    }

    // Authentication logic
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);
    setEmail('');
    setPassword('');
    alert('Login successful!');
  }

  return (
    <div className={styles.container}>
    <h2 className={styles.login}>Login</h2>
      <form onSubmit={handleSubmit} >
        <label>
        
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
          />
        </label>
        <br />
        <br />
        <label>
         
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
          />
        </label>
        <br />
        <br />
        <div>
          <button className={styles.button} type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}