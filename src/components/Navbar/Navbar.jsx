
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/booking-logo.png';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Successfully signed out!");
      })
      .catch((error) => {
        toast.error("Failed to sign out. Please try again.");
      });
  };


  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 " : "text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 " : "text-blue-500"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 " : "text-blue-500"
          }
        >
          My Booking
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Menu"
            className="btn btn-ghost lg:hidden"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <h3 className="md:text-2xl font-bold">Hotel Booking</h3>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-5">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
              )}
              <span>{user.displayName || "User"}</span>
            </div>
            <button onClick={handleSignOut} className="btn text-blue-500">
              Log Out
            </button>
          </div>
        ) : (
        
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 border-b-2" : "text-blue-500"
            }
          >
            <button className="btn bg-blue-500">Sign in</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
