import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allAssingment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          All Assingment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myAssingment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Assingment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/createAssingment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Create Assingment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <div className="dropdown dropdown-end relative bottom-3 left-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 relative top-14"
          >
            <li>
              <Link className="justify-between">Name:</Link>
            </li>

            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto mt-4">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="text-xl font-semibold mb-8">
          {/*  <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://i.ibb.co/zRBYL2V/study-logo.png" />
              
            </div>
            
          </div> */}
          <h3>StudyMates</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
