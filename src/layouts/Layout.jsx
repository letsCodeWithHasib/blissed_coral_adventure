import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import WhatsAppButton from "../common/WhatsAppButton";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
};

export default Layout;
