import SideNavbar from "./SideNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
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
              className="menu menu-compact text-gray-800 bg-slate-200 dropdown-content mt-2 p-2 ml-0 rounded-b-md shadow w-36"
            >
              <li>
              <a className="text-base hover:text-white font-semibold hover:bg-gray-800">Home</a>
            </li>
            <li>
              <a className="text-base hover:text-white font-semibold hover:bg-gray-800">About</a>
            </li>
            <li>
              <a className="text-base hover:text-white font-semibold hover:bg-gray-800">Blog</a>
            </li>
            <li>
              <a className="text-base hover:text-white font-semibold hover:bg-gray-800">Contact</a>
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-gray-800 normal-case text-2xl text-white">Result-Rise</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1">
            <li>
              <a className="hover:bg-gray-800">Home</a>
            </li>
            <li>
              <a className="hover:bg-gray-800">About</a>
            </li>
            <li>
              <a className="hover:bg-gray-800">Blog</a>
            </li>
            <li>
              <a className="hover:bg-gray-800">Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <SideNavbar></SideNavbar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
