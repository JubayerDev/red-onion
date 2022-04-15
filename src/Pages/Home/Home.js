import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/Customlink';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className="home-childrens">
                    <h1>Best Food Waiting For Your Belly</h1>
                    <input type="search" name="search" id="search" placeholder='Search Food Items' />
                    <button className="search-btn">Search</button>
                </div>
            </div>

            <div className="food-options">
                <CustomLink to='/breakfast'>Breakfast</CustomLink>
                <CustomLink to='/lunch'>Lunch</CustomLink>
                <CustomLink to='/dinner'>Dinner</CustomLink>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;