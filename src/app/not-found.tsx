import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Phone, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background px-4">
      <Card className="max-w-2xl w-full p-8 md:p-12 text-center">
        <div className="text-9xl font-bold text-primary mb-4">404</div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Oops! Looks like you've taken a wrong turn. The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <h2 className="font-semibold mb-4">Popular Pages</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link
              href="/"
              className="p-3 rounded-lg border hover:bg-muted transition-colors text-left"
            >
              <div className="font-medium">Home</div>
              <div className="text-muted-foreground text-xs">Book a ride</div>
            </Link>
            <Link
              href="/services"
              className="p-3 rounded-lg border hover:bg-muted transition-colors text-left"
            >
              <div className="font-medium">Services</div>
              <div className="text-muted-foreground text-xs">Our offerings</div>
            </Link>
            <Link
              href="/about"
              className="p-3 rounded-lg border hover:bg-muted transition-colors text-left"
            >
              <div className="font-medium">About Us</div>
              <div className="text-muted-foreground text-xs">Our story</div>
            </Link>
            <Link
              href="/contact"
              className="p-3 rounded-lg border hover:bg-muted transition-colors text-left"
            >
              <div className="font-medium">Contact</div>
              <div className="text-muted-foreground text-xs">Get in touch</div>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          Need immediate assistance? Call us at{" "}
          <a href="tel:+15551234567" className="text-primary hover:underline font-medium">
            +1 (555) 123-4567
          </a>
        </div>
      </Card>
    </div>
  );
}
