
import Sidebar from '../components/Navbars/Sidebar'

const Layout = ({ children }) => {
    return (
        <div>
            <div className='h-screen flex flex-row justify-start'>
                <Sidebar className="fixed" />
                <div className=' flex-1 p-4  '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout