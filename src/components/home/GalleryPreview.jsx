const GalleryPreview = () => {
  const images = [
    "/images/andaman1.jpg",
    "/images/andaman2.jpg",
    "/images/andaman3.jpg",
    "/images/andaman4.jpg",
    "/images/andaman5.jpg",
    "/images/andaman6.jpg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-coral-500 mb-10 text-center font-sans">
        Gallery
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 px-6">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl cursor-pointer">
            <img
              src={img}
              alt={`Gallery ${i}`}
              className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPreview;
