import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "📖",
      title: "Story-Driven Recipes",
      description: "Every recipe comes with the story behind it - who taught it to you, when you first made it, and why it's special to your family."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Heritage",
      description: "Build your family's culinary tree. Connect recipes to family members and trace the journey of dishes through generations."
    },
    {
      icon: "🌍",
      title: "Cultural Discovery",
      description: "Explore authentic recipes from families around the world. Discover the cultural significance and traditions behind each dish."
    },
    {
      icon: "📝",
      title: "Personal Notes",
      description: "Add your own variations, tips, and memories to inherited recipes. Make them truly yours while honoring their origin."
    },
    {
      icon: "📱",
      title: "Easy Sharing",
      description: "Share recipes with family members instantly. Create private family cookbooks or share with the wider community."
    },
    {
      icon: "⭐",
      title: "Recipe Rating",
      description: "Rate recipes and read reviews from other families. Find the most beloved versions of traditional dishes."
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
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:animate-float transition-all duration-300">
                  {feature.icon}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;