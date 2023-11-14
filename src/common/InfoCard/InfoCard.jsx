import React from 'react'
import './InfoCard.css'
import { Link } from 'react-router-dom'

    <InfoCard logo={e.logo} title={e.title} text={e.text} url={e.url}/>

export default function InfoCard({logo, title, text, url}) {
    return (
        <div className='InfoCardDesign'>
            <div className='InfoCardLogo'>
            <img src={logo}/>
        </div>
        <div className='InfoCardTitle'>
            <p>
                {title}
            </p>
        </div>
        <div className='InfoCardText'>
            <p>
                {text}
            </p>
        </div>
        <div className='InfoCardUrl'>
            <a href={url}>LEARN MORE</a>
        </div>
        </div>
    )
}