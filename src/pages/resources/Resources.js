import React, { useState, useEffect } from 'react'
import { storage } from '../../config/firebaseConfig'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import './resources.css'
import ImageOption from './ImageOption'

function Resources() {

    const [imagesFolder, setImagesFolder] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        const imageStorageRef = ref(storage, `images/`)
        listAll(imageStorageRef)
            .then((res) => {
                res?.items?.forEach((itemRef) => {
                    getDownloadURL(itemRef)
                        .then(urls => {
                            setImagesFolder(prev => [...prev, urls])
                        })
                })
            })
            .catch(err => console.log(err))

    }, [])


    return (

        <div className="images-bucket">
            {
                imagesFolder && imagesFolder?.map(item => {
                    return <ImageOption resourceImage={item} />


                })
            }
        </div>
    )
}

export default Resources

