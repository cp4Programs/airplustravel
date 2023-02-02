import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebaseConfig'
import { getDocs, collection } from 'firebase/firestore'

function Destinations() {

    const [page, setPage] = useState('')

    useEffect(() => {
        const docRef = collection(db, "destinations")
        getDocs(docRef)
            .then(res => {
                console.log(res)
                const destinations = res.docs.map(item => ({
                    idKey: item.id,
                    ...item.data()
                }))
                console.log(destinations)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>Destinations</div>
    )
}

export default Destinations