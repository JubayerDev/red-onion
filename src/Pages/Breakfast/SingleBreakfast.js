import React from 'react';
import './SingleBreakfast.css';

const SingleBreakfast = ({ breakfast }) => {
    const { name, desc, img, price } = breakfast;
    return (
        <div>
            <div className='card'>
                <img src={img} alt="" />
                <div className="info">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <h2>${price}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleBreakfast;