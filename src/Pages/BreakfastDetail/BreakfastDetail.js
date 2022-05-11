import React from 'react';
import { Outlet } from 'react-router-dom';


const BreakfastDetail = () => {
    
    return (
        <div>
            <h1>Breakfast</h1>
            <Outlet />
        </div>
        
    );
};

export default BreakfastDetail;