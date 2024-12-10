import React from 'react'
import * as Icons from '@/../public/icons'
import * as Images from '@/../public/images'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import Background from '@/components/Background'

const ProductItem = () => {
  return (
    <div>
      <PromoBanner/>
      <Navbar/>
      <div className='products-container'>
        <div className="dir-container">
          <p className="dir">Home &gt; Shop &gt; Eyewear &gt; &nbsp;</p><p className="folder">Coral Eclipse</p>
        </div>
        <div className='item'>
          <div className='item-imgs'>
            <div className='item-imgs-sm'>
              <div className='sel-img'>
                <img src={Images.coralEclipse.src} alt="Coral Eclipse" className="item-img"/>
              </div>
              <div className=''>
                <img src={Images.coralEclipse2.src} alt="Coral Eclipse" className="item-img"/>
              </div>
              <div className=''>
                <img src={Images.image86.src} alt="Coral Model" className="item-img"/>
              </div>
            </div>
            <div className='item-lg-container'>
              <img src={Images.coralEclipse.src} alt="Coral Eclipse" className="item-img-lg"/>
            </div>
          </div>
          <div className='item-description'>
            <h1 className="item-title">Coral Eclipse</h1>
            <div aria-label="rating" className="rating">
              <div className="star-rating">
                <img src={Icons.star.src} alt="Star Icon" className="star"/>
                <img src={Icons.star.src} alt="Star Icon" className="star"/>
                <img src={Icons.star.src} alt="Star Icon" className="star"/>
                <img src={Icons.star.src} alt="Star Icon" className="star"/>
                <img src={Icons.halfStar.src} alt="Star Icon" className="star"/>
              </div>
              <p className="number-rate">4.8/5</p>
            </div>
            <div className="price">180€
              <p className="discounted-price">300€</p>
              <div className="discount">
                <p className="percentage">-40%</p>
              </div>
            </div>
            <p className="description">
              Where sustainability meets bold style. Inspired by the vibrant hues of coral reefs, Coral Eclipse sunglasses feature eco-friendly frames made from recycled ocean plastics, offering a sleek design that protects both your eyes and the planet. Shine bright, make an impact.
            </p>
            <div className="line-sep"></div>
            <div className="color">
              <p className="color-type">Color:</p>
              <button className="sel-orange">
                <img
                    src={Icons.check.src}
                    alt="Checked Icon"
                    className="checked"
                />
              </button>
              <button className="sel-blue"></button>
            </div>
            <div className="size">
              <p className="size-type">Size:</p>
              <div className="size-sel">
                <button className="size-lg">Large</button>
                <button className="size-md">Medium</button>
              </div>
            </div>
            <div className="line-sep"></div>
            <div className="add-cart">
              <div className="cart-count">
                <button className="count">-</button>
                <p className="count">1</p>
                <button className="count">+</button>
              </div>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='tabs'>
          <button className='product-detail'>
            <p>Product Detail</p>
            <div className='line-tab'></div>
          </button>
          <button className='rating-reviews'>
            <p>Rating & Reviews</p>
            <div className='line-sel'></div>
          </button>
          <button className='faqs'>
            <p>FAQs</p>
            <div className='line-tab'></div>
          </button>
        </div>
        <div className='product-reviews-container'>
          <div className='product-reviews-header'>
            <h1 className="reviews-name">All Reviews</h1>
            <p className="reviews-number">(451)</p>
            <div className="filter-container">
              <img
                  src={Icons.filter.src}
                  alt="Filter Icon"
                  className="filter-icon"
              />
            </div>
            <button className="write-review">Write a Review</button>
          </div>
          <div className='product-reviews'>
            <div className='product-reviews-row'>
              <div className='product-review'>
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                  </div>
                  <p className="customer-name">Samantha D.
                    <img 
                        src={Icons.verified.src}
                        alt="Verified"
                        className="verified"
                    />
                  </p>
                  <p className='detailed-quote'>
                    "I absolutely love my Coral Eclipse sunglasses! The design is super sleek and the coral-inspired color is gorgeous. They&#39;re lightweight, comfortable, and fit perfectly. Best of all, they&#39;re made from recycled ocean plastic, so I feel great about supporting an eco-friendly brand. I wear them every day, and they always get compliments. Highly recommend!"
                  </p>
                  <p className='date'>Posted on September 24, 2024</p>
              </div>
              <div className='product-review'>
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                  </div>
                  <p className="customer-name">Samantha D.
                    <img 
                        src={Icons.verified.src}
                        alt="Verified"
                        className="verified"
                    />
                  </p>
                  <p className='detailed-quote'>
                    "I absolutely love my Coral Eclipse sunglasses! The design is super sleek and the coral-inspired color is gorgeous. They&#39;re lightweight, comfortable, and fit perfectly. Best of all, they&#39;re made from recycled ocean plastic, so I feel great about supporting an eco-friendly brand. I wear them every day, and they always get compliments. Highly recommend!"
                  </p>
                  <p className='date'>Posted on September 24, 2024</p>
              </div>
            </div>
            <div className='product-reviews-row'>
              <div className='product-review'>
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                  </div>
                  <p className="customer-name">Samantha D.
                    <img 
                        src={Icons.verified.src}
                        alt="Verified"
                        className="verified"
                    />
                  </p>
                  <p className='detailed-quote'>
                    "I absolutely love my Coral Eclipse sunglasses! The design is super sleek and the coral-inspired color is gorgeous. They&#39;re lightweight, comfortable, and fit perfectly. Best of all, they&#39;re made from recycled ocean plastic, so I feel great about supporting an eco-friendly brand. I wear them every day, and they always get compliments. Highly recommend!"
                  </p>
                  <p className='date'>Posted on September 24, 2024</p>
              </div>
              <div className='product-review'>
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                  </div>
                  <p className="customer-name">Samantha D.
                    <img 
                        src={Icons.verified.src}
                        alt="Verified"
                        className="verified"
                    />
                  </p>
                  <p className='detailed-quote'>
                    "I absolutely love my Coral Eclipse sunglasses! The design is super sleek and the coral-inspired color is gorgeous. They&#39;re lightweight, comfortable, and fit perfectly. Best of all, they&#39;re made from recycled ocean plastic, so I feel great about supporting an eco-friendly brand. I wear them every day, and they always get compliments. Highly recommend!"
                  </p>
                  <p className='date'>Posted on September 24, 2024</p>
              </div>
            </div>
            <div className='product-reviews-row'>
              <div className='product-review'>
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                  </div>
                  <p className="customer-name">Samantha D.
                    <img 
                        src={Icons.verified.src}
                        alt="Verified"
                        className="verified"
                    />
                  </p>
                  <p className='detailed-quote'>
                    "I absolutely love my Coral Eclipse sunglasses! The design is super sleek and the coral-inspired color is gorgeous. They&#39;re lightweight, comfortable, and fit perfectly. Best of all, they&#39;re made from recycled ocean plastic, so I feel great about supporting an eco-friendly brand. I wear them every day, and they always get compliments. Highly recommend!"
                  </p>
                  <p className='date'>Posted on September 24, 2024</p>
              </div>
              <div className='product-review'>
                  <div className="star-rating">
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                    <img src={Icons.star.src} alt="Star Icon" className="star" />
                  </div>
                  <p className="customer-name">Samantha D.
                    <img 
                        src={Icons.verified.src}
                        alt="Verified"
                        className="verified"
                    />
                  </p>
                  <p className='detailed-quote'>
                    "I absolutely love my Coral Eclipse sunglasses! The design is super sleek and the coral-inspired color is gorgeous. They&#39;re lightweight, comfortable, and fit perfectly. Best of all, they&#39;re made from recycled ocean plastic, so I feel great about supporting an eco-friendly brand. I wear them every day, and they always get compliments. Highly recommend!"
                  </p>
                  <p className='date'>Posted on September 24, 2024</p>
              </div>
            </div>
          </div>
          <button className="more-reviews">Load More Reviews</button>
        </div>
        <div className='suggestions'>
          <h1 className='suggestions-title'>YOU MIGHT ALSO LIKE</h1>
          <div aria-label="product-items" className="product-items">
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
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
      <Background/>
    </div>
  )
}

export default ProductItem;