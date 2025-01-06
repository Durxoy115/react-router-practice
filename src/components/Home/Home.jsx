import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>This is Home</h1>
            </div>
            <Outlet /> {/* This will render child routes */}
            <Footer></Footer>
        </div>
    );
};

export default Home;
