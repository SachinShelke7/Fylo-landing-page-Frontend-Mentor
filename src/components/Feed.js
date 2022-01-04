import React from "react";
import About from "./About";
import Footer from "./Footer";
import first from "../images/illustration-1.svg";
import second from "../images/illustration-2.svg";
import arrow from "../images/icon-arrow.svg";
import quote from "../images/icon-quotes.svg";
import profile from "../images/avatar-testimonial.jpg";

function Feed() {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col md:flex-row-reverse justify-between lg:pt-20 lg:pl-8">
        <div className="p-10 md:max-w-2xl">
          <img src={first} alt="first" />
        </div>
        <div className="p-8">
          <div className="flex justify-center text-center">
            <h2 className="text-3xl font-bold max-w-sm md:max-w-lg lg:max-w-xl md:text-left font-raleway pb-8">
              All your files in one secure location, accessible anywhere.
            </h2>
          </div>
          <div className="">
            <p className="text-lg max-w-sm md:max-w-lg   text-center md:text-left pb-6">
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 space-x-0 md:space-x-3 mx-10 md:mx-0">
            <input
              type="text"
              placeholder="Enter Your Email..."
              className="border border-black py-2 pl-2 rounded-sm flex flex-grow"
            />
            <button className="bg-brightBlue w-full md:w-32 py-2 md:py-3 rounded-sm text-white font-medium hover:bg-blue-400">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:pb-10 lg:justify-between lg:pl-8">
        {/* first */}
        <div>
          <img src={second} alt="second" className="p-10 md:max-w-2xl" />
        </div>
        {/* second */}
        <div className="">
          <h4 className="text-xl lg:text-4xl font-bold text-center lg:text-left lg:pl-6 py-6">
            Stay productive, wherever you are
          </h4>
          <div className="mx-6 text-lg flex flex-col space-y-5 lg:max-w-[550px]">
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </div>
          <div className="flex justify-center lg:justify-start lg:pl-6 pt-10">
            <a
              href=""
              className="text-moderateCyan border-b border-moderateCyan pb-1 hover:text-green-300"
            >
              See how Fylo works &nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <img
              src={arrow}
              alt="arrow"
              className="-ml-5"
              width={25}
              height={25}
            />
          </div>

          <div className="bg-white shadow-2xl m-14 lg:m-6 p-6 rounded-lg flex flex-col space-y-3 lg:max-w-[400px]">
            <div>
              <img src={quote} alt="quote" width={20} />
            </div>
            <p className="font-medium">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex items-center space-x-2">
              <img
                src={profile}
                alt="profle"
                width={35}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-sm font-raleway">Kyle Burton</h4>
                <p className="text-xs">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default Feed;
