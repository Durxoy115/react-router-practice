import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ser from '../Ser/Ser';

const Service = () => {
    const service = useLoaderData();

    return (
        <div className="bg-gray-100 p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Our Services: {service.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.map((ser) => (
                    <Ser key={ser.id} ser={ser} />
                ))}
            </div>
        </div>
    );
};

export default Service;
