import React from "react";
import * as Icons from '../../public/icons'
import Link from "next/link"


const Navbar = () => {
  return (
    <nav aria-label="nav-bar" className="nav-bar">
                <button aria-label="menu-button">
                    <img 
                        src={Icons.hamburgerMenu.src}
                        alt="Hamburger Menu Icon"
                        className="menu-button"
                    />
                </button>
                <Link href="/" aria-label="logo" className="logo">SAUROZEN</Link>
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
  );
};

export default Navbar;
