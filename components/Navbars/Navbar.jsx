import Link from 'next/link'
import React from 'react'
import BodyTamplate from '../Shared/BodyTamplate'

const Navbar = () => {

    const menuItems = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/whyUs">Why Us</Link></li>
        <li><Link href="/">Results</Link></li>
    </>

    return (
        <BodyTamplate>
            <div className="navbar  text-white pt-5 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="font-bold cursor-pointer select-none md:text-4xl text-xl no-animation">Result-Rise</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn hover:bg-white no-animation   bg-white text-black border-none rounded-none">Join Now</a>
                </div>
            </div>
        </BodyTamplate>
    )
}

export default Navbar