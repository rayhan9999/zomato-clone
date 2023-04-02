import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/Zomato-Logo.png'

const Header = () => {
    return (
        <div className="header">

            <nav>
                <span>Get the app</span>
                <div className="right">
                    <span>Investor  Relations</span>
                    <span>Add restaurant</span>
                    <span>Log in </span>
                    <span>Sign in</span>
                </div>
            </nav>


            <div className="headerContent">
                <img src={Logo} alt="logo_img" />
                <h3>Discover The Best Food And Drinks In Patna</h3>

                <div className="input">
                    <select name="" id="">
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Luxmipur">Luxmipur</option>

                    </select>

                    <input type="text" placeholder='Search For Restaurant,Cuisine Or Dish ' />
                </div>

            </div>
        </div>
    )
}

export default Header