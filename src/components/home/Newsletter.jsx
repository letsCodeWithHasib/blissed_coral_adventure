const Newsletter = () => {
  return (
    <section className="py-16 bg-coral-500">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-4 font-sans">
          Subscribe for Updates
        </h2>
        <p className="text-white mb-6 font-medium">
          Get latest travel packages and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg outline-none w-full sm:w-auto flex-1"
          />
          <button className="px-6 py-2 bg-white text-coral-500 font-semibold rounded-lg hover:bg-gray-100 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
