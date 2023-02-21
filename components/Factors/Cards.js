import React from "react";
import data from "../../public/Lottie/data.json";
import lottie2 from "../../public/Lottie/lottie2.json";
import mutD from "../../public/Lottie/mutD.json";
import per from "../../public/Lottie/per.json";
import Card from "./Card";


const cardsData = [
    {
        id: 1,
        fs: "Personalization",
        title: "What is Personalization ?",
        body: " Personalization is becoming increasingly important for modern result-generating websites. The ability to personalize search results, ",
        img: per,
        bg: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    },
    {
        id: 2,
        fs: "Real-time data processing",
        title: "Why Real-time data processing need?",
        body: "The ability to process and generate results in real-time, providing users with up-to-date information as soon as it becomes available.",
        img: data,
        bg: "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500",
    },
    {
        id: 3,
        fs: "Multi-device compatibility",
        title: "Multi-device compatibility ?",
        body: "The website should be optimized for various devices, such as laptops, tablets, and smartphones, to make it accessible for students at all times",
        img: mutD,
        bg: "bg-gradient-to-r from-green-200 to-green-500",
    },
    {
        id: 5,
        fs: "Get Results",
        title: "Result Management System",
        body: "Student, Subject, Teacher, Semester, Result and Class from this project. The main objective to develop Result Management System",

        img: lottie2,
        bg: "bg-gradient-to-r from-rose-300 to-rose-500",

    },
];
const Cards = () => {
    return (
        <div className="mt-10">
            <div className="space-y-10  px-5 md:px-0 md:w-[800px]  lg:w-[1000px] mx-auto">
                {cardsData.map((card, index) => (
                    <Card
                        key={card.id} data={card}>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
