import React from 'react';

const BodyTamplate = ({ children }) => {
    return (
        <div
            className='container px-3 md:px-0 lg:px-12 mx-auto'
        >
            {children}
        </div>
    );
};

export default BodyTamplate;