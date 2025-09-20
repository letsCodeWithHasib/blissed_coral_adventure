import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedPackages from "../components/home/FeaturedPackages";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import GalleryPreview from "../components/home/GalleryPreview";
import Newsletter from "../components/home/Newsletter";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroSection />
        <FeaturedPackages />
        <WhyChooseUs />
        <Testimonials />
        <GalleryPreview />
        <Newsletter />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
