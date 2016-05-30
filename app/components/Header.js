import React, { PropTypes, Component }  from 'react';
const Header = ({header})=>
    <header>
        <nav id="main-nav">
            <div className="brand">{header.title}</div>
            <ul>
                {header.items.map((item, i)=>
                    <li key={i}>{item}</li>
                )}
            </ul>
        </nav>
    </header>

export default Header
