import React, { useState } from 'react';
import { imageList } from '../../../util/util';
import './ImageSlider.scss';

const ImageSlider = () => {

    const [imgID, setImgID] = useState(0);

    const handleNext = () => {
        setImgID(imgID + 1);
    }
    const handlePrevious = () => {
        setImgID(imgID - 1);
    }

    const getImageSlider = () => {
        return <img src={imageList[imgID].url} alt={`slider-img-${imgID}`} className="image-slider-item" />
    }

    return (
        <div className="image-slider-container">
            {getImageSlider()}
        </div>
    );
}

export default ImageSlider;