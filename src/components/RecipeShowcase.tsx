import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import recipeCollectionImage from "@/assets/recipe-collection.jpg";
import nonnaRagu from "@/assets/nonna-ragu.jpg";
import grandmotherChallah from "@/assets/grandmother-challah.jpg";
import abuelaMole from "@/assets/abuela-mole.jpg";
import memawCornbread from "@/assets/memaw-cornbread.jpg";
import dadisCurry from "@/assets/dadis-curry.jpg";
import obaasanMiso from "@/assets/obaasan-miso.jpg";

const RecipeShowcase = () => {
  const recipes = [
    {
      id: "1",
      title: "Nonna's Sunday Ragu",
      family: "The Rossi Family",
      generation: "4th Generation",
      story: "This ragu recipe has been passed down from my great-grandmother in Sicily. She would start cooking it at dawn every Sunday, filling the house with the most incredible aroma. The secret is using San Marzano tomatoes and letting it simmer for hours.",
      tags: ["Italian", "Sunday Dinner", "Family Tradition", "Pasta", "Slow-cooked"],
      cookTime: "4 hours",
      servings: 8,
      difficulty: "Intermediate",
      rating: 4.9,
      origin: "Sicily, Italy",
      yearCreated: "1920s",
      image: nonnaRagu,
      familyNote: "Nonna always said 'Pazienza, cara mia' - patience, my dear. The longer it cooks, the more love it holds.",
      ingredients: [
        "2 lbs ground beef and pork mix",
        "1 large onion, finely diced",
        "4 cloves garlic, minced", 
        "2 carrots, finely diced",
        "2 celery stalks, finely diced",
        "28oz can San Marzano tomatoes",
        "6oz tomato paste",
        "1 cup red wine",
        "2 bay leaves",
        "Fresh basil leaves",
        "Salt and black pepper to taste",
        "2 tbsp olive oil",
        "Parmesan cheese for serving"
      ],
      instructions: [
        "Heat olive oil in a heavy-bottom pot over medium heat. Add the meat and brown thoroughly, breaking it up with a wooden spoon.",
        "Add diced onion, carrot, and celery. Cook until vegetables are softened, about 8 minutes.",
        "Add garlic and cook for another minute until fragrant.",
        "Stir in tomato paste and cook for 2 minutes, then add red wine and let it reduce by half.",
        "Add the San Marzano tomatoes, crushing them by hand as you add them. Add bay leaves and season with salt and pepper.",
        "Bring to a simmer, then reduce heat to very low. Cover partially and let simmer for 3-4 hours, stirring occasionally.",
        "Remove bay leaves, adjust seasoning, and stir in fresh basil before serving over your favorite pasta."
      ]
    },
    {
      id: "2",
      title: "Grandmother's Challah",
      family: "The Cohen Family", 
      generation: "3rd Generation",
      story: "My grandmother learned this recipe from her mother in Poland. The secret is in the braiding technique that represents the circle of life, and the honey that sweetens our hopes for the new year.",
      tags: ["Jewish", "Bread", "Holiday", "Shabbat", "Traditional"],
      cookTime: "3 hours",
      servings: 12,
      difficulty: "Advanced",
      rating: 4.8,
      origin: "Warsaw, Poland",
      yearCreated: "1910s",
      image: grandmotherChallah,
      familyNote: "Grandmother would hum old Yiddish songs while kneading. She said the dough could feel the love in your hands.",
      ingredients: [
        "4 cups bread flour",
        "1 packet active dry yeast",
        "1/4 cup warm water",
        "3 large eggs (2 for dough, 1 for wash)",
        "1/4 cup honey",
        "1/4 cup vegetable oil",
        "1 tsp salt",
        "1 tbsp sugar",
        "Sesame or poppy seeds for topping"
      ],
      instructions: [
        "Dissolve yeast in warm water with a pinch of sugar. Let stand until foamy, about 5 minutes.",
        "In a large bowl, whisk together 2 eggs, honey, oil, and salt.",
        "Add the yeast mixture and gradually mix in flour until a soft dough forms.",
        "Knead on a floured surface for 8-10 minutes until smooth and elastic.",
        "Place in an oiled bowl, cover, and let rise for 1 hour until doubled.",
        "Punch down dough and divide into 6 equal pieces. Roll each into a long rope.",
        "Braid the ropes together in a traditional 6-strand pattern.",
        "Place on parchment-lined baking sheet, cover, and rise 45 minutes.",
        "Brush with beaten egg and sprinkle with seeds. Bake at 350°F for 25-30 minutes until golden."
      ]
    },
    {
      id: "3",
      title: "Abuela's Mole Negro",
      family: "The Garcia Family",
      generation: "5th Generation", 
      story: "This complex mole has over 20 ingredients and takes two days to prepare. My great-great-grandmother created this recipe for special celebrations in Oaxaca. Each ingredient tells part of our family's story.",
      tags: ["Mexican", "Special Occasion", "Complex", "Oaxacan", "Ceremonial"],
      cookTime: "2 days",
      servings: 10,
      difficulty: "Expert",
      rating: 4.9,
      origin: "Oaxaca, Mexico",
      yearCreated: "1880s",
      image: abuelaMole,
      familyNote: "Abuela said mole negro is like life - it takes time, patience, and many different experiences to create something beautiful.",
      ingredients: [
        "6 mulato chiles, deseeded",
        "4 ancho chiles, deseeded",
        "3 chipotle chiles",
        "2 pasilla chiles",
        "1 white onion, quartered",
        "6 garlic cloves",
        "3 tomatoes",
        "2 tomatillos",
        "1/4 cup sesame seeds",
        "2 tbsp pumpkin seeds",
        "1 corn tortilla, torn",
        "2 slices bread, torn",
        "1/4 cup raisins",
        "3 cloves",
        "1 cinnamon stick",
        "1/2 tsp anise seeds",
        "1 tablet Mexican chocolate",
        "2 tbsp lard or oil",
        "Salt to taste",
        "Chicken stock as needed"
      ],
      instructions: [
        "Toast all chiles in a dry pan until fragrant, then soak in hot water for 30 minutes.",
        "Char onion, garlic, tomatoes, and tomatillos over open flame until blackened in spots.",
        "Toast sesame seeds, pumpkin seeds, tortilla pieces, and bread until golden.",
        "In batches, blend chiles with their soaking liquid until smooth. Strain and set aside.",
        "Blend charred vegetables with a little water until smooth.",
        "Grind toasted seeds, bread, tortilla, raisins, and spices in a spice grinder.",
        "Heat lard in a large pot and fry the chile mixture for 10 minutes, stirring constantly.",
        "Add vegetable mixture and cook 5 minutes more.",
        "Stir in ground seed mixture and chocolate. Add stock to reach desired consistency.",
        "Simmer for 45 minutes, stirring frequently. Season with salt.",
        "Let cool completely, then refrigerate overnight. Reheat gently before serving."
      ]
    },
    {
      id: "4",
      title: "Memaw's Cornbread",
      family: "The Johnson Family",
      generation: "4th Generation",
      story: "Memaw made this cornbread every Sunday after church in her cast iron skillet. The secret is buttermilk and bacon grease, and never, ever adding sugar. 'Sweet cornbread ain't cornbread,' she'd say.",
      tags: ["Southern", "Comfort Food", "Sunday Dinner", "Cast Iron", "Traditional"],
      cookTime: "30 minutes",
      servings: 8,
      difficulty: "Easy",
      rating: 4.7,
      origin: "Georgia, USA",
      yearCreated: "1940s",
      image: memawCornbread,
      familyNote: "Memaw would test the skillet heat by sprinkling water in it. If it danced and sizzled just right, it was ready.",
      ingredients: [
        "1 cup yellow cornmeal",
        "1 cup all-purpose flour", 
        "1 tbsp baking powder",
        "1 tsp salt",
        "1 cup buttermilk",
        "2 large eggs",
        "1/4 cup bacon grease or vegetable oil",
        "2 tbsp additional bacon grease for skillet"
      ],
      instructions: [
        "Preheat oven to 425°F. Place a 10-inch cast iron skillet in the oven while it heats.",
        "In a large bowl, whisk together cornmeal, flour, baking powder, and salt.",
        "In another bowl, whisk together buttermilk, eggs, and 1/4 cup bacon grease.",
        "Pour wet ingredients into dry ingredients and stir just until combined. Don't overmix.",
        "Carefully remove hot skillet from oven and add 2 tbsp bacon grease, swirling to coat.",
        "Pour batter into the sizzling skillet - it should sizzle when it hits the grease.",
        "Bake for 20-25 minutes until golden brown and a toothpick comes out clean.",
        "Let cool for 5 minutes, then turn out onto a wire rack. Serve warm with butter and honey."
      ]
    },
    {
      id: "5",
      title: "Dadi's Butter Chicken",
      family: "The Sharma Family",
      generation: "3rd Generation",
      story: "Dadi learned this recipe in Delhi before partition. She modified it over the years, adding her own touch with extra garam masala and a hint of fenugreek. It was the first dish she taught all her daughters-in-law.",
      tags: ["Indian", "Curry", "Family Recipe", "Delhi Style", "Comfort Food"],
      cookTime: "1 hour",
      servings: 6,
      difficulty: "Intermediate",
      rating: 4.8,
      origin: "Delhi, India",
      yearCreated: "1930s",
      image: dadisCurry,
      familyNote: "Dadi always said the key is to cook with love and let the spices bloom. 'Sabr rakho,' she'd say - have patience.",
      ingredients: [
        "2 lbs boneless chicken, cut into pieces",
        "1 cup plain yogurt",
        "1 tbsp ginger-garlic paste",
        "1 tsp red chili powder",
        "1/2 tsp turmeric",
        "Salt to taste",
        "2 tbsp ghee",
        "1 large onion, finely chopped",
        "28oz can crushed tomatoes",
        "1 tbsp garam masala",
        "1 tsp cumin powder",
        "1 tsp coriander powder",
        "1/2 cup heavy cream",
        "2 tbsp butter",
        "1 tsp dried fenugreek leaves",
        "Fresh cilantro for garnish"
      ],
      instructions: [
        "Marinate chicken with yogurt, half the ginger-garlic paste, chili powder, turmeric, and salt for 30 minutes.",
        "Heat ghee in a heavy-bottom pan and cook marinated chicken until just done. Remove and set aside.",
        "In the same pan, sauté onions until golden brown.",
        "Add remaining ginger-garlic paste and cook for a minute.",
        "Add crushed tomatoes and cook until oil separates, about 10 minutes.",
        "Add garam masala, cumin, and coriander. Cook for 2 minutes.",
        "Return chicken to the pan and simmer for 10 minutes.",
        "Stir in cream, butter, and fenugreek leaves. Simmer for 5 more minutes.",
        "Garnish with fresh cilantro and serve with basmati rice and naan."
      ]
    },
    {
      id: "6",
      title: "Obaasan's Miso Soup",
      family: "The Tanaka Family",
      generation: "5th Generation",
      story: "Obaasan made this simple yet profound soup every morning in Kyoto. She believed that starting the day with miso soup brought harmony to the body and spirit. The dashi must be made fresh, never from powder.",
      tags: ["Japanese", "Daily Ritual", "Healthy", "Traditional", "Breakfast"],
      cookTime: "20 minutes",
      servings: 4,
      difficulty: "Easy",
      rating: 4.6,
      origin: "Kyoto, Japan",
      yearCreated: "1900s",
      image: obaasanMiso,
      familyNote: "Obaasan taught us that miso soup is meditation in a bowl. 'Kokoro wo karaku suru' - empty your mind and taste with your heart.",
      ingredients: [
        "4 cups water",
        "1 piece kombu (kelp), 4 inches",
        "1/2 cup bonito flakes",
        "3 tbsp miso paste (white or red)",
        "1/2 block silken tofu, cubed",
        "2 green onions, thinly sliced",
        "1 sheet nori, cut into strips",
        "Few drops of sesame oil (optional)"
      ],
      instructions: [
        "Soak kombu in water for 30 minutes, then bring to a gentle simmer. Remove kombu just before boiling.",
        "Add bonito flakes and simmer for 2 minutes, then strain through fine mesh to make dashi.",
        "Return dashi to pot and warm gently. Never boil miso soup once miso is added.",
        "In a small bowl, whisk miso paste with a few spoonfuls of warm dashi until smooth.",
        "Add miso mixture back to the pot and stir gently.",
        "Add tofu cubes and warm through without boiling.",
        "Ladle into bowls and garnish with green onions and nori strips.",
        "Add a drop of sesame oil if desired. Serve immediately."
      ]
    }
  ];

  return (
    <section id="recipes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Featured Recipe Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the rich histories behind beloved family recipes and the generations 
            who have lovingly preserved them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 animate-fade-in">
          <div>
            <img 
              src={recipeCollectionImage} 
              alt="Collection of traditional family recipe cards and dishes"
              className="rounded-2xl shadow-soft w-full hover:shadow-warm transition-all duration-500 animate-float"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-display font-bold text-3xl text-foreground">
              Recipes with Rich Histories
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each recipe in our collection comes with its own unique story. From immigration 
              tales to holiday traditions, discover how food connects us to our past and 
              brings families together across generations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="animate-scale-in">📚 10,000+ Stories</Badge>
              <Badge variant="secondary" className="animate-scale-in [animation-delay:100ms]">🌍 150+ Countries</Badge>
              <Badge variant="secondary" className="animate-scale-in [animation-delay:200ms]">👨‍👩‍👧‍👦 Multi-generational</Badge>
            </div>
            <Button variant="hero" size="lg" className="animate-glow">
              Browse All Stories
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in [animation-delay:300ms]">
          {recipes.map((recipe, index) => (
            <div key={recipe.id} className="animate-scale-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="warmOutline" size="lg">
            View All Recipe Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;