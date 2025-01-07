import React from 'react';
import { Link } from 'react-router-dom';

const Ser = ({ ser }) => {
    const { id, name, email, username } = ser;

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-300">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <h3 className="text-lg text-gray-600 mb-1">@{username}</h3>
                <p className="text-gray-500">{email}</p>
                {/* Centering the button */}
                <div className="flex justify-center">
                    <Link to = {`/service/${id}`}  className="font-bold text-white bg-green-700 hover:bg-green-400 px-6 py-2 rounded-md w-auto">
                        View More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Ser;
