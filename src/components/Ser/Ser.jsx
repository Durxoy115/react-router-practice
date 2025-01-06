import React from 'react';

const Ser = ({ser}) => {
    const {title, completed} = ser;
    return (
        <div >
            <h2 className=' bg-slate-500  mr-2 p-3' >{title}</h2>
            {/* <p>Status: {completed}</p> */}
        </div>
    );
};

export default Ser;