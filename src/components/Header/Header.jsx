import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="bg-gray-100 p-4">
            <div className="flex gap-4"> {/* Flexbox with gap between links */}
                <Link to="/" className="text-blue-500 hover:underline">Home</Link>
                <Link to="about" className="text-blue-500 hover:underline">About</Link>
                <Link to="contact" className="text-blue-500 hover:underline">Contact Us</Link>
                <Link to="service" className="text-blue-500 hover:underline">Service</Link>
            </div>
            </nav>
        </div>
    );
};

export default Header;
