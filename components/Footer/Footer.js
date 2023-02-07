import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMobile
} from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer >
      <div className="pt-10 pb-5 text-white bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
        <div className="footer justify-around  container mx-auto">
          <div>
            <a className="font-bold cursor-pointer select-none md:text-4xl text-xl no-animation"> ResultRise </a>
            <p className="w-96 mt-3 leading-6">It can also refer to a specific answer or output produced by a calculation or experiment. and it is often used to measure the success or effectiveness of that effort or activity.</p>
          </div>
          <div>
            <span className="footer-title text-white">SUPPORT</span>
            <Link href="https://www.facebook.com" className="link link-hover">
              Teachers
            </Link>
            <Link href="https://www.facebook.com" className="link link-hover">
              Students
            </Link>
            <Link href="https://www.facebook.com" className="link link-hover">
              Dashboard
            </Link>
            <Link href="https://www.facebook.com" className="link link-hover">
              Exam Officers
            </Link>
          </div>
          <div>
            <span className="footer-title">ABOUT US</span>
            <Link href="https://www.likedin.com" className="link link-hover">
              About Pearson
            </Link>
            <Link href="https://www.likedin.com" className="link link-hover">
              News, media and policy
            </Link>
            <Link href="https://www.likedin.com" className="link link-hover">
              Become an examiner
            </Link>
            <Link href="https://www.likedin.com" className="link link-hover">
              Edexcel
            </Link>
          </div>
          <div>
            <div>
              <span className="footer-title">Contact Us</span>
              <Link href="https://www.google.com" className="link link-hover">
                <ul className="mt-4">
                  <li className="flex gap-2 items-center my-2">
                    <GoLocation className="  text-blue-400 " size="18px" />
                    <div>
                      <p> <span className="font-bold">Address: </span>banani, dhaka b/1200</p>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li className="flex gap-2 items-center my-2">
                    <AiOutlineMobile className="  text-blue-400 " size="18px" />
                    <div>
                      <p> <span className="font-bold">Mobile: </span> +880 1726427834</p>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li className="flex gap-2 items-center">
                    <AiOutlineMail className="  text-blue-400 " size="18px" />
                    <div>
                      <p> <span className="font-bold">Email: </span> callback.developers@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </Link>
            </div>
            <div className="mt-3">
              <ul className="flex gap-2">
                <Link href="https://www.facebook.comk">
                  <CiFacebook
                    className="text-blue-400 mb-2 hover:text-white rounded-full"
                    size="27px"
                  />
                </Link>
                <Link href="https://www.facebook.comk">
                  <AiOutlineLinkedin
                    className="text-blue-400 mb-2 hover:text-white "
                    size="27px"
                  />
                </Link>
                <Link href="https://www.facebook.comk">
                  <AiFillTwitterCircle
                    className="text-blue-400 mb-2 hover:bg-blue-400 hover:text-white rounded-full"
                    size="27px"
                  />
                </Link>
                <Link href="https://www.facebook.comk">
                  <AiOutlineInstagram
                    className="text-blue-400 mb-2  hover:text-white rounded-badge"
                    size="27px"
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="text-center mt-5">
          <span className="text-center ">&copy; ResultRise Team 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;