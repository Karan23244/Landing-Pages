import React from "react";
import { ShoppingCart,Facebook, Instagram, Twitter } from "lucide-react";
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    img: "headphone.webp",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    img: "smartwatch.webp",
  },
  {
    id: 3,
    name: "Sunglasses",
    price: "$59",
    img: "sunglasses.webp",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: "$129",
    img: "leatherbagpack.webp",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: "$89",
    img: "speaker.webp",
  },
  {
    id: 6,
    name: "Running Shoes",
    price: "$119",
    img: "runningshoes.webp",
  },
  {
    id: 7,
    name: "Hoodie",
    price: "$49",
    img: "hoodie.webp",
  },
  {
    id: 8,
    name: "Fitness Tracker",
    price: "$79",
    img: "fitness.webp",
  },
];
function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Vrboo</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Shop
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
        <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" />
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-pink-100 text-center py-20">
      <h2 className="text-5xl font-bold mb-4">Discover Your Style</h2>
      <p className="text-lg mb-6 text-gray-700">
        Trendy looks, smart gadgets & deals
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
        Start Shopping
      </button>
    </section>
  );
};
const Categories = () => {
  const cats = ["Fashion", "Electronics", "Accessories", "Footwear"];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-3xl font-semibold mb-6 text-center">
        Shop by Category
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {cats.map((cat, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 w-40 text-center rounded-lg hover:bg-blue-50">
            <h4 className="font-medium">{cat}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
const Products=()=> {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-3xl font-semibold mb-10 text-center">Featured Products</h3>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <img src={product.img} alt={product.name} className="w-full h-48 object-contain rounded-md" />
            <h4 className="mt-4 text-lg font-medium">{product.name}</h4>
            <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const Testimonials=()=> {
  const users = [
    { name: "Aman S.", feedback: "Amazing quality and fast delivery!" },
    { name: "Riya M.", feedback: "The best online shopping experience!" },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <h3 className="text-3xl font-semibold text-center mb-8">What Our Customers Say</h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {users.map((u, i) => (
          <div key={i} className="bg-white p-6 shadow rounded-lg">
            <p className="italic text-gray-600 mb-2">"{u.feedback}"</p>
            <h4 className="font-semibold text-blue-600">– {u.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

 const Newsletter=()=> {
  return (
    <section className="bg-blue-100 py-12">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h3 className="text-3xl font-semibold mb-4">Join Our Newsletter</h3>
        <p className="mb-6 text-gray-700">Stay updated on new arrivals & exclusive offers</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

const Footer=()=> {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-700">&copy; 2025 Vrboo. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}