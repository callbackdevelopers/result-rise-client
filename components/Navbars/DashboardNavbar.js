import React from "react";
import { useFirebase } from "../../context/UserContext";

const DashboardNavbar = () => {
    const { user } = useFirebase();
    return (
        <div>
            <div className="navbar container mx-auto ">
                <div className="flex-1">
                    <a className="lg:ml-28 normal-case text-xl font-semibold">
                        Hello , {user?.displayName}
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardNavbar;
