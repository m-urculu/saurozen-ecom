import React from "react";
import * as Images from '@/../public/images'

const Background = () => {
  return (
    <img src={Images.backgroundImg.src} alt="Background Image" className='background-img'/>
  )
}

export default Background;