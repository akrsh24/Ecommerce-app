import React, { Component } from 'react';
import ImageSlider from './slider/ImageSlider';

class ContentComponent extends Component {
    render() {
        return (
            <div className="content-container">
                <ImageSlider />
            </div>
        );
    }
}

export default ContentComponent;