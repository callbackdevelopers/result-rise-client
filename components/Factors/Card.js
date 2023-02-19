import Lottie from "lottie-react";
import React from "react";

const Card = ({ data, stickyTopSpace }) => {
    const { title, body, img, bg } = data;
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
            className={`sticky shadow-md `}
            style={{ top: stickyTopSpace }}

        >
            <div className="flex justify-between rounded-xl ">
                <div className={`${bg} px-5`}>
                    <div className="">
                        <p className=" my-4 text-center">Some Feature</p>
                        <h2 className="font-serif font-bold">{title}</h2>
                        <p className="lg:w-3/4 text-lg">{body}</p>
                    </div>
                </div>
                <div className="">
                    <div className=" bg-white hidden md:block ">
                        <Lottie className=" h-72 w-72" animationData={img} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
