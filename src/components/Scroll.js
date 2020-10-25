import React from 'react';
import './Scroll.css';

const Scroll = (props) =>{
    return (
    // console.log(props);
        <div className="ScrollAbility">
            {props.children}
        </div>
    );
};

export default Scroll;