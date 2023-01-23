import Link from "next/link";
import React from "react";
import { useFirebase } from "../../context/UserContext";
import AlertMessage from "../../Hooks/AlertMessage";
import BodyTamplate from "../Shared/BodyTamplate";
import ButtonUp from "../Shared/Buttons/SecondaryButton";

const Navbar = () => {
    const { successMessage } = AlertMessage();
    const { user, logout } = useFirebase();
    const heandelLogout = () => {
        logout().then((re) => {
            successMessage("logout success");
        });
    };
    const menuItems = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/whyUs">Why Us</Link>
            </li>
            <li>
                <Link href="/">About Us</Link>
            </li>
        </>
    );
    return (
        <div className="shadow-md bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
            <BodyTamplate>
                <div className="navbar  text-white pt-5 ">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-box w-52"
                            >
                                {menuItems}
                            </ul>
                        </div>
                        <a className="font-bold cursor-pointer select-none md:text-4xl text-xl no-animation">
                            ResultRise
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user?.uid ? (
                            <div className="dropdown dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-box w-52"
                                >
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li >
                                        <a><Link href='/dashboard/Student/StudentProfile'>Dashboard
                                        </Link> </a>
                                    </li>
                                    <li>
                                        <a onClick={() => heandelLogout()}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link className="" href="/user/register">
                                <ButtonUp>Register</ButtonUp>
                            </Link>
                        )}
                    </div>
                </div>
            </BodyTamplate>
        </div>
    );
};

export default Navbar;
