import React from "react";
import { FaDownload } from "react-icons/fa";

const GetAppButton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">MegaPari New</h1>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 text-lg">
          <FaDownload className="mr-2" />
          Download App
        </a>

        <p className="text-sm text-gray-500 mt-2">
          Available instantly after installation. Only for users 18+ and above.
          Please check local regulations.
        </p>
      </div>
    </div>
  );
};

export default GetAppButton;
