import React, { useState } from "react";
import styles from "./registration.module.css";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    // Email validation
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Save data to local storage
    const user = {
      name: name,
      email: email,
      password: password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    alert("Registration successful!");
  }

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    return emailRegex.test(email);
  }

  function handleLogin(){
    navigate('/login')
  }

  return (
    <div className={styles.img}>
    <div className={styles.container}>
      <h2 className={styles.heading}>Register Here</h2>
      <div>
        {/* <label>UserName:</label> */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
          className={styles.input}
        />
      </div>
      <div>
        {/* <label>Email:</label> */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
          className={styles.input}
        />
        {!isValidEmail(email)}
      </div>
      <div>
        {/* <label>Password:</label> */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
          className={styles.input}
        />
      </div>
      <div>
        {/* <label>Confirm Password:</label> */}
        <input
          type="password"
          placeholder="Enter your confirm password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          className={styles.input}
        />
      </div>
      <div>
        <button onClick={handleClick} className={styles.button}>Register</button>
      </div>
      <div>
        <h3>Already have an account?<span onClick={handleLogin}>Login</span></h3>
      </div>
    </div>
    </div>
  );
}