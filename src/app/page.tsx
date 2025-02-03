'use client'
import Link from "next/link"
import * as Images from '../../public/images'
import * as Icons from '../../public/icons'
import PromoBanner from "@/components/PromoBanner"
import Navbar from '@/components/Navbar'
import ElementsCalc from '../components/ElementsCalc';
import ReviewSlider from '../components/ReviewSlider';
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Background from "@/components/Background"
import BlobImages from '@/components/BlobImages';
import Products from '@/components/Products'

export default function Home() {
  return (
    <div aria-label="homepage" className="homepage">
      {/* <BlobImages/> */}
      <PromoBanner/>
      <Navbar/>
      <div aria-label="main-section" className="main-section">
        <div className="landing-img-wrapper">
          <img src={Images.landingImg.src} alt="Landing Image" className="landing-img" />
        </div>
          <h1 aria-label="header" className="header">
            Sunglasses Radically Crafted from Ghost Nets
          </h1>
          <p aria-label="paragraph1" className="p1">
            Explore our future with sunglasses made from reclaimed ocean fishing lines. Blending Y2K vibes with cutting-edge eco-innovation. Step into a future where fashion meets sustainability.
          </p>
          {/* <Link href="/shop/eyewear" arial-label="shop-button" className="shop-button">
            Shop Now →
          </Link> */}
          <button className="arrivals-sep">
            <ElementsCalc text="Shop Now →" separatorClass="shop-text" wrapperClass="arrivals-wrapper" />
          </button>
      </div>
      <Products/>
      <div aria-label="what-we-do" className="what-we-do">
        <div className="what-container">
            <div aria-label="text-window" className="text-window">
              <p className="what-text-title">WHAT WE DO</p>
              <p className='what-text-content'>
              At SAUROZER, we&apos;re on a mission to flip the script on waste. We take ghost nets — abandoned fishing gear lurking in the ocean — and upcycle them into bold, eco-friendly sunglasses that merge style with sustainability. Our vision? A future where fashion is fearless, waste is a thing of the past, and you’re part of the change.
Why do we do it? Because the planet needs a reset, and we&apos;re all about pushing boundaries. When you rock a pair of our shades, you&apos;re not just making a fashion statement — you&apos;re repping a movement that&apos;s saving the oceans and giving plastic a second life.
Welcome to the future of eyewear: recycled, reimagined, and ready for what&apos;s next.
              </p>
              <button className='what-learn-btn'>LEARN MORE</button>
            </div>
            <img src={Images.ghostnet.src} alt="Ghost Net Image" className='ghost-net-img' />
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
              <p className="quick-quote">&quot;Stylish, sustainable, and I love them!&quot;</p>
              <p className='detailed-quote'>
              &quot;These sunglasses are incredible! Not only do they look great, but they&apos;re also made from recycled ocean waste, which makes me feel good about wearing them. Super lightweight and durable too. I&apos;m all about supporting a brand that&apos;s making a real difference!&quot;
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
              <p className="quick-quote">&quot;Unique style with a purpose — I&apos;m in love!&quot;</p>
              <p className='detailed-quote'>
              &quot;I love my new sunglasses! The Y2K design is on point, and the fact that they&apos;re made from reclaimed ocean fishing lines makes them even better. Stylish, comfortable, and great for the environment. Totally worth it!&quot;
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
              <p className="quick-quote">&quot;Stylish with a purpose!&quot;</p>
              <p className='detailed-quote'>
              &quot;I&apos;m so impressed with the quality and design of these shades! The Y2K vibe is super trendy, and knowing they&apos;re made from reclaimed ocean waste makes me feel good about my purchase. Lightweight, comfortable, and eco-friendly — couldn&apos;t ask for more.&quot;
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
              <p className="quick-quote">&quot;Fashion-forward and eco-friendly!&quot;</p>
              <p className='detailed-quote'>
              &quot;These sunglasses are incredible! Not only do they look great, but they&apos;re also made from recycled ocean waste, which makes me feel good about wearing them. Super lightweight and durable too. I&apos;m all about supporting a brand that&apos;s making a real difference!&quot;
              </p>
            </div>
          </ReviewSlider>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
      <Background/>
    </div>
    );
  }

