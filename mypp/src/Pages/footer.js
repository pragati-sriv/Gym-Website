import React from "react";
import style from "./footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className={style.parent}>
        <div>
          <h3>GYM</h3>
          <p>
            Welcome to our gym! We are dedicated to helping you achieve your
            fitness.
            <span className={style["social-icons"]}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </span>
          </p>
        </div>
        <div>
          <h3 className="healthy">Healthy living</h3>
          <p className="content">
            Regular exercise Proper nutrition Professional guidance Clean and
            safe environment
            {/* <span className={style["social-icons"]}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </span> */}
          </p>
        </div>
        <div>
          <h3>Services</h3>
          <p>
            Exercise equipment Personal training Childcare services Group
            fitness classes
          </p>
        </div>
        <div>
          <h3>Programs</h3>
          <p>
            Wellness Programs Specialty Programs Functional Fitness
            Cardiovascular Training
          </p>
        </div>
      </div>
    </div>
  );
}
