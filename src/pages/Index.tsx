
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewArrivals from "@/components/NewArrivals";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-soft-pink/10">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <NewArrivals />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
