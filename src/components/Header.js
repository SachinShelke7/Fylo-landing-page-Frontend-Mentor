import React from "react";
import { ReactComponent as Logo }  from '../images/logo.svg';
function Header() {
  return (
    <nav className="flex justify-between items-center p-4 lg:p-10">
      <div>
      <Logo />
      </div>
      <div className="flex space-x-4 font-medium text-lg">
        <div className="link">Features</div>
        <div className="link">Team</div>
        <div className="link">Sign In</div>
      </div>


    </nav>
  );
}

export default Header;
