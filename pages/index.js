import { useEffect, useState } from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ContactForm from "../components/ContactForm/ContactForm";
import Cards from "../components/Factors/Cards";
import Footer from "../components/Footer/Footer";
import FeaturesVideo from "../components/HeroSection/FeaturesVideo";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbars/Navbar";
import Spiner from "../components/Spiner/Spiner";
import { useFirebase } from "../context/UserContext";

export default function Home() {
    const { loading } = useFirebase();
    const [timeOutLoading, setTimeOutLoading] = useState(true);
    setTimeout(() => {
        setTimeOutLoading(false);
    }, 500);

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (timeOutLoading || loading)
        return (
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex justify-center items-center">
                <Spiner color={"#ffff"} />
            </div>
        );
    return (
        <div className="bg-gray-900 ">
            <div className="md:mx-6 trn sticky top-0 z-50 ">
                <Navbar></Navbar>
            </div>
            <div className={` ${scrollPosition > 300 ? "bg-blue-500 " : ""} trn bp-10 h-auto py-10 duration-700`}>
                <HeroSection></HeroSection>
            </div>
            <div className={` ${scrollPosition > 300 && scrollPosition < 2300 ? "bg-blue-500" : "bg-[#02132b]"} trn  pb-20 h-auto py-10 duration-700`}>
                <div className='mt-10'>
                    <h1 className="text-6xl text-center pb-10  font-bold text-purple-50 ">The Factors  <br />
                        Of  Result Rise_</h1>
                    <Cards />
                </div>
            </div>
            <div className={` ${scrollPosition < 2300 ? "bg-blue-500" : "bg-[#02132b]"}   bp-10 h-auto py-10 trn`}>
                <FeaturesVideo />
            </div>
            <ContactForm />
            <Footer />
            <MessengerCustomerChat
                pageId="111854754052829"
                appId="527602612817067"
            />,
        </div>
    );
}
