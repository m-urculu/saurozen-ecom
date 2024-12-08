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
        <div></div>
      </div>
      <Newsletter/>
      <Footer/>
      <Background/>
    </div>
  )
}

export default ProductItem;