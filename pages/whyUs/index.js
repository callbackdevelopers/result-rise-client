import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbars/Navbar';
import WhyUs from '../../components/WhyUs/WhyUs';

const index = () => {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div className="md:mx-6">
                <Navbar></Navbar>
            </div>
            <div className="px-5 md:px-20 bg-base-100">
                <WhyUs></WhyUs>

            </div>
            <Footer />
        </div>
    );
};

export default index;