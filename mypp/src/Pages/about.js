import React from "react";
import style from "./about.module.css";

function About() {
  return (
    <div id="about">
      <div className={style.heading}>
        <h5 className={style.about}>About Us</h5>
      </div>
      <div>
        <iframe
          width="500"
          height="470"
          src={"https://www.youtube.com/embed/-Ov9JTw-59s"}
        />
      </div>
      <div>
        <p className={style.paragraph}>
          <em>
            Through our 7-day programme we offer you some useful life questions
            to think about. We also offer you some answers on these questions
            but we encourage you to learn more about it yourself. You can read
            it all at once but we advise you to read and think about your life
            for the next 7 days. It may become the most valuable week of your
            life! It can be very valuable in your life. So take some time and
            invest one week in your life and future!
          </em>
          <div>
            <button className={style.btn}>Learn More</button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default About;
