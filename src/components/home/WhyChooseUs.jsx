const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "🏖️",
      title: "Beach Adventures",
      desc: "Explore pristine beaches with expert guides.",
    },
    {
      icon: "🛶",
      title: "Water Sports",
      desc: "Kayaking, snorkeling, and island hopping.",
    },
    {
      icon: "🏨",
      title: "Luxury Stays",
      desc: "Stay in premium resorts and boutique hotels.",
    },
    {
      icon: "💯",
      title: "Trusted Services",
      desc: "Verified tours with 100% customer satisfaction.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-coral-500 mb-10 text-center font-sans">
        Why Choose Us
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center"
          >
            <div className="text-5xl mb-4">{b.icon}</div>
            <h3 className="text-xl font-semibold font-sans mb-2">{b.title}</h3>
            <p className="text-gray-600 font-medium">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
