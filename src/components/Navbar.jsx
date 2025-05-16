import { NavLink } from "react-router-dom";
import logo from "../assets/website_icon.png";
import hamburger from "../assets/menu_icon.png";
import closeIcon from "../assets/close.png";
import { useState } from "react";

const Navbar = () => {
  // Make sidebar responsive for mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile/Tablet Nav */}
      <div>
        {/* Hamburger icon to open sidebar nav for mobile and tablet */}
        <img
          src={hamburger}
          className="w-8 h-8 top-0 absolute ml-5 mt-5 lg:hidden"
          onClick={() => setIsOpen(true)}
        />

        {/* Overlay with navigation links*/}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Sidebar itself */}
            <div className="fixed left-0 top-0 h-full w-60 bg-white shadow-lg z-50">
              {/* Close icon */}
              <button
                className="p-4 mt-4 ml-4"
                onClick={() => setIsOpen(false)}
              >
                <img src={closeIcon} className="w-4 h-4" />
              </button>

              <div className="flex flex-col space-y-8 ml-8 mt-4 font-montserrat text-xl">
                {/* Navlinks */}
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/staff">Staff</NavLink>
                <NavLink to="/tickets">Tickets</NavLink>
                <NavLink to="/requests">Submit Request</NavLink>
                <NavLink to="/todos">To Do List</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop sidebar nav */}
      <div className="hidden lg:flex flex-col w-4xs h-full bg-white pt-8 pl-6 left-0 top-0">
        <div className="flex flex-row mb-12 text-center">
          <img src={logo} alt="Logo" className="w-14 ml-6" />
          <h1 className="text-lg text-black w-36 font-red-hat">
            {" "}
            Internal Team Dashboard{" "}
          </h1>
        </div>
        <nav className="text-center font-montserrat">
          <NavLink
            to="/dashboard"
            className="block mb-6 [&.active]:bg-light-grey [&.active]:w-50 [&.active]:font-extrabold [&.active]:rounded-md [&.active]:py-2"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/staff"
            className="block mb-6 [&.active]:bg-light-grey [&.active]:w-50 [&.active]:font-extrabold [&.active]:rounded-md [&.active]:py-2"
          >
            Staff
          </NavLink>
          <NavLink
            to="/tickets"
            className="block mb-6 [&.active]:bg-light-grey [&.active]:w-50 [&.active]:font-extrabold [&.active]:rounded-md [&.active]:py-2"
          >
            Tickets
          </NavLink>
          <NavLink
            to="/requests"
            className="block mb-6 [&.active]:bg-light-grey [&.active]:w-50 [&.active]:font-extrabold [&.active]:rounded-md [&.active]:py-2"
          >
            Submit Request
          </NavLink>
          <NavLink
            to="/todos"
            className="block mb-6 [&.active]:bg-light-grey [&.active]:w-50 [&.active]:font-extrabold [&.active]:rounded-md [&.active]:py-2"
          >
            To Do List
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
