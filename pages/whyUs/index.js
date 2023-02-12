import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbars/Navbar';
import WhyUs from '../../components/WhyUS/WhyUs';

const index = () => {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
            <div className="md:mx-6">
                <Navbar></Navbar>
            </div>
            <WhyUs></WhyUs>
            <Footer />
        </div>
    );
};

export default index;