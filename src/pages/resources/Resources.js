import React, { useState, useEffect } from 'react'
import { storage } from '../../config/firebaseConfig'
import { ref, getDownloadURL, listAll } from 'firebase/storage'

function Resources() {

    const [images, setImages] = useState([])

    useEffect(() => {

        const imageStorageRef = ref(storage, `images/`)


        listAll(imageStorageRef)
            .then(res => {
                res?.items?.map(img => {

                })
            })
            .catch(err => console.log(err))

    }, [])


    return (

        <div>Resources</div>
    )
}

export default Resources

 // res?.items?.forEach(images => {
                //     let imagesRef = images.fullPath
                //     console.log(imagesRef)
                // })
                // return imagesRef