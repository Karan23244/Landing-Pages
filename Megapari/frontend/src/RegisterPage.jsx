// RegisterPage.jsx
import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-2xl p-10 text-center space-y-6">
        <img
          src="/mpn.png"
          alt="MegaPari Logo"
          className="mx-auto h-34 w-[250px] mb-4 object-contain"
        />
        <h1 className="text-4xl font-extrabold text-gray-800">
          Welcome to MegaPari
        </h1>
        <p className="text-gray-600 text-lg">
          🎁 Claim your{" "}
          <span className="font-semibold text-blue-600">Exclusive Bonus</span>{" "}
          and enjoy top-tier games and sports betting!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a
            href="/apk-download"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300">
            📲 Download the App
          </a>
          <a
            href="https://megapari.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300">
            🌐 Visit Website
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-4 italic">
          ⚠️ Gambling involves risk. Play responsibly. Available for users aged
          18+ and only in permitted regions.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
