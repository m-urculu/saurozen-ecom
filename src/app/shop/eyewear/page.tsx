import React from 'react'
import * as Icons from '@/../public/icons'
import * as Images from '@/../public/images'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

const EyewearPage = () => {
    return (
        <div>
            <div aria-label="promo-banner" className="promo-banner">
                Sign up and get 20% off your first order.
                <button aria-label="promo-button" className="promo-button">
                Sign Up Now
                </button>
            </div>
            <Navbar/>
            <div className="products-container">
                <div className="dir-container">
                    <p className="dir">Home &gt; Shop &gt; &nbsp;</p><p className="folder">Eyewear</p>
                </div>
                <div className="products-filtered">
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
                    <div className="eyewear">
                        <div className="eye-top">
                            <h1 className="eyewear-title">EYEWEAR</h1>
                            <div className="sort-items">
                                <p className="sort-text">Showing 1-9 of 100 Products - Sort by:&nbsp;</p>
                                <button className="sort-btn">
                                    <p>Most Popular &nbsp;</p>
                                    <img
                                    src={Icons.arrowFilter.src}
                                    alt="Arrow Filter Icon"
                                    className="arrow-filter-down"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="eye-products">
                            <div className="products-row">
                                <button className='sunglasses'>
                                <div className="img-container">
                                    <img src={Images.zenith.src} alt="Zenith" className="product-img"/>
                                </div>
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
                                <div className="img-container">
                                    <img src={Images.neonReef.src} alt="Neon Reef" className="product-img"/>
                                </div>
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
                                <div className="img-container">
                                    <img src={Images.stratos.src} alt="Stratos" className="product-img"/>
                                </div>
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
                            </div>
                            <div className="products-row">

                                <button className='sunglasses'>
                                <div className="img-container">
                                    <img src={Images.coralRay.src} alt="Coral Ray" className="product-img"/>
                                </div>
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
                                <button className='sunglasses'>
                                    <div className="img-container">
                                    <img src={Images.solstice.src} alt="Solstice" className="product-img"/>
                                    </div>
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
                                    <div className="img-container">
                                    <img src={Images.cascade.src} alt="Cascade" className="product-img"/>
                                    </div>
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
                            </div>
                            <div className='products-row'>

                                <button className='sunglasses'>
                                    <div className="img-container">
                                    <img src={Images.aquaEdge.src} alt="Aqua Edge" className="product-img"/>
                                    </div>
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
                                    <div className="img-container">
                                    <img src={Images.coralEclipse.src} alt="Coral Eclipse" className="product-img"/>
                                    </div>
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
                                <button className='sunglasses'>
                                    <div className="img-container">
                                    <img src={Images.driftLens.src} alt="Drift Lens" className="product-img"/>
                                    </div>
                                    <p className="product-name">Drift Lens</p>
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
                                    <div className="price">245€
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="listing">
                            <button className='prev-btn'>
                                <img 
                                src={Icons.arrowFat.src}
                                alt="Previous"
                                className="listing-arrowleft"
                                />&nbsp; &nbsp;
                                <p className='btn-text'>Previous</p>
                            </button>
                            <div className="num-sel">
                                <button className='num-btn'>1</button>
                                <button className='num-btn'>2</button>
                                <button className='num-btn'>3</button>
                                <p className='num-btn'>...</p>
                                <button className='num-btn'>8</button>
                                <button className='num-btn'>9</button>
                                <button className='num-btn'>10</button>
                            </div>
                            <button className='prev-btn'>
                                <p className='btn-text'>Next</p>
                                &nbsp; &nbsp;
                                <img 
                                src={Icons.arrowFat.src}
                                alt="Next"
                                className="listing-arrowright"
                                />
                            </button>                        
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter/>
            <Footer/>
            <Background/>
        </div>
    )
}

export default EyewearPage;