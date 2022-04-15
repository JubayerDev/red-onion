import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log('loadingl',loading);
    useEffect(() => {
        setLoading(true)
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => {
                setDinners(data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            {
                (loading) ? (<TailSpin width={'100%'} color="#00BFFF" />) : (<div className='foods-container'>
                    {
                        dinners.map(dinner => <Dinner key={dinner.id} dinner={dinner} />)
                    }
                </div>)
            }
        </>
    );
};

export default Dinners;