
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomeCaftanShowcase from "@/components/HomeCaftanShowcase";
import Footer from "@/components/Footer";
import InstagramFloatingButton from "@/components/InstagramFloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-soft-pink/10 relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <HomeCaftanShowcase />
        <InstagramFloatingButton />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
