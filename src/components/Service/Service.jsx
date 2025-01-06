import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ser from '../Ser/Ser';

const Service = () => {
    const service = useLoaderData()
    return (
        <div>
            <h2>Our service: {service.length}</h2>
            <li>
                this is service 1
                this is service 2
                this is service 3
                this is service 4
            </li>
            <div>
                {
                    service.map(ser => <Ser
                    key= {ser.id}
                    ser = {ser}
                    ></Ser>)
                }
            </div>
        </div>
    );
};

export default Service;