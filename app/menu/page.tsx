import React, { useState } from 'react';
import { Button } from '@/ui/button';
import { Card, CardContent, CardHeader } from '@/ui/card';
import { Badge } from '@/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { ImageWithFallback } from '@/figma/ImageWithFallback';
import { Plus, Star } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'drinks' | 'pastries' | 'meals';
  popular?: boolean;
  rating?: number;
}

export function MenuPage() {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const menuItems: MenuItem[] = [
    // Drinks
    {
      id: 'espresso',
      name: 'Classic Espresso',
      description: 'Rich, bold espresso shot made from our signature blend',
      price: 3.50,
      image: 'https://images.unsplash.com/photo-1624515385619-f6a54f233413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NTYyNzU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks',
      popular: true,
      rating: 4.8
    },
    {
      id: 'caramel-macchiato',
      name: 'Caramel Macchiato',
      description: 'Espresso layered with steamed milk and house-made caramel sauce',
      price: 5.95,
      image: 'https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBsYXR0ZSUyMGFydHxlbnwxfHx8fDE3NTYzMzAxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks',
      rating: 4.9
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew Coffee',
      description: 'Smooth, refreshing cold brew steeped for 12 hours',
      price: 4.25,
      image: 'https://images.unsplash.com/photo-1624515385619-f6a54f233413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NTYyNzU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks',
      rating: 4.7
    },
    {
      id: 'cappuccino',
      name: 'Traditional Cappuccino',
      description: 'Perfect balance of espresso, steamed milk, and foam',
      price: 4.75,
      image: 'https://images.unsplash.com/photo-1624515385619-f6a54f233413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NTYyNzU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'drinks',
      popular: true,
      rating: 4.8
    },
    
    // Pastries
    {
      id: 'butter-croissant',
      name: 'Butter Croissant',
      description: 'Flaky, buttery croissant baked fresh daily',
      price: 3.25,
      image: 'https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzU2MzMyOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'pastries',
      popular: true,
      rating: 4.9
    },
    {
      id: 'chocolate-muffin',
      name: 'Double Chocolate Muffin',
      description: 'Rich chocolate muffin with chocolate chips',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzU2MzMyOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'pastries',
      rating: 4.6
    },
    {
      id: 'danish',
      name: 'Fruit Danish',
      description: 'Delicate pastry with seasonal fruit and cream cheese',
      price: 4.95,
      image: 'https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzU2MzMyOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'pastries',
      rating: 4.7
    },
    
    // Meals
    {
      id: 'avocado-toast',
      name: 'Avocado Toast',
      description: 'Smashed avocado on artisan bread with heirloom tomatoes',
      price: 8.95,
      image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzU2MzE4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'meals',
      popular: true,
      rating: 4.8
    },
    {
      id: 'breakfast-sandwich',
      name: 'Breakfast Sandwich',
      description: 'Cage-free eggs, aged cheddar, and bacon on a brioche bun',
      price: 9.50,
      image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzU2MzE4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'meals',
      rating: 4.7
    },
    {
      id: 'quinoa-bowl',
      name: 'Mediterranean Quinoa Bowl',
      description: 'Quinoa with roasted vegetables, feta, and tahini dressing',
      price: 11.95,
      image: 'https://images.unsplash.com/photo-1676471970358-1cff04452e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwdG9hc3QlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzU2MzE4MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'meals',
      rating: 4.6
    }
  ];

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const getItemsByCategory = (category: string) => {
    return menuItems.filter(item => item.category === category);
  };

  const MenuItemCard = ({ item }: { item: MenuItem }) => (
    <Card className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback 
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-medium leading-tight">{item.name}</h3>
            {item.rating && (
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                <span className="text-xs text-muted-foreground">{item.rating}</span>
              </div>
            )}
          </div>
          {item.popular && (
            <Badge variant="secondary" className="text-xs">Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-primary">
            ${item.price.toFixed(2)}
          </span>
          <Button 
            size="sm" 
            onClick={() => addToCart(item.id)}
            className="rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
            {cart[item.id] && (
              <Badge variant="secondary" className="ml-2 text-xs">
                {cart[item.id]}
              </Badge>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-medium text-foreground">Our Menu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully curated selection of artisanal coffee, fresh pastries, and wholesome meals.
        </p>
      </div>

      {/* Cart Summary */}
      {Object.keys(cart).length > 0 && (
        <div className="bg-card border rounded-2xl p-4 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Cart Summary</h3>
              <p className="text-sm text-muted-foreground">
                {Object.values(cart).reduce((a, b) => a + b, 0)} items added
              </p>
            </div>
            <Button variant="outline" size="sm">
              View Cart
            </Button>
          </div>
        </div>
      )}

      {/* Menu Tabs */}
      <Tabs defaultValue="drinks" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 h-12 rounded-2xl">
          <TabsTrigger value="drinks" className="rounded-xl">
            Coffee & Drinks
          </TabsTrigger>
          <TabsTrigger value="pastries" className="rounded-xl">
            Pastries & Sweets
          </TabsTrigger>
          <TabsTrigger value="meals" className="rounded-xl">
            Meals & Bowls
          </TabsTrigger>
        </TabsList>

        <TabsContent value="drinks" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getItemsByCategory('drinks').map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pastries" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getItemsByCategory('pastries').map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meals" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getItemsByCategory('meals').map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}