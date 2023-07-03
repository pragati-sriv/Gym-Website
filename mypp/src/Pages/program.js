import React from "react";
import style from "./program.module.css"

function Program() {
  const image = [
    {
      img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Body Builder",
    },
    {
      
      img: "https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Aerobic",
    },
    {
     
      img: "https://images.pexels.com/photos/4534689/pexels-photo-4534689.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Yoga",
    },
    {
      
      img: "https://images.pexels.com/photos/3822455/pexels-photo-3822455.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Flexibility",
    },
    {
      
      img: "https://images.pexels.com/photos/4937768/pexels-photo-4937768.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Zumba dance",
    },
    {
     
      img: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
      type: "Weight Lifting",
    },
  ];

  return (
  <div id="program" className={style.top}>
    <div className={style.heading}>Training Program</div>
    <div className={style.imageContainer}>
      {image.map((item) => (
        <div key={item.type} className={style.imageItem}>
          <img src={item.img} alt={item.type} className={style.img} />
          <div className={style.type}>{item.type}</div>
        </div>
      ))}
    </div>
  </div>
);
}


export default Program;
