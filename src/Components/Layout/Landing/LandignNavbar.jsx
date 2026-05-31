import React from 'react'
import style from './Landing.module.css'
export default function LandignNavbar() {
  return (
    <div className={`${style.navbar} container-fluid d-flex justify-content-between align-items-center   `}>
        <div className={`${style.links} d-flex align-items-center `}>
            <ul className={`d-flex justify-content-between align-items-center`}>
                <li>Product</li>
                <li>Features</li>
                <li>How It Works</li>
            </ul>
        </div>
        <div className={`${style.bnt}`}>
<button className={`${style.butn}`}>Get Started</button>
        </div>
    </div>
  )
}
