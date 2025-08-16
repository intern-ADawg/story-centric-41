import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-heirloom-cream border-b border-border animate-slide-in-right">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/99bc2a0c-5c24-4aba-b11b-28c876ca22c5.png" 
              alt="Heirloom tomato logo"
              className="h-8 w-auto"
            />
            <span className="font-display font-bold text-xl text-heirloom-charcoal tracking-wide bg-heirloom-cream px-2 py-1 rounded-full">
              Heirloom
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Features
            </a>
            <a href="#recipes" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Recipes
            </a>
            <a href="#community" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
              Community
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex hover:scale-105 transition-transform duration-300">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="animate-glow">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;