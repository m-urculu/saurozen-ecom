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
            <div className='item-img-lg'>
              <img src={Images.coralEclipse.src} alt="Coral Eclipse" className=""/>
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

export default ProductItem;