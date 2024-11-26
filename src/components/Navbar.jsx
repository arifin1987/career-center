import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/statistics", name: "Statistics" },
    { id: 3, path: "/appliedJobs", name: "Applied Jobs" },
    { id: 4, path: "/blog", name: "Blog" },
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
        {open ? <IoCloseSharp /> : <IoIosMenu />}
      </div>

      <ul
        className={`md:flex  absolute duration-500 md:static bg-green-200 p-4 ${
          open ? "top-8" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <NavLink
            className="mr-6 flex flex-col hover:bg-green-400 hover:px-2"
            key={route.id}
            to={route.path}
          >
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
