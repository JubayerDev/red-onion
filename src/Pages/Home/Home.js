import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-childrens">
                <h1>Best Food Waiting For Your Belly</h1>
                <input type="search" name="search" id="search" placeholder='Search Food Items' />
                <button className="search-btn">Search</button>
            </div>
        </div>
    );
};

export default Home;