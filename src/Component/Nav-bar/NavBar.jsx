import React from 'react'
import './NavBar.css'
import img from './img/Group 1219.png'
import menu from './img/menu.png'
import cancel from './img/cancel.png'


    // console.log(window.innerWidth)
    // if(window.innerWidth < 915){
    //     document.getElementById("nav").style.display="none"
    // }
    // else if(window.innerWidth > 915){
    //     document.getElementById("nav").style.display="flex"
    // }
    

function NavBar(){

    function burger(){
        document.getElementById("nav").style.display="flex"
        document.getElementById("close").style.display="flex"
        document.getElementById("open").style.display="none"
    }

    function times(){
        document.getElementById("nav").style.display="none"
        document.getElementById("close").style.display="none"
        document.getElementById("open").style.display="flex"
    }

    function call(){
        console.log(window.innerWidth)
        window.innerWidth < 916 ? document.getElementById("nav").style.color="#FFFFFF" : document.getElementById("nav").style.display="flex"
    }
    
    setInterval(function(){
        call()
    }, 1000)


    
    

    return(
        <div className='nav-bar'>
            <div className="sub-nav-bar">
                <div className="logo-div">
                    <img src={img} alt="" />
                </div>
                <nav id='nav'>
                    <ul>
                        <a href="#"><li>Travel</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Service</li></a>
                        <a href="#"><li>Fares</li></a>
                    </ul>
                    <div className="bookNow">
                        <button>Book Now</button>
                    </div>
                </nav>
                <div id="burger">
                    <img src={menu} alt="" id='open'  onClick={burger}/>
                    <img src={cancel} alt="" id='close' onClick={times} />
                </div>
            </div>
        </div>
    )
}

export default NavBar
