'use client'
// import React, { useRef, useEffect, useState } from 'react'
import * as Icons from '../../public/icons'
import * as Images from '../../public/images'
import ElementsCalc from '../components/ElementsCalc';
import ReviewSlider from '../components/ReviewSlider';


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
              <ElementsCalc text="NEW ARRIVALS" separatorClass="arrivals-text" wrapperClass="arrivals-wrapper"/>           
          </div>
          <div aria-label="product-items" className="product-items">
            <button className='sunglasses'>
              <img src={Images.zenith.src} alt="Zenith" className="product-img"/>
              <p className="product-name">Zenith</p>
              <div aria-label="rating" className="rating">
                <div className="star-rating">
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
                </div>
                <p className="number-rate">4.5/5</p>
              </div>
              <p className="price">129€</p>
            </button>
            <button className='sunglasses'>
              <img src={Images.neonReef.src} alt="Neon Reef" className="product-img"/>
              <p className="product-name">Neon Reef</p>
              <div aria-label="rating" className="rating">
                <div className="star-rating">
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                </div>
                <p className="number-rate">4.0/5</p>
              </div>
              <p className="price">160€</p>
            </button>
            <button className='sunglasses'>
              <img src={Images.stratos.src} alt="Stratos" className="product-img"/>
              <p className="product-name">Stratos</p>
              <div aria-label="rating" className="rating">
                <div className="star-rating">
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
                </div>
                <p className="number-rate">4.5/5</p>
              </div>
              <p className="price">145€</p>
            </button>
            <button className='sunglasses'>
              <img src={Images.coralRay.src} alt="Coral Ray" className="product-img"/>
              <p className="product-name">Coral Ray</p>
              <div aria-label="rating" className="rating">
                <div className="star-rating">
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
                </div>
                <p className="number-rate">4.6/5</p>
              </div>
              <div className="price">212€
                <p className="discounted-price">235€</p>
                <div className="discount">
                  <p className="percentage">-20%</p>
                </div>
              </div>
            </button>
          </div>
          <div className="btn-container">
            <button className="view-button">
              VIEW ALL
            </button>
          </div>
        </div>
        <div aria-label="top-products" className='top-products'>
          <div className="top-sep">
              <ElementsCalc text="TOP SELLING" separatorClass="top-text" wrapperClass="top-wrapper"/>           
          </div>
          <div aria-label="product-items" className="product-items">
              <button className='sunglasses'>
                <img src={Images.solstice.src} alt="Solstice" className="product-img"/>
                <p className="product-name">Solstice</p>
                <div aria-label="rating" className="rating">
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
                  </div>
                  <p className="number-rate">4.6/5</p>
                </div>
                <div className="price">212€
                  <p className="discounted-price">235€</p>
                  <div className="discount">
                    <p className="percentage">-20%</p>
                  </div>
                </div>
              </button>
              <button className='sunglasses'>
                <img src={Images.cascade.src} alt="Cascade" className="product-img"/>
                <p className="product-name">Cascade</p>
                <div aria-label="rating" className="rating">
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                  </div>
                  <p className="number-rate">4.0/5</p>
                </div>
                <p className="price">145€</p>
              </button>
              <button className='sunglasses'>
                <img src={Images.aquaEdge.src} alt="Aqua Edge" className="product-img"/>
                <p className="product-name">Aqua Edge</p>
                <div aria-label="rating" className="rating">
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
                  </div>
                  <p className="number-rate">5/5</p>
                </div>
                <p className="price">200€</p>
              </button>
              <button className='sunglasses'>
                <img src={Images.coralEclipse.src} alt="Coral Eclipse" className="product-img"/>
                <p className="product-name">Coral Eclipse</p>
                <div aria-label="rating" className="rating">
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.star.src} alt="Star Icon" className="star"/>
                    <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
                  </div>
                  <p className="number-rate">4.6/5</p>
                </div>
                <div className="price">260€
                  <p className="discounted-price">300€</p>
                  <div className="discount">
                    <p className="percentage">-40%</p>
                  </div>
                </div>
              </button>
          </div>
          <div className="btn-container">
            <button className="view-button">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
      <div aria-label="what-we-do" className="what-we-do">
        <div className="key-sep">
          <ElementsCalc text="SUSTAINABILITY IS KEY" separatorClass="key-text" wrapperClass="key-wrapper" />
        </div>
        <div className="what-container">
            <div aria-label="text-window" className="text-window">
              <p className="what-text-title">WHAT WE DO</p>
              <p className='what-text-content'>
              At SAUROZER, we’re on a mission to flip the script on waste. We take ghost nets — abandoned fishing gear lurking in the ocean — and upcycle them into bold, eco-friendly sunglasses that merge style with sustainability. Our vision? A future where fashion is fearless, waste is a thing of the past, and you’re part of the change.
Why do we do it? Because the planet needs a reset, and we're all about pushing boundaries. When you rock a pair of our shades, you're not just making a fashion statement — you're repping a movement that’s saving the oceans and giving plastic a second life.
Welcome to the future of eyewear: recycled, reimagined, and ready for what’s next.
              </p>
              <button className='what-learn-btn'>LEARN MORE</button>
            </div>
            <img src={Images.ghostnet.src} alt="Ghost Net Image" className='ghost-net-img' />
        </div>
      </div>
      <div aria-label="ocean-sep" className="ocean-sep">
        <div className="blk-line-container">
          <div className='blk-line'/>
        </div>
        <ElementsCalc text="FUTURE OCEAN" separatorClass="ocean-text" wrapperClass="ocean-wrapper" />
        <div className="blk-line-btm"/>
        <div className="blk-line-container">
          <div className='blk-line'/>
        </div>
      </div>
      <div aria-label="models" className='models'>
        <img src={Images.image71.src} alt="Model 71" className='model-img mm'/>
        <img src={Images.image72.src} alt="Model 72" className='model-img mm'/>
        <img src={Images.image73.src} alt="Model 73" className='model-img mm'/>
        <img src={Images.image75.src} alt="Model 75" className='model-img mm'/>
        <img src={Images.image76.src} alt="Model 76" className='model-img mm'/>
        <img src={Images.image80.src} alt="Model 80" className='model-img mm'/>
        <img src={Images.image81.src} alt="Model 81" className='model-img'/>
        <img src={Images.image87.src} alt="Model 87" className='model-img'/>
        <img src={Images.image88.src} alt="Model 88" className='model-img'/>
        <img src={Images.image89.src} alt="Model 89" className='model-img'/>
        <img src={Images.image90.src} alt="Model 90" className='model-img'/>
        <img src={Images.image91.src} alt="Model 91" className='model-img'/>
      </div>
      <div aria-label="reviews" className="reviews-section">
        <div className="reviews-content">
          <ReviewSlider>
            {/* Individual review items */}
            <div className='review'>
              <p className="customer-name">Sarah M.</p>
              <div className="star-rating">
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img 
                    src={Icons.verified.src}
                    alt="Verified"
                    className="verified"
                />
              </div>
              <p className="quick-quote">"Stylish, sustainable, and I love them!"</p>
              <p className='detailed-quote'>
                “These sunglasses are incredible! Not only do they look great, but they’re also made from recycled ocean waste, which makes me feel good about wearing them. Super lightweight and durable too. I’m all about supporting a brand that’s making a real difference!”
              </p>
            </div>

            <div className='review'>
              <p className="customer-name">Jenna L.</p>
              <div className="star-rating">
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img 
                    src={Icons.verified.src}
                    alt="Verified"
                    className="verified"
                />
              </div>
              <p className="quick-quote">"Unique style with a purpose — I’m in love!"</p>
              <p className='detailed-quote'>
                “I love my new sunglasses! The Y2K design is on point, and the fact that they're made from reclaimed ocean fishing lines makes them even better. Stylish, comfortable, and great for the environment. Totally worth it!”
              </p>
            </div>

            <div className='review'>
              <p className="customer-name">Sarah K.</p>
              <div className="star-rating">
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img 
                    src={Icons.verified.src}
                    alt="Verified"
                    className="verified"
                />
              </div>
              <p className="quick-quote">"Stylish with a purpose!"</p>
              <p className='detailed-quote'>
                “I’m so impressed with the quality and design of these shades! The Y2K vibe is super trendy, and knowing they’re made from reclaimed ocean waste makes me feel good about my purchase. Lightweight, comfortable, and eco-friendly — couldn’t ask for more.”
              </p>
            </div>

            <div className='review'>
              <p className="customer-name">Ryan M.</p>
              <div className="star-rating">
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img src={Icons.star.src} alt="Star Icon" className="star" />
                <img 
                    src={Icons.verified.src}
                    alt="Verified"
                    className="verified"
                />
              </div>
              <p className="quick-quote">"Fashion-forward and eco-friendly!"</p>
              <p className='detailed-quote'>
                “These sunglasses are incredible! Not only do they look great, but they’re also made from recycled ocean waste, which makes me feel good about wearing them. Super lightweight and durable too. I’m all about supporting a brand that’s making a real difference!”
              </p>
            </div>
          </ReviewSlider>
        </div>
      </div>
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
      <div aria-label="footer" className="footer">
        <div className="footer-container">
          <div className="saurozen">
            <h1 className="footer-logo">SAUROZEN</h1>
            <p className="about">At SAUROZER, we transform discarded ocean plastics into cutting-edge, eco-friendly sunglasses. Style meets sustainability in every pair — wear the change, save the planet.</p>
            <div className="link-buttons">
              <button className="link-btn">
                <img
                  src={Icons.twitter.src}
                  alt="Twitter Icon"
                  className="link-icon"
                />
              </button>
              <button className="link-btn">
                <img
                  src={Icons.facebook.src}
                  alt="Facebook Icon"
                  className="link-icon"
                />
              </button>
              <button className="link-btn">
                <img
                  src={Icons.instagram.src}
                  alt="Instagram Icon"
                  className="link-icon"
                />
              </button>
              <button className="link-btn">
                <img
                  src={Icons.github.src}
                  alt="Github Icon"
                  className="link-icon"
                />
              </button>
            </div>
          </div>
          <div className="footlinksrow">
            <div className="footitle">COMPANY
            <button className="footlink">About</button>
            <button className="footlink">Features</button>
            <button className="footlink">Work</button>
            <button className="footlink">Career</button>
            </div>
            <div className="footitle">HELP
            <button className="footlink">Customer Support</button>
            <button className="footlink">Delivery Details</button>
            <button className="footlink">Terms & Conditions</button>
            <button className="footlink">Privacy Policy</button>
            </div>
          </div>
          <div className="footlinksrow">
            <div className="footitle">FAQ
            <button className="footlink">Account</button>
            <button className="footlink">Manage Deliveries</button>
            <button className="footlink">Orders</button>
            <button className="footlink">Payment</button>
            </div>
            <div className="footitle">RESOURCES
            <button className="footlink">Sustainability</button>
            <button className="footlink">Upcycling</button>
            <button className="footlink">Blog</button>
            <button className="footlink">Playlist</button>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="rights">SAUROZER © 2024, All Rights Reserved</div>
        <div className="payments">
          <div className="whitebox">
            <img src={Images.visa.src} alt="Visa" className='payment-icon'/>        
          </div>
          <div className="whitebox">
            <img src={Images.mastercard.src} alt="Mastercard" className='payment-icon'/>        
          </div>
          <div className="whitebox">
            <img src={Images.apple.src} alt="Apple" className='payment-icon'/>        
          </div>
          <div className="whitebox">
            <img src={Images.google.src} alt="Google" className='google-icon'/>        
          </div>
        </div>
      </div>
      <img src={Images.backgroundImg.src} alt="Background Image" className='background-img'/>
    </div>
    );
  }