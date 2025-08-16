import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RecipeShowcase from "@/components/RecipeShowcase";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <Header />
      <main>
        <Hero />
        <Features />
        <RecipeShowcase />
        <Community />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
