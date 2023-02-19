import React from "react";
import lottie2 from "../../public/Lottie/contact-mail.json";
import lottie5 from "../../public/Lottie/lottie2.json";
import lottie1 from "../../public/Lottie/shopping-cart.json";
import lottie4 from "../../public/Lottie/website-design.json";
import Card from "./Card";

const cardsData = [
    {
        id: 1,
        title: "Is it safe to make a purchase on your website ?",
        body: "Yes, it is safe to make a purchase on our website. We use secure payment gateways to process all transactions and protect your personal information.",
        img: lottie1,
        bg: "bg-yellow-400",
        end: true,
    },
    {
        id: 2,
        title: "Do you offer international shipping?",
        body: "Yes, we offer international shipping to select countries. Please contact us for more information on shipping options and costs.",
        title: "Do you offer international shipping?",
        body: "Yes, we offer international shipping to select countries. Please contact us for more information on shipping options and costs.",
        img: lottie2,
        bg: "bg-green-400",
    },
    {
        id: 3,
        title: "Do you offer international shipping?",
        body: "Yes, we offer international shipping to select countries. Please contact us for more information on shipping options and costs.",
        title: "Do you offer international shipping?",
        body: "Yes, we offer international shipping to select countries. Please contact us for more information on shipping options and costs.",
        img: lottie2,
        bg: "bg-blue-400",
    },
    {
        id: 4,
        title: "What is your return policy?",
        body: "We have a 30-day return policy for all books. If you are not satisfied with your purchase, you may return the book within 30 days for a full refund.",
        title: "What is your return policy?",
        body: "We have a 30-day return policy for all books. If you are not satisfied with your purchase, you may return the book within 30 days for a full refund.",
        img: lottie4,
        bg: "bg-red-400",
    },
    {
        id: 5,
        title: "Who do I contact if I have more questions?",
        body: "If you have any questions or concerns, Our team is available to assist you during business hours.",
        title: "Who do I contact if I have more questions?",
        body: "If you have any questions or concerns, Our team is available to assist you during business hours.",
        img: lottie5,
        bg: "bg-purple-400",

    },
];


const Cards = () => {
    return (
        <div className="mt-10">
            <div className="space-y-10  px-5 md:px-0 md:w-[800px]  lg:w-[1000px] mx-auto  ">
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
