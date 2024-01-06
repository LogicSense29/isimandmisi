import React from 'react'
import StarIcons from './StarIcons'

export default function Card() {
  return (
    <>
            <div className='card'>
              <div className='us'>
                    <h1>Hello</h1>
              </div>
              <div className='ds'>
                    <h3>The Name</h3>
                    <p>The Content</p>
                    <StarIcons/>
              </div>
            </div>
    </>
  )
}
