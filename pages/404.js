import Lottie from "lottie-react";
import { useRouter } from "next/router";
import ButtonUp from "../components/Shared/Buttons/SecondaryButton";
import errorAni from '../public/error.json';

function Error() {
    const router = useRouter()
    return (
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div className=" md:w-4/5 mx-auto pt-20 md:pt-0  text-center h-screen ">
                <Lottie className='max-w-5xl mx-auto ' animationData={errorAni} loop={true} />
                <div className="lg:-mt-28">
                    <p className=' text-red-400'>Page is not Found );</p><br />
                    <p className=' text-white'>The page you are looking for might have been removed <br />
                        had its name changed or is temporarily unavailable.</p>
                    <div
                        onClick={() => router.push('/')}
                        className="pt-8 flex justify-center w-56 mx-auto">
                        {/* custom bottom template used */}
                        <ButtonUp>
                            <span className="text-sm">Go Back to home</span>
                        </ButtonUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Error;