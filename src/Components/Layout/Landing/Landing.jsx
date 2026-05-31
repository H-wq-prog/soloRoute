import React from 'react'
import LandignNavbar from './LandignNavbar'
import style from './Landing.module.css'
import { Link } from 'react-router-dom'
import image from '../../../assets/Border.png'
import LandingCard from '../../Ui/Landing/LandingCard'
import SingelCard from '../../Ui/SingelCard/SingelCard'
import How from './How'
export default function Landing() {
    return (
        <div >
            <div className={`${style.shadw}`}></div>
            <LandignNavbar />
            <div className={`${style.landig} d-flex flex-column justify-content-center align-items-center`}>
                <div className='mt-5 d-flex flex-column align-items-center '>
                    <h1 >
                        <span>Your Independent </span>
                        Life,
                        Organised.
                    </h1>
                    <p>Solo-Route helps you manage documents, expenses, and settlement
                        information in one place.</p>
                    <div className={`${style.loginpage} d-flex gap-3`}>
                        <button className={`${style.butn}`}>Get Started</button>
                        <button className={`${style.butn}`}>Learn More </button>
                    </div>
                </div>
                <div className={`${style.image} GraphicalMovement d-flex align-items-center justify-content-center mt-5 mb-5`}>
                    <img src={image} alt="image" />
                </div>
                <div className="cards">
                    <LandingCard />
                </div>
                <div className="singelCard">
                    <SingelCard />
                </div>

                <div className="howItWork w-100">
                    <How />
                </div>


            </div>



        </div>
    )
}
