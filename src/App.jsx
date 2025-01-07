import React from 'react';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom'; // Import Outlet

const App = () => {
    return (
       <div>
   
        <div className="flex flex-col min-h-screen">
            <Header />
            <div>
            <h1 className='font-extrabold text-6xl text-center'>This is the route!!!!!!!</h1>
        </div>
            <main className="flex-grow">
                <Outlet /> {/* Render child routes here */}
            </main>
            <Footer />
        </div>
       </div>
    );
};

export default App;
