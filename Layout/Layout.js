
import DashboardNavbar from '../components/Navbars/DashboardNavbar'
import Sidebar from '../components/Navbars/Sidebar'

const Layout = ({ children }) => {
    return (
        <div>
            <div className='h-screen flex flex-row justify-start'>

                <Sidebar />
                <div className=' flex-1 p-4  '>
                    <DashboardNavbar />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout