import React, { useState } from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import './tourDetails.css'

function Itinerary({ itinerary }) {
    // child of TourDetails.js //

    const [more, setMore] = useState(false)

    return <div className="itinerary-container">
        {
            !more
                ? <div className="itinerary"><p>{itinerary?.slice(0, 5)}</p><p><span onClick={() => setMore(true)}><FiArrowDown /></span></p></div>
                : <div className="itinerary"><p>{itinerary}</p><p><span onClick={() => setMore(false)}><FiArrowUp /></span></p></div>
        }
    </div>

}

export default Itinerary