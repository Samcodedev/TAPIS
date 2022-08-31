import React from 'react'
import './Features2.css'
import img1 from './img/WIFI.png'
import img2 from './img/AC.png'
import img3 from './img/INSURE.png'
import img4 from './img/Frame.png'
import img5 from './img/image 6.png'

function Feature2(){
    return(
        <div className='Feature2'>
            <div className="sub-Feature2">
                <div className="feature2-contents">
                    <p>- Some Features</p>
                    <h1>Your trip with TAP-interstate is just a movie away</h1>
                    <h3>To make life easier for you, we have put these services together for your convienience.</h3>
                    <div className="icons">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="feature2-img">
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feature2