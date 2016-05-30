import React, { PropTypes, Component }  from 'react';
import ThumbnailGroup from './ThumbnailGroup';
const Section = ({section})=>
    <section id={section.key}>
        <header><span>{section.header}</span></header>
        {section.content && <div className="content"><span>{typeof section.content === 'string' ? section.content :
            <ThumbnailGroup thumbnails={section.content}/>}</span></div>}
        {section.button && <div className="button-container"><span><button>{section.button}</button></span></div>}
    </section>

export default Section
