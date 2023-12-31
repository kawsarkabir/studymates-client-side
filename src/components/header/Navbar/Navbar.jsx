import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "Successfully logout!", "success");
      })
      .catch(() => {});
  };
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
          to="/submitedAssingment"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Submited Assingment
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
        {user ? (
          <>
            <div className="dropdown dropdown-end relative bottom-4 left-3">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 relative top-14"
              >
                <li>
                  <Link className="justify-between">
                    Name: {user?.displayName}
                  </Link>
                </li>

                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to={"/signin"}>
            <button className="btn btn-outline btn-sm lg:relative lg:bottom-2">Login</button>
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
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
        <Link to={"/"} className="relative bottom-3">
          <img src="https://i.ibb.co/6vMPTLn/1.png" className="w-24" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
