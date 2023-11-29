import { Link } from "react-router-dom";
import companyLogo from "../../../../public/company-logo.png";
import { useContext } from "react";
import { AuthProvider } from "../../../Providers/Provider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthProvider);

  const handleLogOut = () => {
    logOut();
  };
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogOut} className="btn btn-error">
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar z-10 opacity-90  fixed bg-yellow-300 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={companyLogo} alt="logo" />
          </div>
          <ul className="items-center font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {nav}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={companyLogo}
            alt="logo"
            className="h-14 w-14 rounded-full"
          />
          <h3 className=" text-xl font-bold ">Delicious !</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="items-center font-bold menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
