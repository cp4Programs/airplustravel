import React from 'react'
import './destinations.css'
import { Link } from 'react-router-dom'


function DestinationsCard({ destinations }) {
    //from Destinations.js//


    return (
        <Link to={`/tourDetails/${destinations.idKey}`} className="destinations-card">
            <div className="overlay"></div>
            <img className="card-img" src={destinations?.image} />
            <div className="details">
                <p>{destinations?.tour} {destinations?.tourOption}</p>
                {/* <p>Price {destinations?.Price}</p>
                <p>{destinations?.PriceOption}</p>
                <li>{destinations?.itinerary}</li>
                <li>{destinations?.itinerary}</li>
                <p>{destinations?.Departure.toDate().toDateString()}</p>
                <p>{destinations?.Return.toDate().toDateString()}</p> */}
            </div>
        </Link>

    )
}

export default DestinationsCard