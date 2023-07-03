import React from "react";
import style from "./heroSection.module.css";
function HeroSection() {
  return (
    <div className={style.content} id="home">
      <h2 className={style.para}>
        "Take care of your <span className={style.live}>body.</span>
        <br />
        It's the only place you <br />
        have to <span className={style.live}>live</span>"
        <div>
          <button className={style.btn}>Join With Us </button>
        </div>
      </h2>
    </div>
  );
}

export default HeroSection;
