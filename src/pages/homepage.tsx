'use client'
import * as Icons from '../../public/icons'
import * as Images from '../../public/images'


export default function Home() {

  return (
    <div aria-label="homepage" className="homepage">
      <div aria-label="promo-banner" className="promo-banner">
        Sign up and get 20% off your first order.
        <button aria-label="promo-button" className="promo-button">
          Sign Up Now
        </button>
      </div>
      <nav aria-label="nav-bar" className="nav-bar">
        <button aria-label="menu-button">
          <img 
            src={Icons.hamburgerMenu.src}
            alt="Hamburger Menu Icon"
            className="menu-button"
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
          <button aria-label="search-button">
            <img
              src={Icons.search.src}
              alt="Search Icon"
              className="search-icon"
            />
          </button>
          <button aria-label="cart-button">
            <img
              src={Icons.cart.src}
              alt="Cart Icon"
              className="cart-icon"
            />
          </button>
          <button aria-label="user-button">
            <img
              src={Icons.user.src}
              alt="User Icon"
              className="user-icon"
            />
          </button>
        </div>
      </nav>
      <div aria-label="main-section" className="main-section">
          <img src={Images.landingImgM.src} alt="Landing Image" className="landing-img-m" />
          <img src={Images.landingImg.src} alt="Landing Image" className="landing-img" />
          <h1 aria-label="header" className="header">
            Sunglasses Radically Crafted from Ghost Nets
          </h1>
          <p aria-label="paragraph1" className="p1">
            Explore our future with sunglasses made from reclaimed ocean fishing lines. Blending Y2K vibes with cutting-edge eco-innovation. Step into a future where fashion meets sustainability.
          </p>
          <button arial-label="shop-button" className="shop-button">
            Shop Now
          </button>
      </div>
      <div aria-label="products" className="products">
        <div aria-label="new-arrivals" className="new-arrivals">
          <div className="arrivals-sep">
            <p>NEW ARRIVALS</p>
          </div>
        </div>
        <div aria-label="top-selling" className="top-selling">
        </div>
      </div>
      <img src={Images.backgroundImgM.src} alt="Background Image" className='background-img-m'/>
      <img src={Images.backgroundImg.src} alt="Background Image" className='background-img'/>
    </div>
    );
  }