import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2 >FoodyHub.</h2>
            <p>Ordering food from our website is a seamless and enjoyable experience. Simply browse through our extensive menu, filled with a variety of delicious options to suit every palate. Once you've made your selection, add your desired items to the cart and proceed to checkout.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
               <a href='https://www.linkedin.com/in/yash-jhalani-4ba2971c0/' target="_blank"><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-7231015392</li>
                <li>yashjhalani7@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FoodyHub.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
