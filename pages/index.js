import { useState } from "react";
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
        </div>
    );
}
