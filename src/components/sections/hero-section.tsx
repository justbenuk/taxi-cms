import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, Shield, Star } from "lucide-react";
import Link from "next/link";
import PageContainer from "../shared/page-container";

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <PageContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-300 text-black px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 text-primary fill-black" />
              Rated 4.5/5 by 1,237 customers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Reliable
              <span className="block text-yellow-300">Taxi Service</span>
              Anytime, Anywhere
            </h1>

            <p className="text-lg text-muted-foreground">
              Experience premium transportation with professional drivers, comfortable vehicles,
              and unbeatable prices. Available 24/7 for all your travel needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg bg-yellow-300" asChild>
                <Link href="/book-now">Book a Ride</Link>
              </Button>
              <Button variant="outline" className="text-lg" asChild>
                <Link href="tel:0123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Key Features */}
          <div className="space-y-4">
            place an image here
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
