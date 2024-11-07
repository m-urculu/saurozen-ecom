import React from 'react'
import Link from "next/link"
import * as Icons from '@/../public/icons'
import * as Images from '@/../public/images'

const EyewearPage = () => {
    return (
        <div>
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
                        <Link href="/shop/eyewear">On Sale</Link>
                    </button>
                    <button aria-label="shop-dropdown">
                        <Link href="/shop/eyewear">New Arrivals</Link>
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
                    <Link href="/shop/eyewear" aria-label="cart-button">
                        <img
                        src={Icons.cart.src}
                        alt="Cart Icon"
                        className="cart-icon"
                        />
                    </Link>
                    <button aria-label="user-button">
                        <img
                        src={Icons.user.src}
                        alt="User Icon"
                        className="user-icon"
                        />
                    </button>
                </div>
            </nav>
            <div className="products-container">
                <div className="dir-container">
                    <p className="dir">Home &gt; Shop &gt; &nbsp;</p><p className="folder">Eyewear</p>
                </div>
                <div className="products">
                    <div aria-label="filter" className="filter">
                        <div className="filter-top">
                            <p className="filters-title">FILTERS</p>
                            <img 
                                src={Icons.sliders.src}
                                alt="Sliders Icon"
                                className="sliders-button"
                            />
                        </div>
                        <div className="filter-line"></div>
                    </div>
                </div>
            </div>
            <img src={Images.backgroundImg.src} alt="Background Image" className='background-img'/>
        </div>
    )
}


export default EyewearPage;