// import React from "react";
// import style from "./navbar.module.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import Registration from "../HeroSection/registration";
// function Navbar() {
//   const navigate = useNavigate();

//   function handleJoinUs() {
//     navigate("/Registration");
//   }

//   return (
//     <div>
//       <div className={style.navbar}>
//         <h2>
//           {" "}
//           <NavLink className={style.logo}>Gym</NavLink>
//         </h2>
//         <div className={style.content}>
//           <NavLink className={style.navlink} to="/">
//             About
//           </NavLink>
//           <NavLink className={style.navlink} to="/program">
//             Program
//           </NavLink>
//           <NavLink className={style.navlink} to="/training">
//             Training
//           </NavLink>
//           <NavLink className={style.navlink} to="/pricing">
//             Pricing
//           </NavLink>
//         </div>
//         <div>
//           <button className={style.button} onClick={handleJoinUs}>
//             Join us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
// import { useRef } from 'react';
const nav=[
  {
    path: "#home",
    display:'Home'
  },
  {
    path: "#about",
    display:'About'
  },
  {
    path: "#program",
    display:'Program'
  },
  {
    path: "#training",
    display:'Training'
  },
  {
    path : '#pricing',
    display:"Pricing"
  }
];

const Navbar = () => {
  const navigate = useNavigate();

  function handleRegistration(){
    navigate('/registration');
  }
  // const headerRef = useRef(null)
  // const headerFunction = () =>{
  //   if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
  //     headerRef.current.classList.add('sticky_header')
  //   }else{
  //     headerRef.current.classList.remove('sticky_header')
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll', headerFunction);
  // },[]);

  const handleClick =(e)=>{
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left:0,
      top: location - 80,
    })
  }

  // ==========chtgpt code========
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const targetAttr = e.target.getAttribute('href');
  //   const targetElement = document.querySelector(targetAttr);
  
  //   if (targetElement) {
  //     const location = targetElement.offsetTop;
  
  //     window.scrollTo({
  //       left: 0,
  //       top: location - 80,
  //     });
  //   }
  // };
  
  return (
    <header className={styles.header} >
    <div className={styles.container}>
    <div className={styles.navWrapper} >
    {/* ref={headerRef}  */}
      <div className={styles.logo}>
      <h2>Gym</h2>

      </div>


      {/* ========navigation======== */}
      <div className={styles.navigation}>
        <ul className={styles.menu}>
          {
            nav.map(item=>(
              <div className={styles.navItem}>
              <a onClick={handleClick} href={item.path}>{item.display}</a>
              </div>
            ))
          }
        </ul>
      </div>
      <div>
        <button className={styles.btn} onClick={handleRegistration}>Join Us</button>
      </div>
      </div>

    </div> 
  
    </header>
  );  
};

export default Navbar;