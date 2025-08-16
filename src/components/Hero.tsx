import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-cooking.jpg";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ["Emotion", "Memory", "Story", "Experience"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Family cooking together sharing recipes and traditions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heirloom-charcoal/70 via-heirloom-charcoal/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative animate-fade-in">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6 bg-heirloom-cream/90 text-heirloom-charcoal animate-scale-in">
            ✨ Preserving Family Traditions
          </Badge>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-6 leading-tight animate-fade-in [animation-delay:200ms]">
            A Recipe for Every{" "}
            <span className="inline-block font-cursive font-semibold text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-heirloom-orange-light to-heirloom-orange animate-glow transition-all duration-1000 ease-in-out transform">
              {rotatingWords[currentWordIndex]}
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in [animation-delay:400ms]">
            Discover family recipes that have been passed down through generations. 
            Share the stories behind your favorite dishes and connect with others 
            through the universal language of food.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
            <Button variant="hero" size="xl" className="group animate-glow">
              Start Sharing Stories
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="warmOutline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-heirloom-charcoal hover:scale-105 transition-all duration-300">
              Explore Recipes
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 mt-12 text-white/80 animate-fade-in [animation-delay:800ms]">
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-display font-bold text-2xl text-white animate-glow">10K+</div>
              <div className="text-sm">Recipe Stories</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-display font-bold text-2xl text-white animate-glow [animation-delay:200ms]">5K+</div>
              <div className="text-sm">Families Connected</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="font-display font-bold text-2xl text-white animate-glow [animation-delay:400ms]">100+</div>
              <div className="text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;