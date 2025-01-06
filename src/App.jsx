import React from 'react';
import Header from "./components/Header/Header";

import Footer from './components/Footer/Footer';

const App = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className="flex-grow">{children}</main> {/* Main content */}
            <Footer />
        </div>
    );
};

export default App;
