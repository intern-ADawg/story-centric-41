import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, ChefHat, Heart, Star } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  family: string;
  generation: string;
  story: string;
  tags: string[];
  cookTime: string;
  servings: number;
  difficulty: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
  familyNote: string;
  image: string;
  origin: string;
  yearCreated: string;
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group hover:shadow-warm transition-all duration-500 cursor-pointer border-border/50 hover:border-primary/30 hover:-translate-y-1">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-white/90 text-heirloom-charcoal backdrop-blur-sm">
                {recipe.generation}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium text-heirloom-charcoal">{recipe.rating}</span>
            </div>
          </div>
          
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{recipe.cookTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{recipe.servings}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ChefHat className="w-3 h-3" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
            <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {recipe.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {recipe.family} • {recipe.origin}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2 text-sm">
              {recipe.story}
            </p>
            <div className="flex flex-wrap gap-1">
              {recipe.tags.slice(0, 3).map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {recipe.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{recipe.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <Badge className="mb-2 bg-heirloom-orange/90">
                {recipe.generation}
              </Badge>
              <DialogTitle className="font-display text-3xl font-bold">
                {recipe.title}
              </DialogTitle>
              <p className="text-white/90">{recipe.family} • {recipe.origin}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-heirloom-charcoal">{recipe.rating}</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center justify-around p-4 bg-heirloom-cream/30 rounded-lg">
              <div className="text-center">
                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.cookTime}</div>
                <div className="text-xs text-muted-foreground">Cook Time</div>
              </div>
              <div className="text-center">
                <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.servings}</div>
                <div className="text-xs text-muted-foreground">Servings</div>
              </div>
              <div className="text-center">
                <ChefHat className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-sm font-medium">{recipe.difficulty}</div>
                <div className="text-xs text-muted-foreground">Level</div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-warm/10 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-primary" />
                <span className="font-display font-semibold text-foreground">Family Story</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{recipe.story}</p>
              {recipe.familyNote && (
                <>
                  <Separator className="my-3" />
                  <p className="text-sm italic text-muted-foreground">"{recipe.familyNote}"</p>
                </>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">Instructions</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-warm text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeCard;