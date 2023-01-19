import React from 'react';

const ButtonUp = ({ children }) => {
    return (
        <button className="relative group px-8  bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-sm  py-3  w-full  text-white
        before:absolute 
        before:inset-0 
        before:bg-blue-700
        before:scale-x-0 
        before:origin-right
        before:transition
        before:duration-300
        hover:before:scale-x-100
        hover:before:origin-left
">
            <span className="relative uppercase text-base text-white">{children}</span>
        </button>
    );
};

export default ButtonUp;