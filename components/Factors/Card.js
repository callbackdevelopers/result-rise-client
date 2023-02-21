import Lottie from "lottie-react";
import React from "react";

const Card = ({ data, stickyTopSpace }) => {
    const { title, body, img, bg, fs } = data;
    // console.log(stickyTopSpace);

    if (data.id === 1) {
        stickyTopSpace = 150;
    } else if (data.id === 2) {
        stickyTopSpace = 200;
    } else if (data.id === 3) {
        stickyTopSpace = 250;
    } else if (data.id === 4) {
        stickyTopSpace = 300;
    } else if (data.id === 5) {
        stickyTopSpace = 350;
    }
    return (
        <div
            className={`sticky shadow-md rounded-md  `} style={{ top: stickyTopSpace }}>
            <div className='flex justify-between  h-[350px]'>
                <div className={`${bg} px-5 rounded-l-xl w-full`} >
                    <p className=" my-4 text-center md:text-left px-4 uppercase">{fs}</p>
                    <div className="flex flex-col  justify-center h-48 pl-4 text-2xl w-full ">
                        <h2 className="font-serif font-bold my-5 uppercase">{title}</h2>
                        <p className="w-11/12 text-lg pl-4">{body}</p>
                    </div>
                </div>
                <div className="">
                    <div className=" bg-white hidden md:block rounded-r-xl ">
                        <Lottie className=" h-[350px] w-72" animationData={img} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
