import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import PopularDestinations from "./components/PopularDestinations";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import { FaLandmark } from "react-icons/fa";

const App = () => {
  return (
    <div className="font-sans relative">

      <Header />
      <HeroSection />
      <SearchSection />
      <PopularDestinations />
      <TopTours />
      <TopAttractions />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default App;

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-700">Viator</div>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a
            href="http://couponxpres.com/Vyt5646.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition">
            Home
          </a>
          <a
            href="http://couponxpres.com/Vyt5646.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition">
            Destinations
          </a>
          <a
            href="http://couponxpres.com/Vyt5646.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition">
            Tours
          </a>
          <a
            href="http://couponxpres.com/Vyt5646.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition">
            Contact
          </a>
        </nav>
        <button className="md:hidden text-gray-600">☰</button>
      </div>
    </header>
  );
};

const tours = [
  { title: "Eiffel Tower Tour", location: "Paris", img: "/tower.jpg" },
  { title: "Great Wall Hike", location: "Beijing", img: "/wall.jpg" },
  { title: "Desert Safari", location: "Dubai", img: "/desert.jpg" },
];

const TopTours = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Top Tours</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              src={tour.img}
              alt={tour.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p className="text-sm text-gray-600">{tour.location}</p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700">
                View Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const attractions = [
  {
    name: "Colosseum",
    location: "Rome, Italy",
    image: "/Colosseum.jpg",
  },
  {
    name: "Statue of Liberty",
    location: "New York, USA",
    image: "/Liberty.jpg",
  },
  {
    name: "Big Ben",
    location: "London, UK",
    image: "/Bigben.jpg",
  },
  {
    name: "Burj Khalifa",
    location: "Dubai, UAE",
    image: "/Burjkhalifa.jpg",
  },
  {
    name: "Sydney Opera House",
    location: "Sydney, Australia",
    image: "/House.jpg",
  },
  {
    name: "Machu Picchu",
    location: "Cusco Region, Peru",
    image: "/Machupicchu.jpg",
  },
];

const TopAttractions = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Top Attractions</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1">
            <div className="relative">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="h-52 w-full object-cover top-center"
              />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 text-sm rounded-full shadow">
                #{index + 1}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-green-700 font-semibold text-lg">
                <FaLandmark />
                {attraction.name}
              </div>
              <p className="text-gray-600 text-sm mt-1">
                {attraction.location}
              </p>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm">
                Explore More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



