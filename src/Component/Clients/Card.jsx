import React from 'react'
import star from './img/Star.png'


function Card(props){
    return(
        <div className='card'>
            <div className="card-img">
                <img src={props.img} alt="" />
            </div>
            <div className="card-content">
                <h2>{props.name}</h2>
                <h4>{props.job}</h4>
                <p>{props.contents}</p>
                <div className="star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card