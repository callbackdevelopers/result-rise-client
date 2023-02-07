import Link from "next/link";
import { GoLocation } from "react-icons/go";
import { CiFacebook } from "react-icons/ci";
import {
  AiOutlineMobile,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" p-10 bg-black text-white">
      <footer className="footer">
        <div>
          <span className="footer-title">Contact Info</span>
          <Link href="https://www.google.com" className="link link-hover">
            <ul>
              <li className="flex gap-2 items-center my-2">
                <GoLocation className="  text-blue-400 " size="30px" />
                <div>
                  <span>Address</span>
                  <p>banani, dhaka b/1200</p>
                </div>
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 items-center my-2">
                <AiOutlineMobile className="  text-blue-400 " size="30px" />
                <div>
                  <span>mobile</span>
                  <p>+880 173 943-323</p>
                </div>
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 items-center">
                <AiOutlineMail className="  text-blue-400 " size="30px" />
                <div>
                  <span>email</span>
                  <p>callbackdev@gmail.com</p>
                </div>
              </li>
            </ul>
          </Link>
        </div>
        <div>
          <span className="footer-title">Pages</span>
          <Link href="https://www.facebook.com" className="link link-hover">
            About us
          </Link>
          <Link href="https://www.facebook.com" className="link link-hover">
            Contact
          </Link>
          <Link href="https://www.facebook.com" className="link link-hover">
            Dashboard
          </Link>
          <Link href="https://www.facebook.com" className="link link-hover">
            Home
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link href="https://www.likedin.com" className="link link-hover">
            Terms of use
          </Link>
          <Link href="https://www.likedin.com" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="https://www.likedin.com" className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div>
          <span className="footer-title">Follow Us</span>

          <div>
            <ul className="flex gap-2">
              <Link href="https://www.facebook.comk">
                <CiFacebook
                  className="text-blue-400 mb-2 hover:text-white rounded-full"
                  size="30px"
                />
              </Link>
              <Link href="https://www.facebook.comk">
                <AiOutlineLinkedin
                  className="text-blue-400 mb-2 hover:text-white "
                  size="30px"
                />
              </Link>
              <Link href="https://www.facebook.comk">
                <AiFillTwitterCircle
                  className="text-blue-400 mb-2 hover:bg-blue-400 hover:text-white rounded-full"
                  size="30px"
                />
              </Link>
              <Link href="https://www.facebook.comk">
                <AiOutlineInstagram
                  className="text-blue-400 mb-2  hover:text-white rounded-badge"
                  size="30px"
                />
              </Link>
            </ul>
          </div>
        </div>
       
      </footer>
      <div className="text-center">
        <span className="text-center ">&copy; ResultRise Team 2023</span>
      </div>
    </div>
  );
};

export default Footer;
