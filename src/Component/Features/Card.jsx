import React from 'react'
import './Features.css'

function Card(props){
    return(
        <div className='card'>
            <div className="feature-img">
                <img src={props.img} alt="" />
            </div>
            <div className="feature-text-content">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}


export default Card