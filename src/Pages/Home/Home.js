import React from 'react';
import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
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

            <div className="food-container">
                <div className="food-options">
                    <Link to='/breakfast'>Breakfast</Link>
                    <Link to='/lunch'>Lunch</Link>
                    <Link to='/dinner'>Dinner</Link>
                </div>
                <Breakfast />
            </div>
        </div>
    );
};

export default Home;