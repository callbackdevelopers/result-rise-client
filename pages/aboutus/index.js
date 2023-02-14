import OurTeam from "../../components/AboutUS/OurTeam";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbars/Navbar";

function index() {
    return (
        <div>
            <Navbar></Navbar>
            <OurTeam></OurTeam>
            <Footer />
        </div>
    );
}

export default index;