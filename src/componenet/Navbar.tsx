import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:'flex' ,alignItems:"space-between"}}>
      <span className="logo">PCART</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
      
      </div>
    </div>
  );
}

export default Navbar;
