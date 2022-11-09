import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logot.png";
import { AuthContext } from "../../Pages/Authentication/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error));
  }

    const menuItems = <>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/service'>Services</Link></li>
        {
              user?.email?
              <li onClick ={handleLogOut}><Link>Log Out</Link></li>
              : <li><Link to = '/login'>LogIn</Link></li>
        }
        
    </>
  return (
    <div className="navbar bg-white border-b-8 border-b-cyan-400 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hover:bg-cyan-100 hover:text-sky-600"
          >
            {menuItems}
          </ul>
        </div>
        <img src={logo} alt="" className="w-14 rounded-3xl" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 hover:bg-cyan-100 hover:text-sky-600">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a href=" " className="btn hover:bg-orange-500 bg-cyan-500 border-0 text-white">
          Get started
        </a>
      </div>
    </div>
  );
};

export default Header;
