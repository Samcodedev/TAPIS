import React from 'react'
import Card from './Card'
import './Features.css'
import img1 from './img/WIFI (1).png'
import img2 from './img/TIME.png'
import img3 from './img/INSURE.png'
// import { Swiper, SwiperSlider } from 'swiper/react'

function Features(){

    let data = [
        {
            id: 1,
            title: "Free Wifi",
            content: "Bus missed is not equal to money lost. *Terms and conditions apply",
            img: img1
        },
        {
            id: 2,
            title: "Timely",
            content: "Your time is important to us. Never miss another important meeting, event or activity when you travel with TAPIS.",
            img: img2
        },
        {
            id: 3,
            title: "Insured Trip",
            content: "Your life is as important to us as your trip. Life and luggage insurance is available for all passengers on the trip.",
            img: img3
        }
    ]

    const datas = data.map(item =>{
        return(
            <Card 
                key={item.id}
                img={item.img}
                title={item.title}
                content={item.content}
            />
        )
    })

    return(
        <div className='features'>
            <div className="sub-features">
                <div className="features-text">
                    <p>Some Features</p>
                    <h2>Why you should choose TAP- <br /> Interstate</h2>
                </div>
                <div className="features-card">
                    {/* <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(Swiper) => console.log(swiper)}
                    >
                        <SwiperSlider> */}
                            {datas}
                            {/* </SwiperSlider>
                    </Swiper> */}
                </div>
            </div>
        </div>
    )
}

export default Features