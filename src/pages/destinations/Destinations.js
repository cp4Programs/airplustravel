import React, { useEffect, useState } from 'react'
import './destinations.css'
import { db } from '../../config/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'
import DestinationsCard from './DestinationsCard'

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
                    page && page?.map((item) => {
                        return <DestinationsCard key={item.idKey} destinations={item} />

                    })
                }
            </div>
        </div >
    )
}

export default Destinations