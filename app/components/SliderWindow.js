import React, { PropTypes, Component }  from 'react';
const SliderWindow = ({images})=>
    <div id="sliderWindow">
        <div id="slider">
            {images.map((image,i) =>
                <img key={i} src={image}/>
            )}
        </div>
    </div>

export default SliderWindow
