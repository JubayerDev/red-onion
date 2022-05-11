import React, { useEffect, useState } from 'react';
import './Breakfast.css'
import SingleBreakfast from './SingleBreakfast';

const Breakfast = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    },[])
    return (
        <div className='foods-container'>
            {
                breakfasts.map(breakfast => <SingleBreakfast key={breakfast.id} breakfast={ breakfast}/>)
            }
        </div>
    );
};

export default Breakfast;