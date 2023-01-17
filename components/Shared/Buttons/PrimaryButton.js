import React from 'react';

const ButtonArrow = ({ children, w, h }) => {
    // console.log(button);
    return (
        <button className={`relative group overflow-hidden px-4 rounded-full flex space-x-2 w-${w} h-${h}
        items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black hover:to-blue-700`}>
            <span className="relative text-sm font-bold text-white">{children}</span>
            <div className="flex items-center -space-x-3 translate-x-3">
                <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </button>
    );
};

export default ButtonArrow;