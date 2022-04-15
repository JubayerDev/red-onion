import React, { useEffect, useState } from 'react';
import Lunch from '../Lunch/Lunch';
import './Lunchs.css'

const Lunchs = () => {
    const [lunchs, setLunchs] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunchs(data))
    },[])
    return (
        <div className='foods-container'>
            {
                lunchs.map(lunch => <Lunch key={lunch.id} lunch={ lunch}/>)
            }
        </div>
    );
};

export default Lunchs;