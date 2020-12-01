import React, { useEffect, useState } from 'react';
import NextPage from '../../../util/navigator/NextPage';
import PreviousPage from '../../../util/navigator/PreviousPage';
import { imageList } from '../../../util/util';
import './ImageSlider.scss';

const ImageSlider = () => {

    const [imgID, setImgID] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    });

    const handleNext = () => {
        if (imgID === imageList.length - 1)
            setImgID(0);
        else
            setImgID(imgID + 1);
    }
    const handlePrevious = () => {
        if (imgID === 0)
            setImgID(imageList.length - 1);
        else
            setImgID(imgID - 1);
    }

    const getImageSlider = () => {
        return <img src={imageList[imgID].url} alt={`slider-img-${imgID}`} className="image-slider-item" onClick={()=>console.log("Clicked")} style={{cursor:"pointer"}}/>
    }

    return (
        <div className="image-slider-container">
            <PreviousPage handlePrevious={handlePrevious} />
            {getImageSlider()}
            <NextPage handleNext={handleNext} />
        </div>
    );
}

export default ImageSlider;