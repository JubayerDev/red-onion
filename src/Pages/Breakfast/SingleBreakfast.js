import React, { createContext } from 'react';
import './SingleBreakfast.css';


export const IdContext = createContext('id')

const SingleBreakfast = ({ breakfast }) => {
    const { name, desc, img, price, id } = breakfast;
    return (
        <IdContext.Provider value={id}>
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
        </IdContext.Provider>
    );
};

export default SingleBreakfast;