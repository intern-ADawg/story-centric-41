import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe, PenTool, Share2, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Story-Driven Recipes",
      description: "Every recipe comes with the story behind it - who taught it to you, when you first made it, and why it's special to your family.",
      gradient: "from-heirloom-orange to-heirloom-orange-light"
    },
    {
      icon: Users,
      title: "Family Heritage",
      description: "Build your family's culinary tree. Connect recipes to family members and trace the journey of dishes through generations.",
      gradient: "from-heirloom-orange-light to-heirloom-cream-dark"
    },
    {
      icon: Globe,
      title: "Cultural Discovery",
      description: "Explore authentic recipes from families around the world. Discover the cultural significance and traditions behind each dish.",
      gradient: "from-heirloom-cream-dark to-heirloom-orange"
    },
    {
      icon: PenTool,
      title: "Personal Notes",
      description: "Add your own variations, tips, and memories to inherited recipes. Make them truly yours while honoring their origin.",
      gradient: "from-heirloom-orange to-heirloom-orange-dark"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share recipes with family members instantly. Create private family cookbooks or share with the wider community.",
      gradient: "from-heirloom-orange-dark to-heirloom-orange-light"
    },
    {
      icon: Star,
      title: "Recipe Rating",
      description: "Rate recipes and read reviews from other families. Find the most beloved versions of traditional dishes.",
      gradient: "from-heirloom-orange-light to-heirloom-orange"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            More Than Just Recipes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Heirloom combines the art of cooking with the power of storytelling, 
            creating connections that span generations and cultures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-warm transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:animate-float transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="font-display text-xl text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;