import React from "react";
import * as Images from '@/../public/images'

const Background = () => {
  return (
    <div className='background-overlay'>
      <img src={Images.backgroundImg.src} alt="Background Image" className='background-img'/>
    </div>
  )
}

export default Background;