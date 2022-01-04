import React from "react";

function About() {
  return (
    <div className="flex flex-col lg:flex-row space-y-4 bg-desatBlue pb-16 text-white">
      <div className="lg:w-1/2">
        <h4 className="text-xl font-bold text-center pt-10 lg:text-left lg:pl-6 lg:pb-4">
          Get early access today
        </h4>
        <p className="mx-6 pb-3">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>

      <div className="flex flex-col space-y-2 mx-10 lg:w-1/2 lg:justify-center">
        <input
          type="text"
          placeholder="Enter Your Email..."
          className="border border-black py-2 pl-2 rounded-sm max-w-xl text-black"
        />
        <button className="bg-brightBlue w-full py-2 rounded-sm text-white font-medium lg:w-40 hover:bg-blue-400">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default About;
