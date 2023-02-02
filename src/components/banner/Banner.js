import React from 'react'
import './banner.css'
import centralEurope from '../../assets/centralEurope.jpeg'
import dubai from '../../assets/dubai.jpeg'
import greece from '../../assets/greece.jpeg'
import holyland from '../../assets/holyland.jpeg'

function Banner() {
    return (
        <div className="banner-container">
            <div className="banner-imgs-container">
                <div className="thumbnail-photos-lh">
                    <img className="thumb-img" src={centralEurope} />
                    <img className="thumb-img" src={dubai} />
                </div>
                <div className="main-slideshow">
                    <img className="main-img" src={centralEurope} />
                </div>
                <div className="thumbnail-photos-rh">
                    <img className="thumb-img" src={greece} />
                    <img className="thumb-img" src={holyland} />
                </div>
            </div>
        </div>
    )
}

export default Banner