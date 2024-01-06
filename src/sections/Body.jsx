import React, { useState } from 'react'
import sectionOneImage from "../assets/isimandmisi-patners.jpg"
import sectionOneImageTwo from "../assets/isimandmisi-patners-two.jpg"
import Card from '../components/Card'
import Gallery from '../components/Gallery'

function Body() {
  const [onImageHover, setOnImageHover] = useState(false)

  function onMouseHover(){
    setOnImageHover(true)
  }

  function onMouseAway(){
    setOnImageHover(false)
  }
  return (
    <>
    <div className='section-one'>
      <div className="section-one-item-one">
        <div className='section-one-image-container'>
          <img src={onImageHover ? sectionOneImageTwo : sectionOneImage } className='section-one-image' onMouseOver={onMouseHover} onMouseOut={onMouseAway}/>
        </div>
      </div>
      <div className="section-one-item-two">
          <div className='text-section-one'>
          <h2>OUR MISSION</h2>
          <p>Establish an environment filled with love and inclusivity, fostering personal development and empowering individuals to embrace their distinct journeys.</p>
          <p>"Empowering wellness, one step at a time; where balance and vitality beautifully rhyme."</p>
          </div>
      </div>
      <div className="section-one-item-three"></div>
    </div>
    <div className='section-two'>
      <div className='heading-container-for-section-two'>
      <h2>ISMIANDMISI AMBIENCE</h2>
      </div>
      <div className='content-container-for-section-two'>
      <div className='ac-container'>
      <Gallery/>
      </div>
      </div>
    </div>
    <div className='section-three'>
      <div className='heading-container-for-section-three'>
      <h2>ISMIANDMISI PACKAGES</h2>
      </div>
      <div className='content-container-for-section-three'>
      </div>
    </div>
    </>

  )
}

export default Body;