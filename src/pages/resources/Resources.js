import React, { useState, useEffect } from 'react'
import { storage } from '../../config/firebaseConfig'
import { ref, getDownloadURL, listAll } from 'firebase/storage'
import './resources.css'

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

    console.log(imagesFolder.slice(1, imagesFolder.length))



    return (

        <div className="images-bucket">
            {
                imagesFolder && imagesFolder?.map(item => {
                    return <img key={item.idKey} className="img-style" src={item} />
                })
            }
        </div>
    )
}

export default Resources

