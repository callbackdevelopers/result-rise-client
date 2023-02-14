import Link from "next/link";
import React from "react";
import {
    AiFillTwitterCircle,
    AiOutlineInstagram,
    AiOutlineLinkedin
} from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

const TeamCard = ({ card }) => {
    const { name, title, image, description, icon, linkedin, bgClass } = card;
    return (
        <div className={`card text-white w-80 xl:w-96 md:card-side shadow-xl ${bgClass}`}>
            <div className="w-full">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-full w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center pt-0">
                    <h2 className="card-title mt-5">{name}</h2>
                    <i className="text-lg text-blue-500">{title}</i>
                    <p>{description}</p>

                    <div className="mt-3">
                        <ul className="flex gap-2">
                            <a href={icon}>
                                <CiFacebook
                                    className="font-bold hover:text-blue-400 rounded-full"
                                    size="27px"
                                />
                            </a>
                            <a href={linkedin}>
                                <AiOutlineLinkedin
                                    className="hover:text-blue-400 "
                                    size="27px"
                                />
                            </a>
                            <Link href="https://www.facebook.comk">
                                <AiFillTwitterCircle
                                    className="hover:bg-blue-400 hover:text-white rounded-full"
                                    size="27px"
                                />
                            </Link>
                            <Link href="https://www.facebook.comk">
                                <AiOutlineInstagram
                                    className="hover:text-blue-400 rounded-badge"
                                    size="27px"
                                />
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamCard;