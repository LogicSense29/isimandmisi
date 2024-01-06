import React from 'react'
import star from "../assets/star-fill-isim.png"
import images from "../images.json";

export default function Gallery(props) {
  return (
    <div className='id'>
            {images.map((image,index)=> (
                <div className='card gallery' key={index}>
                <div className='us'>
                    <img src={image} alt='' id='img'/>
                </div>
                <div className='gallery-star'>
                    <img src={star}/>
                </div>
            </div>
            ))}
    </div>
  )
}
