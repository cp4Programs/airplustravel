import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import './tourDetails.css'

import Itinerary from './Itinerary'



function TourDetails() {
    const { tourId } = useParams()
    const [data, setData] = useState('')
    const [more, setMore] = useState(false)

    useEffect(() => {
        const docRef = doc(db, "destinations", tourId)
        getDoc(docRef)
            .then(res => {
                setData(res.data())
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="details-container">
            <div className="banner-container">
                <div className="banner-lh">
                    <img className="tour-img" src={data?.image} />
                </div>
                <div className="banner-rh">
                    <h1>{data?.tour}</h1>
                    <p>Trip Length: {data?.tourLength}</p>
                    <p>Price: ${data?.Price}</p>
                    <div>
                        <p>Departure: {data?.Departure?.toDate().toDateString()}</p>
                        <p>Return: {data?.Return?.toDate().toDateString()}</p>
                    </div>
                </div>
            </div>
            <div className="article">
                <div className="article-lh">
                    <p>Highlights</p>
                    <p>Article</p>
                </div>
                <div className="article-rh">
                    {
                        data?.itinerary?.map(item => {
                            return <Itinerary key={item.id} itinerary={item} />
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default TourDetails

