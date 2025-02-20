import React from "react";

const PromoBanner = () => {
  return (
    <div aria-label="promo-banner" className="promo-banner">
      Sign up and get 20% off your first order.
      <button aria-label="promo-button" className="promo-button"
      onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Sign Up Now
      </button>
    </div>  )
}

export default PromoBanner;