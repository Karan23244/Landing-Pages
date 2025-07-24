const SearchSection = () => {
  return (
    <div className="bg-white py-8 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Where to?"
          className="w-full md:w-1/2 border p-3 rounded-lg"
        />
        <input type="date" className="w-full md:w-1/4 border p-3 rounded-lg" />
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
