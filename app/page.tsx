import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Coffee, Clock, MapPin, Star } from 'lucide-react';


export default function HomePage({ onViewMenu }: HomePageProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-medium text-foreground">
                  The Perfect
                  <span className="text-primary block">Coffee Experience</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  Discover our carefully crafted coffee blends and artisanal pastries in a warm, 
                  welcoming atmosphere that feels like home.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={onViewMenu}
                >
                  View Our Menu
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 text-base rounded-lg"
                >
                  Visit Us Today
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Open 7AM - 9PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bean City Downtown</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg"
                  alt="Coffee Shop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-medium text-foreground">Why Choose The Roasted Bean?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're passionate about serving exceptional coffee and creating memorable experiences for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Premium Coffee</h3>
                <p className="text-muted-foreground">
                  Ethically sourced beans roasted fresh daily for the perfect cup every time.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-medium">Local Community</h3>
                <p className="text-muted-foreground">
                  A welcoming space where neighbors become friends over great coffee.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-medium">All Day Fresh</h3>
                <p className="text-muted-foreground">
                  Fresh pastries baked daily and specialty drinks crafted with care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Drink Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-medium text-foreground">Today's Special</h2>
                <h3 className="text-2xl text-primary">Signature Caramel Macchiato</h3>
                <p className="text-muted-foreground text-lg">
                  Our expertly crafted espresso layered with steamed milk and finished with 
                  our house-made caramel sauce. A perfect balance of bold coffee flavor and sweet comfort.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Price</span>
                  <span className="text-xl text-primary">$5.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Size Options</span>
                  <span className="text-muted-foreground">12oz, 16oz, 20oz</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-6 text-base rounded-lg"
                onClick={onViewMenu}
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
