'use client'
import * as Icons from '@/app/assets/icons'

export default function Home() {
  return (
    <div>
      <div aria-label="promo-banner" className="promo-banner">
        Sign up and get 20% off your first order.
        <button aria-label="promo-button" className="promo-button">
          Sign Up Now
        </button>
      </div>
      <div aria-label="nav-bar" className="nav-bar">
        <button aria-label="menu-button" className="menu-button">
          <img 
            src={Icons.hamburgerMenu.src} 
            alt="Hamburger Menu Icon" 
            className="w-[18px] h-[14.02px]" 
          />
        </button>
        <div aria-label="logo" className="logo">SAUROZEN</div>
        <div aria-label="nav-links" className="nav-links">
          <button aria-label="shop-dropdown">
            <div>Shop ▼</div>
          </button>
          <button aria-label="shop-dropdown">
            <div>On Sale</div>
          </button>
          <button aria-label="shop-dropdown">
            <div>New Arrivals</div>
          </button>
          <button aria-label="shop-dropdown">
            <div>What We Do</div>
          </button>
        </div>
        <div aria-label="search-bar" className="search-bar">
          <div className="input-bar">
            <img
              src={Icons.searchLight.src}
              className="search-light"
            />
            <input
            className="input"
            />
          </div>
        </div>
        <div className="right-buttons">
          <button aria-label="search-button" className="search-btn">
            <img
              src={Icons.search.src}
              alt="Search Icon"
            />
          </button>
          <button aria-label="cart-button">
            <img
              src={Icons.cart.src}
              alt="Cart Icon"
              className="icon"
            />
          </button>
          <button aria-label="user-button">
            <img
              src={Icons.user.src}
              alt="User Icon"
              className="icon"
            />
          </button>
        </div>
      </div>
    </div>
    );
  }