import React from 'react'
import './Clients.css'
import Card from './Card'
import img1 from './img/image 7.png'
import img2 from './img/image 8 (1).png'
import img3 from './img/image 9.png'

let data = [
    {
        id: 1,
        img: img1,
        name: "Bimbo Sanni",
        job: "Enterprenuer",
        contents: "I travel to Ibadan at least 3 times in a week and TAPIS helps me meet my deadline each time."
    },
    {
        id: 2,
        img: img2,
        name: "Bimbo Sanni",
        job: "ATB inc.",
        contents: "I live in Ibadan with my family, but I work in Lagos so I travel to Lagos every Monday morning and come back to Ibadan every Friday aftyernoon. TAPIS has made my transit smoother than usual. "
    },{
        id: 3,
        img: img3,
        name: "Collins Obi",
        job: "Student UNILAG",
        contents: "My friend told me about TAPIS. And its the life and luggage insurance for me."
    },
]

const datas = data.map(item =>{
    return(
        <Card 
            key={item.id}
            img={item.img}
            name={item.name}
            job={item.job}
            contents={item.contents}
        />
    )
})

function Clients(){
    return(
        <div className='Clients'>
            <div className="sub-clients">
                <div className="clients-text">
                    <p>Happy Clients</p>
                    <h2>What People Say About Us</h2>
                </div>
                <div className="clients-cards">
                    <div className="scroll">
                        {datas}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients