import { useState } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturesVideo from "../components/Home/FeaturesVideo";
import Navbar from "../components/Navbars/Navbar";
import Spiner from "../components/Spiner/Spiner";
import { useFirebase } from "../context/UserContext";

export default function Home() {
    const { loading } = useFirebase();
    const [timeOutLoading, setTimeOutLoading] = useState(true);
    setTimeout(() => {
        setTimeOutLoading(false);
    }, 500);
    if (timeOutLoading || loading)
        return (
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen flex justify-center items-center">
                <Spiner color={"#ffff"} />
            </div>
        );
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div className="md:mx-6">
                <Navbar></Navbar>
            </div>
            <HeroSection></HeroSection>
            <FeaturesVideo></FeaturesVideo>
            <ContactForm />
            <Footer />
        </div>
    );
}
