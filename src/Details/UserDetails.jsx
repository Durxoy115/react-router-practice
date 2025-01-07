import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, id} = user;
    
    return (
        <div>
            
            <h2 className='text-3xl font-bold text-red-800 text-center'>This is a single user:--- {name} & Id is {id}</h2>
        </div>
    );
};

export default UserDetails;