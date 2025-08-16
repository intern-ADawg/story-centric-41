import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import familyCookingImage from "@/assets/family-cooking.jpg";

const Community = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
      avatar: "/placeholder.svg",
      story: "I found my grandmother's lost empanada recipe through a family in Argentina who had the same recipe passed down. It was like finding a piece of my heritage.",
      recipesShared: 12
    },
    {
      name: "David Chen",
      location: "San Francisco, USA", 
      avatar: "/placeholder.svg",
      story: "Sharing my mother's dumpling recipe connected me with cousins I never knew existed. Food really is the universal language of family.",
      recipesShared: 8
    },
    {
      name: "Amara Okafor",
      location: "Lagos, Nigeria",
      avatar: "/placeholder.svg",
      story: "The stories behind each recipe taught me so much about my culture. Heirloom helped me understand my family's journey across generations.",
      recipesShared: 15
    }
  ];

  return (
    <section id="community" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
              Connect Through Food
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join a global community of families sharing their culinary heritage. 
              Discover lost recipes, connect with distant relatives, and preserve 
              your family's food traditions for future generations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <div className="font-display font-bold text-3xl text-primary mb-1">5,000+</div>
                <div className="text-sm text-muted-foreground">Families Connected</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg backdrop-blur-sm">
                <div className="font-display font-bold text-3xl text-primary mb-1">25,000+</div>
                <div className="text-sm text-muted-foreground">Stories Shared</div>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Join Our Community
            </Button>
          </div>
          <div>
            <img 
              src={familyCookingImage} 
              alt="Multi-generational family cooking together in a warm kitchen"
              className="rounded-2xl shadow-soft w-full"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="font-display font-bold text-3xl text-foreground mb-4">
            Stories from Our Community
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from families who have discovered their heritage and connected 
            with loved ones through shared recipes and food traditions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-gradient-warm text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-display text-lg text-foreground">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.story}"
                </p>
                <div className="text-xs text-primary font-medium">
                  {testimonial.recipesShared} recipes shared
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;