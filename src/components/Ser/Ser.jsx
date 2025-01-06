import React from 'react';

const Ser = ({ser}) => {
    const {title, completed} = ser;
    return (
        <div>
            <h2>{title}</h2>
            {/* <p>Status: {completed}</p> */}
        </div>
    );
};

export default Ser;