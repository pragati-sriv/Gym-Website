// import React from "react";

// function Pricing() {
//   return <div id="pricing">
//     <h4>hello</h4>
//   </div>;
// }
// export default Pricing;


import React from 'react'
import styles from './pricing.module.css'

function Pricing() {


  function handleClick(){
    alert("Thank you for Choosing us");
  }

  function handleJoin(){
    alert("Thank you for Joining us")
  }

  return (
    <div id="pricing" >
      <div className={styles.container}>
        <div className={styles.pricingTop}>
          <h2>
            Gym Pricing Plan
          </h2>
          </div>
          {/* ======Princing wrapper======== */}

          <div className={styles.pricingWrapper}>
            <div className={styles.pricingItem}>
              <div className={styles.pricingCardTop}>
                <h3 className={styles.sectionTitle}>Regular Member</h3>
                <h3 className={styles.pricing}> $50 <span>/month</span></h3>

              </div>

              <div className={styles.services}>
                <ul>
                  <li><span><i class="ri-checkbox-blank-circle-fill"></i>
                  </span>Unlimited access to the gym</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span> Customer support</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>Personal trainer</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>standard optains</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>5 classes per Week</li>
                </ul>
                <button className={styles.registerBtn} onClick={handleClick}>Choose</button>

              </div>

            </div>

            <div className={styles.pricingItem02}>
              <div className={styles.pricingCardTop}>
                <h3 className={styles.sectionTitle}>Primium Member</h3>
                <h3 className={styles.pricing}> $150 <span>/month</span></h3>

              </div>

              <div className={styles.services}>
                <ul>
                  <li><span><i class="ri-checkbox-blank-circle-fill"></i>
                  </span>Unlimited access to the gym</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span> Customer support</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>Personal trainer</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>standard optains</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>5 classes per Week</li>
                </ul>
                <button className={styles.registerBtn} onClick={handleJoin}>Join Us</button>

              </div>

            </div>

            <div className={styles.pricingItem03}>
              <div className={styles.pricingCardTop}>
                <h3 className={styles.sectionTitle}>Standard Member</h3>
                <h3 className={styles.pricing}> $500 <span>/month</span></h3>

              </div>

              <div className={styles.services}>
                <ul>
                  <li><span><i class="ri-checkbox-blank-circle-fill"></i>
                  </span>Unlimited access to the gym</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span> Customer support</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>Personal trainer</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>standard optains</li>

                  <li><span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>5 classes per Week</li>
                </ul>
                <button className={styles.registerBtn} onClick={handleClick}>Choose</button>

              </div>

            </div>

          </div>

        </div>
      </div>
   
  )
}

export default Pricing