"use client";
import React from "react";
import { FcMissedCall } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start min-h-screen p-6 md:p-10 bg-gradient-to-b from-gray-100 to-gray-200 text-blue-950">
        <h1 className="text-3xl md:text-4xl font-serif -mt-2 md:-mt-6 mb-10 text-gray-800">
          <span className="border-b-4 border-red-600">Contact Me</span>
        </h1>
        <div className="flex flex-col items-center w-full space-y-6">
          <div className="text-center">
            <h2 className="text-2xl mb-2 font-semibold">Have You Any Questions?</h2>
            <h3 className="text-xl mb-4 font-medium">I'm at your service</h3>
          </div>
          <div className="text-center space-y-2">
            <FcMissedCall className="text-4xl mx-auto" />
            <p className="text-lg font-medium">Call Me: +91 8433376122</p>
            <p className="text-lg font-medium">Send me an email</p>
            <p className="text-sm text-gray-700">
              I'm very responsive to messages and I try to respond within 24 hours.
            </p>
          </div>

          <form className="w-full max-w-5xl p-4 md:p-0 space-y-6">
            {/* Name and Email */}
            <div className="flex flex-wrap mb-6 space-y-6 md:space-y-0">
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-subject"
                type="text"
                placeholder="Subject"
                aria-label="Subject"
              />
            </div>

            {/* Message */}
            <div className="w-full px-3">
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message"
                rows="4"
                placeholder="Your message..."
                aria-label="Message"
              />
            </div>

            {/* Submit Button */}
              <button className="mt-8 w-60 h-12 bg-red-600 text-white font-semibold py-3 px-5 rounded-3xl hover:bg-red-700 transition duration-300">
                Submit
              </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
