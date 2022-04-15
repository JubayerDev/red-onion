import React from 'react';

const Dinner = ({ dinner }) => {
    const { img, name, desc, price } = dinner;
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

export default Dinner;