const destinations = [
  { name: "Paris", img: "/Paris.jpg" },
  { name: "Tokyo", img: "/Tokyo.jpg" },
  { name: "Dubai", img: "/Dubai.jpg" },
  { name: "New York", img: "/New.jpg" },
];

const PopularDestinations = () => {
  return (
    <div className="py-12 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {destinations.map((dest, idx) => (
          <div key={idx} className="bg-white shadow rounded overflow-hidden">
            <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
