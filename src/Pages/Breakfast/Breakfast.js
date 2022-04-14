import React, { useEffect, useState } from 'react';
import './Breakfast.css'
import SingleBreakfast from './SingleBreakfast';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    },[])
    return (
        <div className='breakfast-container'>
            {
                breakfasts.map(breakfast => <SingleBreakfast key={breakfast.id} breakfast={ breakfast}/>)
            }
        </div>
    );
};

export default Breakfast;