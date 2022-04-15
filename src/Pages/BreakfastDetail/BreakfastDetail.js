import React, { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { IdContext } from '../Breakfast/SingleBreakfast';


const BreakfastDetail = () => {
    const id = useContext(IdContext)
    console.log(id);
    const params = useParams();
    return (
        <div>
            <h1>Breakfast</h1>
            <Outlet />
        </div>
        
    );
};

export default BreakfastDetail;