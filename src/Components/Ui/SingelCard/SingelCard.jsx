import React from 'react'
import style from './SingelCard.module.css'
import image from '../../../assets/Overlay.png'
export default function SingelCard() {
  return (
    <div className={`d-flex bg-white  rounded-5 mb-5 effec`}>
        <div className= {`d-flex flex-column justify-content-center w-50 p-4 ${style.title}`}>
            <h2>Why Solo-Route</h2>
            <p>Living independently can feel overwhelming. Solo-Route
transforms scattered responsibilities into a simple and
manageable system. We built this for those who choose their
own path and need a reliable foundation.</p>
        <div className={`${style.data} d-flex gap-5 `}>
                <div className="ActiveUser">
 <h2>10K+</h2>
 <span>ACTIVE USERS</span>
                </div>
                <div className="private">
<h2>100%</h2>
<span>PRIVATE</span>
                </div>
            </div>
        </div>
        
        <div className={`${style.image} w-50 p-3 rounded-end-5`} >
                        <div className={`${style.shadw}`}></div>

            <img src={image} alt="image" className='GraphicalMovement' />
        </div>
    </div>
  )
}
