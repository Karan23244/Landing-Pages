const features = [
  { title: "Top-Rated Experiences", icon: "🌟" },
  { title: "Flexible Booking", icon: "🗓️" },
  { title: "24/7 Support", icon: "📞" },
  { title: "Secure Payments", icon: "💳" },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Viator?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 border rounded shadow-sm hover:shadow-lg">
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-lg font-medium">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
