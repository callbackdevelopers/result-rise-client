import React from 'react';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import ShowNotification from '../components/ShowNotification/ShowNotification';
import Sidebars from '../components/Sidebars/Sidebars';


const Layout = ({ children }) => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <DashboardNavbar />
                    <div className="drawer drawer-end">
                        <input id="notification" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {children}
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="notification" className="drawer-overlay"></label>
                            <div className="menu p-4 w-80 bg-base-100 text-base-content">
                                <ShowNotification />
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebars />
            </div>
        </>
    );
};

export default Layout;


