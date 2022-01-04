import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

function Footer() {
  return (
    <div className="bg-darkBlue text-white p-10 space-y-5 lg:pr-52">
      <Logo />
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:space-y-4">
          <div className="flex space-x-1 pb-4 items-center lg:pb-0">
            <img src={phone} alt="phone" width={25} height={25} />
            <p className="link">Phone: +1-543-123-4567</p>
          </div>
          <div className="flex space-x-1 items-center">
            <img src={email} alt="email" width={25} height={25} />
            <p className="link">example@fylo.com </p>
          </div>
        </div>

        <div className="py-10 lg:py-0">
          <p className="link">About Us</p>
          <p className="link">Jobs</p>
          <p className="link">Press</p>
          <p className="link">Blog</p>
        </div>

        <div className="pb-10 lg:pb-0">
          <p className="link">Contact Us</p>
          <p className="link">Terms</p>
          <p className="link">Privacy</p>
        </div>
        <div className="flex justify-center space-x-5 link">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Footer;
