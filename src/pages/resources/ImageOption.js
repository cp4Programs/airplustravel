import React, { useState } from 'react'
import './resources.css'

function ImageOption({ resourceImage }) {



    const [showOptions, setShowOptions] = useState(true);
    const handleImageClick = () => {
        setShowOptions(!showOptions)
    }


    return <div className="option-container">
        <img onClick={handleImageClick} key={resourceImage.idKey} className="img-style" src={resourceImage} />
        {
            !showOptions ?
                <div className="option-list">Set Image</div>
                : null
        }
    </div>


}

export default ImageOption