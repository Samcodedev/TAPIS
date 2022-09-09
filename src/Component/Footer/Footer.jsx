import React from 'react'
import './Footer.css'
import tap from './img/Group 1219.png'
import insta from './img/Instagram.png'
import drib from './img/Dribbble.png'
import twit from './img/Twitter.png'
import you from './img/Youtube.png'

function Footer(){
    return(
        <footer>
            <div className="sub-footer">
                <div className="social">
                    <img src={tap} alt="" />
                    <p>2022 © Touch and pay. All Rights Reserved.</p>
                    <div className="social-icons">
                        <img src={insta} alt="" />
                        <img src={drib} alt="" />
                        <img src={twit} alt="" />
                        <img src={you} alt="" />
                    </div>
                </div>
                <div className="organization">
                    <ol>
                        <li className='title'><h3>Company</h3></li>
                        <li>Travel</li>
                        <li>Blog</li>
                        <li>Services</li>
                        <li>Book Now</li>
                        <li>About Us</li>
                    </ol>
                    <ol>
                        <li className='title'><h3>Support</h3></li>
                        <li>Help center</li>
                        <li>Terms of service</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Status</li>
                    </ol>
                </div>
                <div className="update">
                    <h2>Stay up to date</h2>
                    <input type="email" placeholder='Your email address' />
                </div>
            </div>
        </footer>
    )
}

export default Footer
