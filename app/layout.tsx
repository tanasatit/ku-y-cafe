// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Roasted Bean",
  description: "Serving artisanal coffee and pastries since 2020.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { id: "home", label: "Home" , href: "/" },
    { id: "menu", label: "Menu" , href: "/menu" },
    { id: "revenue", label: "Revenue" , href: "/revenue" },
    { id: "stock", label: "Stock" , href: "/stock" },
    { id: "contact", label: "Contact" , href:"/contact" },
  ];

  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen bg-background flex flex-col"}>
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b bg-primary">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-foreground" />
              <span className="text-xl font-medium text-foreground">The Roasted Bean</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
            
              {navItems.map((item) => (
                <Link key={item.id} href={item.href}>
                  <Button key={item.id} variant="ghost" className="text-sm">
                    {item.label}
                  </Button>
                </Link>
          
              ))}
              
            </nav>

            {/* Mobile menu button (placeholder) */}
            <Button variant="ghost" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t bg-card mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Coffee className="h-6 w-6 text-primary" />
                  <span className="font-medium">The Roasted Bean</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Serving the finest artisanal coffee and pastries in a warm, welcoming atmosphere since 2020.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="font-medium">Quick Links</h4>
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="font-medium">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>123 Coffee Street, Bean City</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(555) 123-BEAN</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>hello@roastedbean.com</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="font-medium">Follow Us</h4>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="p-2">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 The Roasted Bean. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

