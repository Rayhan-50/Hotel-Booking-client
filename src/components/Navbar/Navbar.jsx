

// import { Link, NavLink } from "react-router-dom";
// import logo from '../../assets/booking-logo.png';
// import { useContext } from "react";
// import AuthContext from "../../context/AuthContext/AuthContext";

// const Navbar = () => {
//   const { user, signOutUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         console.log("successful sign out");
//       })
//       .catch((error) => {
//         console.log("failed to sign out", error);
//       });
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/rooms">Rooms</NavLink>
//       </li>
//       <li>
//         <NavLink to="/my-bookings">My Booking</NavLink>
//       </li>
      
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100">
//       <div className="navbar-start flex items-center gap-2">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>

//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="h-8 w-auto" />
//           <h3 className="md:text-2xl font-bold">Hotel Booking</h3>
//         </Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       <div className="navbar-end">
//         {user ? (
//           <>
//             <button onClick={handleSignOut} className="btn">
//               Log Out
//             </button>
//           </>
//         ) : (
//           <>
            
//             <Link to="/login">
//               <button className="btn">Sign in</button>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/booking-logo.png';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 " : " text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 " : " text-primary"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 " : " text-primary"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <h3 className="md:text-2xl font-bold">Hotel Booking</h3>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
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
            <button onClick={handleSignOut} className="btn btn-primary">
              Log Out
            </button>
          </div>
        ) : (
          // <Link to="/login">
          //   <button className="btn">Sign in</button>
          // </Link>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 border-b-2" : "text-primary"
            }
          >
            <button className="btn btn-primary">Sign in</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
