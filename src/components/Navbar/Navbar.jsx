
// import { Link, NavLink } from "react-router-dom";
// import logo from '../../assets/booking-logo.png';
// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext/AuthContext";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         toast.success("Successfully signed out!");
//       })
//       .catch((error) => {
//         toast.error("Failed to sign out. Please try again.");
//       });
//   };


//   const links = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-yellow-400 border-b-2 " : "text-blue-500"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/rooms"
//           className={({ isActive }) =>
//             isActive ? "text-yellow-400 border-b-2 " : "text-blue-500"
//           }
//         >
//           Rooms
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/my-bookings"
//           className={({ isActive }) =>
//             isActive ? "text-yellow-400 border-b-2 " : "text-blue-500"
//           }
//         >
//           My Booking
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar bg-gray-300">
//       <div className="navbar-start flex items-center gap-2">
//         <div className="dropdown">
//           <div
//             tabIndex={0}
//             role="button"
//             aria-label="Menu"
//             className="btn btn-ghost lg:hidden"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5"
//           >
//             {links}
//           </ul>
//         </div>

//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="h-8 w-auto" />
//           <h3 className="md:text-2xl font-bold">Hotel Booking</h3>
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex gap-5">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       <div className="navbar-end">
//         {user ? (
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               {user.photoURL && (
//                 <img
//                   src={user.photoURL}
//                   alt="User Avatar"
//                   className="w-8 h-8 rounded-full"
//                 />
//               )}
//               <span>{user.displayName || "User"}</span>
//             </div>
//             <button onClick={handleSignOut} className="btn text-blue-500">
//               Log Out
//             </button>
//           </div>
//         ) : (
        
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive ? "text-yellow-400 border-b-2" : "text-blue-500"
//             }
//           >
//             <button className="btn bg-blue-500">Sign in</button>
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/booking-logo.png";
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
      .catch(() => {
        toast.error("Failed to sign out. Please try again.");
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-200 hover:text-yellow-400 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-200 hover:text-yellow-400 transition"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-200 hover:text-yellow-400 transition"
          }
        >
          My Booking
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
            <ul className="dropdown-content absolute bg-blue-800 text-white rounded-md mt-2 p-3 w-40 space-y-2">
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10" />
            <h3 className="text-white text-xl font-bold">Hotel Booking</h3>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6">
          <ul className="flex space-x-6">{links}</ul>
        </div>

        {/* User Profile & Authentication */}
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                )}
                <span className="text-white">{user.displayName || "User"}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
              >
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                Sign in
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

