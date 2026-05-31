import React from 'react'
import style from './LandingCard.module.css'
export default function LandingCard() {
    const cards = [
        {icon: "fa-solid fa-shield-heart", title: "Document Vault", pragrafe:"Securely store and organise your important documents with military-grade encryption." },
        {icon: "fa-solid fa-wallet", title: "Finance Tracker", pragrafe:"Track your expenses and stay financially aware with multi-currency support." },
        {icon: "fa-regular fa-map", title:"Settler Guide" , pragrafe:"Access practical settlement information and local tips to navigate new territories."}
    ]
  return (
    <div className={`${style.cards} effec d-flex flex-column align-items-center mt-5 mb-5`}>
        <h1 className='header'>Precision Built Features</h1>
            <div className="section d-flex gap-5">
                {
                    cards.map((items, index)=>(
                            <div className={`${style.card} d-flex flex-column justify-content-center align-items-center`}>
                                <i class={items.icon}></i>
                                <h3>{items.title}</h3>
                                <span>{items.pragrafe}</span>
                            </div>
                    ))
                }
            </div>
    </div>
  )
}
