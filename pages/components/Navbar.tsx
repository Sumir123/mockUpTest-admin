import { GrLogin } from "react-icons/gr";
// import { GrLogout } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>
      <div className="options">
        <button className="button">
          Log In <GrLogin />
          {/* Log Out <GrLogout /> */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
