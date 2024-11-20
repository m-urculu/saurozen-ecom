import React from 'react'
import Link from "next/link"
import * as Icons from '@/../public/icons'
import * as Images from '@/../public/images'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

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
                        <div className="types">
                            <button className="type">
                                <p className="type-name">Classic</p>
                                <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Sport</p>
                                <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Wrap</p>
                                <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Aviator</p>
                                <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                                />
                            </button>
                            <button className="type">
                                <p className="type-name">Clubmaster</p>
                                <img
                                src={Icons.arrowFilter.src}
                                alt="Arrow Filter Icon"
                                className="arrow-filter"
                                />
                            </button>
                        </div>
                        <div className="filter-line"></div>
                        <div className="filter-price">
                            <button className="title-container">
                                <p className="filters-title">PRICE</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter-down"
                                />
                            </button>
                            <div className="price-slider">
                                <div className="slider-bar">
                                    <div className="min-slider-container">
                                        <button className="min-price-slide"></button>
                                        <div className="price-min">50€</div>
                                    </div>
                                    <div className="slider-bar-range"></div>
                                    <div className="max-slider-container">
                                        <button className="max-price-slide"></button>
                                        <div className="price-max">200€</div>
                                    </div>
                                </div>
                                </div>
                            <div className="filter-line"></div>
                        </div>
                        <div className="filter-colors">
                            <button className="title-container">
                                <p className="filters-title">COLORS</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter-down"
                                />
                            </button>
                            <div className="colors-selection">
                                <div className="sel-row">
                                    <div className="sel-orange">
                                        <img
                                            src={Icons.check.src}
                                            alt="Checked Icon"
                                            className="checked"
                                        />
                                    </div>
                                    <div className="sel-magenta"></div>
                                    <div className="sel-lime"></div>
                                    <div className="sel-black"></div>
                                    <div className="sel-white"></div>
                                </div>
                                <div className="sel-row">
                                    <div className="sel-pink"></div>
                                    <div className="sel-yellow"></div>
                                    <div className="sel-green"></div>
                                    <div className="sel-cian"></div>
                                    <div className="sel-red"></div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-line"></div>
                        <div className="filter-size">
                            <button className="title-container">
                                <p className="filters-title">SIZE</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter-down"
                                />
                            </button>
                            <div className="size-selection">
                                <button className="size-button">SMALL</button>
                                <button className="size-button">MEDIUM</button>
                                <button className="size-button">LARGE</button>
                            </div>
                        </div>
                        <div className="filter-line"></div>
                        <div className="filter-collection">
                            <button className="title-container">
                                <p className="filters-title">COLLECTION</p>
                                <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter-down"
                                />
                            </button>
                            <div className="types">
                                <button className="type">
                                    <p className="type-name">Coral Horizon</p>
                                    <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                    />
                                </button>
                                <button className="type">
                                    <p className="type-name">Neon Tides</p>
                                    <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                    />
                                </button>
                                <button className="type">
                                    <p className="type-name">Aqua Future</p>
                                    <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                    />
                                </button>
                                <button className="type">
                                    <p className="type-name">Sea Change</p>
                                    <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                    />
                                </button>
                                <button className="type">
                                    <p className="type-name">Eclipse Waters</p>
                                    <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="apply-button">APPLY FILTER</button>
                        </div>
                    </div>
                    <div className="eyewear"></div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
            <img src={Images.backgroundImg.src} alt="Background Image" className='background-img'/>
        </div>
    )
}

export default EyewearPage;