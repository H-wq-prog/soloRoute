import React from 'react'
import styel from "./Landing.module.css"
export default function How() {
  return (
    <div className='effec mb-5 d-flex flex-column align-items-center'>
      <h1 className='header'> How It Works</h1>

      <div className={`${styel.mainroul} d-flex justify-content-around `}>
        <div className={styel.roul}>
          <span className={styel.line}>1</span>
          <h5>Create Account</h5>
          <p>Set up your secure, encrypted profile in
            seconds.</p>
        </div>
        <div className={styel.roul}>
          <span className={styel.line}>2</span>
          <h5>Organise Life</h5>
          <p>Upload documents and connect your finances
            easily.</p>
        </div>
        <div className={styel.roul}>
          <span>3</span>
          <h5>Stay on Track</h5>
          <p>Get alerts and insights to keep your life moving
            forward.</p>
        </div>
      </div>


    </div>
  )
}
