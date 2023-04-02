import React from 'react'
import './Card.scss'
import Dine from '..//..//assets//images/Dine-Out.png'
import Night from '..//..//assets//images/Night-Life.png'
import Online from '..//..//assets//images/Online-Food.png'

const Card = () => {
    return (

        <div className="card">
            <div className="cardImg">
                <img src={Dine} alt="dine_img" />
                <h1>Order Online </h1>
                <span>Stay Home And Order TO Your Doorstop</span>
            </div>

            <div className="cardImg">
                <img src={Night} alt="night_img" />
                <h1>Nightlife And Clubs </h1>
                <span>Explore The City's Top Nightlife Outlets </span>
            </div>

            <div className="cardImg">
                <img src={Online} alt="online_img" />
                <h1>Dinning</h1>
                <span>Views The City's Favorite  Venues</span>
            </div>
        </div>


    )
}

export default Card