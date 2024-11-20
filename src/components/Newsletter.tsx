import React from "react";
import * as Icons from '../../public/icons'

interface NewsletterProps {
  onSubscribe?: (email: string) => void; // Optional callback for handling the subscription
}

const Newsletter: React.FC<NewsletterProps> = ({ onSubscribe }) => {
  // const handleSubscribe = () => {
  //   const emailInput = (document.getElementById("email-input") as HTMLInputElement)?.value;
  //   if (onSubscribe && emailInput) {
  //     onSubscribe(emailInput);
  //   }
  // };

  return (
    <div aria-label="newsletter" className="newsletter">
      <div className="newsletter-container">
        <h1 className="newsletter-title">STAY IN THE LOOP WITH OUR FRESH DROPS</h1>
        <div className="newsletter-input">
          <div className="email">
            <img
                src={Icons.mail.src}
                alt="Mail Icon"
                className="mail-icon"
            />
            <input className="email-input" placeholder="Enter your email address" ></input>
          </div>
          <button className="sub-btn">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
