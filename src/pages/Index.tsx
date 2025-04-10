import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AllProductsShowcase from "@/components/AllProductsShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-soft-pink/10">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <AllProductsShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
