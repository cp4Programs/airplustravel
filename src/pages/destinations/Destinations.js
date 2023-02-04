import React, { useEffect, useState } from 'react'
import './destinations.css'
import { db } from '../../config/firebaseConfig'
import { getDocs, collection, Timestamp } from 'firebase/firestore'

function Destinations() {

    const [page, setPage] = useState('')

    useEffect(() => {
        const docRef = collection(db, "destinations")
        getDocs(docRef)
            .then(res => {
                const destinations = res.docs.map(item => ({
                    idKey: item.id,
                    ...item.data()
                }))
                setPage(destinations)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(page)
    return (
        <div className="destinations-container">
            <div className="destination-card-container">
                {

                    page && page?.map(item => {
                        return <div key={item.idKey} className="destinations-card">
                            <p>{item?.tour}</p>
                            <p>{item?.Price}</p>
                            <p>{item?.tourOption}</p>
                            <p>{item?.PriceOption}</p>
                            <p>{item?.Departure.toDate().toDateString()}</p>
                            <p>{item?.Return.toDate().toDateString()}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Destinations