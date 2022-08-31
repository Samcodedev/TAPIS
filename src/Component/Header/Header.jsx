import React from 'react'
import './Header.css'
import img from './img/Frame.png'
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/hdw3KUed1Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
function Header(){
    return(
        <div className='Header'>
            <div className="sub-header">
                <div className="content-div">
                    <h1>A timely alternative for interstate travel</h1>
                    <div className="town">
                        <img src={img} alt="" />
                        <p>-Lagos to Ibadan - <span>₦3000</span> <br /> -Lagos To Abeokuta - <span>₦2000</span></p>
                    </div>
                    <p>Are you tired of uncertain departure / arrival period? You know the regular buses don't cut it anymore, it is time for a better alternative…Don't waste time, use TAPIS.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hdw3KUed1Gs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="form-div">
                    <form action="">
                        <h2>Start Your TAP-Interstate Journey</h2>
                        <p>Get ₦500 off your first trip with TAPIS</p>

                        <label htmlFor="">Your Name*</label>
                        <input type="text" required/>
                        <label htmlFor="">Your Email*</label>
                        <input type="email" required/>
                        <label htmlFor="">Phone Number*</label>
                        <input type="number" required/>
                        <label htmlFor="">Occupation*</label>
                        <input type="text" required/>
                        <label htmlFor="">How old are you?*</label>
                        <input type="number" max="100" required/>
                        <label htmlFor="">Between Lagos - Ibadan - Abeokuta which destination do you go to at least once a week</label>
                        <input type="text" required/>

                        <input type="submit" value="GET DISCOUNT CODE" className='submit' />
                        <h4>Join Now - N500 Special offer</h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header